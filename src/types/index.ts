export type MovieType = 'movie' | 'series' | 'episode'
export type ShortMovieList = {
  Title: string
  Year: string
  Type: MovieType
  imdbID: string
  Poster: string
}
