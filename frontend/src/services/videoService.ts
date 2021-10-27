import http from "../config";

class VideoService {
  async getVideos(): Promise<any> {
    return await http.get("/videos");
  }
}

export default new VideoService();
