export class MovieRating {
  movieName: string;
  rating: number;
  director: string;
  cast: Array<string>
   constructor(movieName, rating, director, cast) { 
    this.movieName = movieName;
    this.rating = rating;
    this.director = director;
    this.cast = cast;
  }
}