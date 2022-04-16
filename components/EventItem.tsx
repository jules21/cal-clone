// import { Button } from "@components/shared/Button";

function EventItem({ booking }) {
  return (
    <div className="flex flex-row content-between w-full px-3 py-5 mt-5 bg-white border mt border-primaryBorder shadow-default">
      <div className="w-1/12">
        <p>{booking.eventDate}</p>
        <p className="text-gray-400">{booking.time}</p>
      </div>
      <div className="w-7/12 ml-8">
        <p className="font-bold">{booking.title}</p>
        <p className="text-gray-400">{booking.description}</p>
        <p>{booking.userId}</p>
      </div>
      <div className="w-2/12 px-5">{/* <Button>Cancel</Button> */}</div>
      <div className="w-2/12 px-5">{/* <Button>Reschedule</Button> */}</div>
    </div>
  );
}

export default EventItem;
