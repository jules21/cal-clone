import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function bookEvent(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { name, email, note, date } = req.body;
      const event: any = await prisma.event.create({
        data: {
          eventTypeId: 1,
          description: note,
          eventDate: new Date(date),
        },
      });
      await prisma.attendee
        .create({
          data: {
            eventId: event.id,
            name,
            email,
          },
        })
        .then((res) => {
          console.log("success", res);
        })
        .catch((error) => {
          console.log("error", error);
        });
      res.status(200).json({
        status: true,
        message: "Event Created successfully!",
        data: { ...event },
      });
    } catch (error) {
      return res.status(400).json({
        status: false,
        error: "Action failed ",
        data: error,
      });
    }
  }
}
