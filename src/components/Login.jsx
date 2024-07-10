import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate()
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let userCredential;
      if (isSignup) {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        console.log("Signup successful");
      } else {
        userCredential = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        console.log("Signin successful");
      }

      const user = userCredential.user;
      const token = await user.getIdToken();
      const email = user.email;
      const firstName = email.substring(0, email.indexOf('@'));
      console.log("Token:", token);
      localStorage.setItem("userToken", token);
      localStorage.setItem("firstName", firstName);
      navigate("/", { state: { token, firstName } });
      // You can now use the token as needed
    } catch (error) {
      console.error("Error:", error.message);
      alert(`Error occurred: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="mt-10 w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-bold">
          {isSignup ? "Sign Up" : "Login"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-start"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-start"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className={`rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${loading ? "cursor-not-allowed opacity-50" : ""}`}
              disabled={loading}
            >
              {loading ? "Loading..." : isSignup ? "Sign Up" : "Login"}
            </button>
            <button
              type="button"
              className="text-sm text-blue-500 hover:text-blue-700 focus:outline-none"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup
                ? "Already have an account? Login"
                : "Don't have an account? Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
