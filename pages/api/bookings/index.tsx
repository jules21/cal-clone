import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
  } else {
    // get all eventType
    const eventTypes = await prisma.eventType.findMany();
    res.status(200).json(eventTypes);
  }
}
