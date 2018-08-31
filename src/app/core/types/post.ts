
export interface IPost {
  id: number;
  by: string;
  score: number;
  time: number;
  timeAgo: string,
  title?: string;
  url?: string;
}
