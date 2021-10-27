import { IServerResponse, IVideo } from "../models/video";
import Video from "../../mockdata.json";
import { config } from "dotenv";

config();

class VideoService {
  constructor() {}
  /**
   *
   * @returns
   */
  public getVideos = async (
    _page: number,
    _pageSize: number,
    team_id: number,
    user_id: number,
    training_session_id: number,
    max_duration: number
  ): Promise<any> => {
    try {
      return Video.filter(
        (item) => item.page === _page && item.pageSize === _pageSize
      );
    } catch (err) {
      console.error(err);
    }
  };

  public printValues(res: any) {
    for (var k in res) {
      if (res[k] instanceof Object) {
        this.printValues(res[k]);
      } else {
        console.log(res[k]);
      }
    }
  }
}

export { VideoService };
