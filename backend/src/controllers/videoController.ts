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
      let team_id: number = 117;
      let user_id: number = 180;
      let training_session_id: number = 292;
      let max_duration: number = 103.92;

      if (typeof req.query._pageSize !== "undefined") {
        _pageSize = parseInt(req.query._pageSize as string);
      }

      if (typeof req.query._page !== "undefined") {
        _page = parseInt(req.query._page as string);
      }
      if (typeof req.query.team_id !== "undefined") {
        _page = parseInt(req.query.team_id as string);
      }
      if (typeof req.query.user_id !== "undefined") {
        _page = parseInt(req.query.user_id as string);
      }
      if (typeof req.query.training_session_id !== "undefined") {
        _page = parseInt(req.query.training_session_id as string);
      }
      if (typeof req.query.max_duration !== "undefined") {
        _page = parseInt(req.query.max_duration as string);
      }

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
