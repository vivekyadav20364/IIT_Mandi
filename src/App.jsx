// // import React from "react";
// // import Navbar from "./components/Navbar";
// // import Hero from "./components/Hero";
// // import ListItems from "./components/ListItems";
// // import About from "./components/About";
// // import Services from "./components/Services";
// // import ServiceCards from "./components/ServiceCards";
// // import BookAnAppointment from "./components/BookAnAppointment";
// // import VideoSection from "./components/VideoSection";
// // import { BrowserRouter, Route, Router } from "react-router-dom";
// // import Login from "./components/Login";

// // function App() {
// //   return (
// //     <>
// //       <Navbar />
// //       <div className="bg-[#F2F7FF]">
// //         <Hero />
// //         <ListItems />
// //       </div>

// //       <About />

// //       <div className="bg-[#F2F7FF]">
// //         <Services />
// //         <ServiceCards />
// //       </div>

// //       <BookAnAppointment />
// //       <VideoSection />

// //       <BrowserRouter>
// //         <Router>
// //           <Route path="/login" element={<Login/>}/>
// //         </Router>
// //       </BrowserRouter>
// //     </>
// //   );
// // }

// // export default App;

// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import ListItems from "./components/ListItems";
// import About from "./components/About";
// import Services from "./components/Services";
// import ServiceCards from "./components/ServiceCards";
// import BookAnAppointment from "./components/BookAnAppointment";
// import VideoSection from "./components/VideoSection";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <div className="bg-[#F2F7FF]">
//                 <Hero />
//                 <ListItems />
//               </div>
//               <About />
//               <div className="bg-[#F2F7FF]">
//                 <Services />
//                 {/* <ServiceCards /> */}
//               </div>
//               {/* <BookAnAppointment /> */}
//               {/* <VideoSection /> */}
//             </>
//           }
//         />
//         <Route path="/login" element={<Login/>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ListItems from "./components/ListItems";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import StockAnalysis from "./components/StockAnalysis";
import ContactUs from "./components/ContactUs";
import { Element } from "react-scroll";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="bg-[#F2F7FF]">
                <Hero />
                <ListItems />
              </div>
              <Element name="about">
              <About />
                </Element>
             
              {/* <div className="bg-[#F2F7FF]">
                <Element name="services">
                  <Services />
                </Element>
                <ServiceCards />
              </div> */}
              {/* <BookAnAppointment /> */}
             
              <Element name="contact">
              <ContactUs />
                </Element>
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/stockAnalysis" element={<StockAnalysis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


