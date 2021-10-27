import { Router } from "express";
import { VideoController } from "../controllers/videoController";

class VideoRoute {
  public videoController: VideoController;
  public router: Router;

  constructor() {
    this.videoController = new VideoController();
    this.router = Router();
    this.configRoutes();
  }

  public configRoutes() {
    this.router.get("/videos", this.videoController.getVideos);
  }
}
export { VideoRoute };
