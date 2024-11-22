export interface Stream {
  id: string;
  title: string;
  streamer: string;
  thumbnail: string;
  viewers: number;
  category: string;
  isLive: boolean;
}

export interface Streamer {
  id: string;
  name: string;
  avatar: string;
  followers: number;
}