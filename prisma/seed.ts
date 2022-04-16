import { PrismaClient, User } from "@prisma/client";
import { hashPassword } from "@helpers/auth";

const prisma = new PrismaClient();

// eslint-disable-next-line prettier/prettier
const hashedPassword = await hashPassword('123456');

const load = async () => {
  try {
    const user = await prisma.user.create({
      data: {
        name: "John Doe",
        email: "johndoe@gmail.com",
        password: hashedPassword
      }
  });

  await prisma.eventType.create({
    data:{
      userId:user.id,
      title:'this is default event type',
      slug:'default-event-type',
      description:'this is default event type description',
      length:12
    }
  })
  } catch (e) {
      console.error(e);
      process.exit(1);
  } finally {
      await prisma.$disconnect();
  };
}
load();