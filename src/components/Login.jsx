import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });
  const [loading, setLoading] = useState(false); // State to track loading state

  // Replace with your actual Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDf9Ga8IW3_wJU2Nhw96HdXQtMIIb330eI",
    authDomain: "iit-mandi-c1b08.firebaseapp.com",
    projectId: "iit-mandi-c1b08",
    storageBucket: "iit-mandi-c1b08.appspot.com",
    messagingSenderId: "56949869499",
    appId: "1:56949869499:web:a0615868b10143e65d929e",
    measurementId: "G-X24SC9CF2X"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when submitting form
    try {
      let userCredential;
      if (isSignup) {
        userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      } else {
        userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      }
      console.log("User:", userCredential.user);
      // Handle successful response
    } catch (error) {
      console.error("Error:", error);
      // Handle error response
    } finally {
      setLoading(false); // Set loading state to false after authentication operation completes
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="mt-10 w-full max-w-md bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isSignup ? "Sign Up" : "Login"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-start"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-start"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading} // Disable button when loading is true
            >
              {loading ? 'Loading...' : (isSignup ? "Sign Up" : "Login")}
            </button>
            <button
              type="button"
              className="text-sm text-blue-500 hover:text-blue-700 focus:outline-none"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
