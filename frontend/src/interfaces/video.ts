export interface IVideo {
  id: number;
  user_id: number;
  team_id: number;
  training_session_id: number;
  title: number;
  source_url: string;
  thumbnail_url: string;
  description: number;
  training_date: Date;
  metadata: object;
  tags: [];
  created_at: Date;
  updated_at: Date;
  video_type: string;
  status: string;
  archived: boolean;
  duration: number;
  size: number;
  user: object;
  total_feedback: number;
  total_drills: number;
  team: object;
  _page?: number;
  _pageSize?: number;
  numPages?: number;
  numRows?: number;
}

export interface IServerResponse {
  data: any;
}
