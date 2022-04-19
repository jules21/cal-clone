import axios from "axios";
import Image from "next/image";
import Router from "next/router";
import React, { useState } from "react";

import Button from "@components/shared/Button";

function Confirmation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const date = localStorage.getItem("dateTime");
      const eventTypeId = localStorage.getItem("eventTypeId");
      await axios
        .post("/api/bookings/create", {
          name,
          email,
          note,
          date,
          eventTypeId,
        })
        .then(() => {
          Router.push("/events/success");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="flex flex-row h-full max-w-4xl m-auto mt-20 border shadow-default">
        <div className="w-1/2 px-16 my-10 border-r">
          <div className="w-1/6">
            <Image src="/images/user.png" width={50} height={50} alt="testimonial-image" />
          </div>
          <p className="text-gray-500">Daniel Tonel</p>
          <h1 className="mb-6 text-3xl font-bold text-primary">15 Mins Meeting</h1>
          <div className="flex flex-row mt-6">
            <div className="w-5/6">
              <b>15 Minutes</b>
              <p className="text-green-800-500">4:30 PM</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 max-w-lg px-16 py-10 bg-white ">
          <form onSubmit={handleSubmit}>
            <input
              id="name"
              name="name"
              placeholder="John Doe"
              type="text"
              className="w-full px-3 py-2 mb-2 text-gray-700 border appearance-none"
              value={name}
              onInput={(e) => setName(e.currentTarget.value)}
            />
            <input
              id="email"
              name="email"
              placeholder="you@example.com"
              type="text"
              className="w-full px-3 py-2 mb-2 text-gray-700 border appearance-none"
              value={email}
              onInput={(e) => setEmail(e.currentTarget.value)}
            />
            <h3 className="my-4 font-bold">+ Additional Guests</h3>
            <label htmlFor="" className="block mb-2 text-sm font-bold text-black">
              Additional Notes
            </label>
            <textarea
              rows={4}
              className="w-full px-3 py-2 mb-2 text-gray-700 border appearance-none"
              id="note"
              name="note"
              placeholder="Please share anything that will help prepare for our meeting"
              value={note}
              onInput={(e) => setNote(e.currentTarget.value)}></textarea>

            <div className="flex flex-row content-start">
              <Button customClass="bg-black text-white mr-3" buttonText="Confirm" />
              <Button customClass="text-black bg-white border border-black" buttonText="Cancel" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Confirmation;
