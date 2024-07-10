import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Button from "./ui/Button";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [userToken, setUserToken] = useState();
 const [toggle,setToggle]=useState(false);
  useEffect(() => {
    const storedFirstName = localStorage.getItem("firstName");
    const Token = localStorage.getItem("userToken");
    setUserToken(Token);
    if (storedFirstName && userToken) {
      setFirstName(storedFirstName);
    }
  }, [userToken,toggle]);

  return (
    <div className="sticky top-0 z-50 bg-[#F2F7FF] bg-opacity-80 p-3 backdrop-blur-md">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <a href="/">
          <img
            className="h-[50px] w-[146px] object-contain"
            src="/photo1.jpeg"
            alt="Logo"
          />
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          <li>
            <RouterLink
              to="/"
              className="text-primary-start hover:text-primary-start hover:opacity-100"
            >
              Home
            </RouterLink>
          </li>

          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer text-para opacity-80 hover:text-primary-start hover:opacity-100"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer text-para opacity-80 hover:text-primary-start hover:opacity-100"
            >
              Contact
            </ScrollLink>
          </li>
          {firstName && userToken ? (
            <li style={{ color: "green" }}>
            {firstName} &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              <button
                onClick={() => {
                  localStorage.removeItem("userToken");
                  localStorage.removeItem("firstName");
                  setUserToken(null) // Optionally, reload the page to reflect changes
                  setToggle(!toggle);
                }}
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <RouterLink
                to="/login"
                className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
              >
                Register/Login
              </RouterLink>
            </li>
          )}
        </ul>

        <Button className="hidden md:flex" />

        {/* Mobile Screen */}
        <div className="relative md:hidden">
          {isOpen ? (
            <IoMdClose
              onClick={() => setIsOpen(false)}
              className="size-7 cursor-pointer text-primary-end"
            />
          ) : (
            <HiMiniBars3BottomRight
              onClick={() => setIsOpen(true)}
              className="size-7 cursor-pointer text-primary-end"
            />
          )}

          {isOpen && (
            <div className="absolute right-2 top-8 min-w-[220px] rounded-2xl border bg-white p-4 shadow-lg">
              <ul className="mb-8 flex flex-col items-center gap-6">
                <li>
                  <ScrollLink
                    to="home"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-primary-start hover:text-primary-start hover:opacity-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-para opacity-80 hover:text-primary-start hover:opacity-100"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-para opacity-80 hover:text-primary-start hover:opacity-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </ScrollLink>
                </li>
                {firstName && userToken ? (
                  <li>{firstName}</li>
                ) : (
                  <li>
                    <RouterLink
                      to="/login"
                      className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
                      onClick={() => setIsOpen(false)}
                    >
                      Register/Login
                    </RouterLink>
                  </li>
                )}
              </ul>

              <Button className="w-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
