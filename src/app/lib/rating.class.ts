export class MovieRating {
  movieName: string;
  rating: number;
  director: string;
  cast: Array<string>;
  isEdit: Boolean = false;
  _id?: string;
  addedDate: Number = Date.now();
   constructor(movieName, rating, director, cast, id) {
    
      this._id = id 
    this.movieName = movieName;
    this.rating = rating;
    this.director = director;
    this.cast = cast;    

  }
}