import axios from "axios";
import Image from "next/image";
import Router from "next/router";
import React from "react";

import Button from "@components/shared/Button";
import TextInput from "@components/shared/TextInput";
import Textarea from "@components/shared/Textarea";

function Confirmation() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const date = localStorage.getItem("dateTime");
      const eventTypeId = localStorage.getItem("eventTypeId");
      const result = await axios
        .post("/api/bookings/create", {
          name: e.target.name.value,
          email: e.target.email.value,
          note: e.target.note.value,
          date,
          eventTypeId,
        })
        .then((res) => {
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
            <TextInput id="name" name="name" placeholder="John Doe" type="text" />
            <TextInput id="email" name="email" placeholder="you@example.com" type="text" />
            <h3 className="my-4 font-bold">+ Additional Guests</h3>
            <label htmlFor="" className="block mb-2 text-sm font-bold text-black">
              Additional Notes
            </label>
            <Textarea
              id="note"
              name="note"
              placeholder="Please share anything that will help prepare for our meeting"
            />
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
