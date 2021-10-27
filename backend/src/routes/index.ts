import { VideoRoute } from "./videoRoute";
import { Application } from "express";
/**
 * Init Express REST routes
 * @returns {void}
 */

class Routes {
  //private prefix: string = "/api/v1";
  private prefix: string = "/api";
  public routes(app: Application): void {
    app.use(this.prefix, new VideoRoute().router);
  }
}
export { Routes };
