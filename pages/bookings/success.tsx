import React from "react";
import { FaGoogle, FaCheckCircle } from "react-icons/fa";
import { RiFileWord2Fill } from "react-icons/ri";
import { SiMicrosoftoffice, SiMicrosoftoutlook } from "react-icons/si";

function success() {
  return (
    <>
      <div className="flex h-screen bg-gray-bg1">
        <div className="w-full max-w-xl px-16 py-10 m-auto bg-white border border-primaryBorder shadow-default">
          <div className="flex flex-col items-center justify-center mb-3">
            <FaCheckCircle size={50} color="green" />
          </div>
          <h1 className="mb-6 text-3xl font-bold text-center text-primary">This meeting is scheduled</h1>
          <p className="mb-4 text-center">
            We emailed you and the other attendees a calendar invitation with all the details.
          </p>
          <hr />
          <div className="flex flex-row my-3">
            <p className="w-1/4">What</p>
            <p className="w-3/4">15 Min Meeting between Daniel Tonel and Test</p>
          </div>
          <div className="flex flex-row my-3">
            <p className="w-1/4">What</p>
            <p className="w-3/4">Wednesday, 29 December 2021 4:30pm-15 mins (Europe/Vienna)</p>
          </div>
          <hr />
          <div className="flex flex-row my-3">
            <p className="w-2/5">Add to calendar</p>
            <div className="w-3/5">
              <span className="inline-flex items-center px-4 py-2 m-2 text-sm text-gray-900 bg-white border border-black">
                <FaGoogle />
              </span>
              <span className="inline-flex items-center px-4 py-2 m-2 text-sm text-gray-900 bg-white border border-black">
                <SiMicrosoftoutlook />
              </span>
              <span className="inline-flex items-center px-4 py-2 m-2 text-sm text-gray-900 bg-white border border-black">
                <SiMicrosoftoffice />
              </span>
              <span className="inline-flex items-center px-4 py-2 m-2 text-sm text-gray-900 bg-white border border-black">
                <RiFileWord2Fill />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default success;
