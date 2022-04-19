import { server } from "@helpers/config/constants";

import EventItem from "@components/EventItem";
import Navbar from "@components/shared/Navbar";

export interface Props {
  bookings: any;
}

export default function Bookings({ bookings }: Props) {
  return (
    <>
      <div className="h-screen p-20 bg-gray-100 px-9">
        <h1 className="text-2xl font-bold">Bookings</h1>
        <p className="mb-12 text-gray-400">
          See upcoming and past events booked through your event type links
        </p>
        <Navbar />
        {bookings.map((booking: any) => (
          <EventItem key={booking.id} booking={booking} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${server}/api/bookings`);
  const bookings = await res.json();
  return {
    props: {
      bookings,
    },
  };
}
