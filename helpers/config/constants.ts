export const IS_PRODUCTION = process.env.NODE_ENV === "production";
export const server = IS_PRODUCTION ? "https://api.todo.com" : "http://localhost:3000";
