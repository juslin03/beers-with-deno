import { Application } from "https://deno.land/x/oak/mod.ts";
import { APP_HOST, APP_PORT } from "./config.js";
import router from "./routes.js";
import _404 from "./controllers/404.js";
import errorHandler from "./controllers/errorHandler.js";

// creation de notre application
const app = new Application();

// creations des middlewares
app.use(errorHandler);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(_404);

await app.listen(`${APP_HOST}:${APP_PORT}`, (c) => {
  console.log(`Listening on port: ${APP_PORT}`);
});
