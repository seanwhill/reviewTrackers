export type Review = {
  id: string,
  author: string,
  place: string,
  published_at: string,
  rating: number,
  content: string,
  comment?: Comment
}

export type Comment = {
  author: string,
  published_at: Date,
  content: string
}