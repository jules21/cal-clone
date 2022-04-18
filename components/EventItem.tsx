// import { Button } from "@components/shared/Button";
import moment from "moment";

import Button from "@components/shared/Button";

export interface Props {
  date: string;
  title: string;
  description: string;
  userId: number;
}

function EventItem({ booking }: Props) {
  return (
    <div className="flex flex-row content-between w-full px-3 py-5 mt-5 bg-white border mt border-primaryBorder shadow-default">
      <div className="w-1/12">
        <p>{moment(booking.date).format("dddd, Do MMM")}</p>
        <p className="text-gray-400">
          {moment(booking.date).format("HH:mm") +
            " - " +
            moment(booking.date).add(15, "minutes").format("HH:mm")}
        </p>
      </div>
      <div className="w-7/12 ml-8">
        <p className="font-bold">{booking.title}</p>
        <p className="text-gray-400">{booking.description}</p>
        <p>{booking.userId}</p>
      </div>
      <div className="w-2/12 px-5">
        <Button customClass="text-black border border-black" buttonText="Cancel" />
      </div>
      <div className="w-2/12 px-5">
        <Button customClass="text-black border border-black" buttonText="Reschedule" />
      </div>
    </div>
  );
}

export default EventItem;
