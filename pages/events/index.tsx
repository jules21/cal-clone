import Image from "next/image";
import Router from "next/router";
import { SyntheticEvent, useState } from "react";

import Button from "@components/shared/Button";

function EventPage() {
  const [date, setDate] = useState("");
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    localStorage.setItem("dateTime", date);
    Router.push("/events/confirmation");
  };

  return (
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
            id="date"
            name="date"
            type="datetime-local"
            value={date}
            onInput={(e) => setDate(e.currentTarget.value)}
            className="w-full px-3 py-2 mb-2 text-gray-700 border appearance-none"
          />
          <div className="flex flex-row content-start">
            <Button customClass="bg-black text-white" buttonText="Confirm" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventPage;
