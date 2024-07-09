import React from "react";

const ContactUs = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 bg-blue-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p>IIT Mandi IHub and HCI foundation</p>
            <p>Address line 1</p>
            <p>Address line 2</p>
            <p>City, State, Country - Zip Code</p>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Additional Information</h2>
          <ul className="grid grid-cols-2 gap-4">
            <li>Donation</li>
            <li>Activities</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Call for Proposals</li>
            <li>Readiness Calculator</li>
            <li>Call for Innovation</li>
            <li>Newsletter</li>
            <li>Gallery</li>
            <li>Visits to iHub Office</li>
            <li>Workshops</li>
            <li>Audit Reports</li>
          </ul>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="text-center mt-8">
        <p className="text-gray-600">
          Copyright 2022 © IIT Mandi IHub and HCI foundation
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
