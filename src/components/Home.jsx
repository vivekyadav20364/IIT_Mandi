import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import ListItems from './ListItems'
import About from './About'
import ContactUs from './ContactUs'
import { Element } from "react-scroll";
import { useLocation } from 'react-router-dom'

const Home = () => {
    const [toggle, setToggle] = useState(false);
    const [access, setAccess] = useState(false);
    // const location=useLocation();
    useEffect(() => {
      const storedFirstName = localStorage.getItem("firstName");
      const userToken = localStorage.getItem("userToken");
      if (storedFirstName && userToken) {
        setAccess(true);
      }
    }, [access]);
  return (
    <>
    <div className="bg-[#F2F7FF]">
      <Hero />
      <ListItems />
    </div>
    <Element name="about">
    <About />
      </Element>
    <Element name="contact">
    <ContactUs />
      </Element>
  </>
  )
}

export default Home
