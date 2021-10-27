import { IVideo } from "../models/video";
import { Request, Response } from "express";
import { VideoService } from "../services/videoService";
import { Cache } from "../utils/cache";

class VideoController {
  public videoService: VideoService;
  public cache: Cache;

  constructor() {
    this.videoService = new VideoService();
    this.cache = new Cache();
  }
  /**
   * Get list of blocks
   * @route GET
   * @param req
   * @param res
   * @returns http response
   */
  public getVideos = async (req: Request, res: Response) => {
    try {
      let _pageSize: number = 20;
      let _page: number = 1;

      if (typeof req.query._pageSize !== "undefined") {
        _pageSize = parseInt(req.query._pageSize as string);
      }

      if (typeof req.query._page !== "undefined") {
        _page = parseInt(req.query._page as string);
      }

      const team_id: number = parseInt(req.params.team_id as string);
      const user_id: number = parseInt(req.params.user_id as string);
      const training_session_id: number = parseInt(
        req.params.training_session_id as string
      );
      const max_duration: number = parseInt(req.params.max_duration as string);

      const response: IVideo[] = await this.videoService.getVideos(
        _page,
        _pageSize,
        team_id,
        user_id,
        training_session_id,
        max_duration
      );
      if (response) {
        return res.status(200).send({ message: "success", payload: response });
      } else {
        return res.status(200).send({ message: "No record found" });
      }
    } catch (err) {
      return res.status(500).send({
        message: "Error occured while retriving  the data " + err.message,
      });
    }
  };
}

export { VideoController };
