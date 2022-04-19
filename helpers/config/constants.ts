export const IS_PRODUCTION = process.env.NODE_ENV === "production";
export const server = IS_PRODUCTION
  ? "https://cal-clone-ioay0uvuy-jules21.vercel.app"
  : "http://localhost:3000";
