import app from "./app";
import {
  errorHandler,
  notFoundErrorHandler,
} from "./middlewares/apiErrorHandler";
import { config } from "dotenv";

config();
/**
 * An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined
 */
(() => {
  app.use(errorHandler);
  app.use(notFoundErrorHandler);
  const PORT: number = parseInt(process.env.PORT as string);
  app
    .listen(PORT, () => {
      console.log("##########################################################");
      console.log("#####               STARTING SERVER                  #####");
      console.log(
        "##########################################################\n"
      );
      console.log(`Server running → PORT ${PORT}`);
    })
    .on("error", (e) => {
      console.error(e);
    });
})();
