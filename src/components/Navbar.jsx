import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Button from "./ui/Button";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
              className="text-para opacity-80 hover:text-primary-start hover:opacity-100 cursor-pointer"
            >
              About
            </ScrollLink>
          </li>
          <li>
          <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="text-para opacity-80 hover:text-primary-start hover:opacity-100 cursor-pointer"
            >
              Contact
            </ScrollLink>
          </li>
          <li>
            <RouterLink
              to="/login"
              className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
            >
              Register/Login
            </RouterLink>
          </li>
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
                    className="text-primary-start hover:text-primary-start hover:opacity-100 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <a
                    className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
                    href="#"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </a>
                </li>
                <li>
                  <ScrollLink
                    to="services"
                    smooth={true}
                    duration={500}
                    className="text-para opacity-80 hover:text-primary-start hover:opacity-100 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    Service
                  </ScrollLink>
                </li>
                <li>
                  <a
                    className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
                    href="#"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <RouterLink
                    to="/login"
                    className="text-para opacity-80 hover:text-primary-start hover:opacity-100"
                    onClick={() => setIsOpen(false)}
                  >
                    Register/Login
                  </RouterLink>
                </li>
              </ul>

              <Button className="w-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
