import React from "react";

function Navbar() {
  return (
    <div className="my-5">
      <ul className="flex border-b">
        <li className="mr-1 -mb-px border-b-2 border-black border-solid ">
          <a className="inline-block px-4 py-2 font-semibold text-black" href="#">
            Upcoming
          </a>
        </li>
        <li className="mr-1">
          <a className="inline-block px-4 py-2 font-semibold text-black" href="#">
            Past
          </a>
        </li>
        <li className="mr-1">
          <a className="inline-block px-4 py-2 font-semibold text-black" href="#">
            Cancelled
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
