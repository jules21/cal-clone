export const IS_PRODUCTION = process.env.NODE_ENV === "production";
export const server = IS_PRODUCTION ? "https://cal-clone-mu.vercel.app" : "http://localhost:3000";
