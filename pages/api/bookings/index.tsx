import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { GetServerSidePropsContext } from "next";
import { getCsrfToken } from "next-auth/react";

import { getSession } from "@helpers/auth";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Process a POST request
  } else {
    // get all events
    const events = await prisma.event.findMany({
      include: {
        eventType: true,
      },
    });
    res.status(200).json(events);
  }
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
