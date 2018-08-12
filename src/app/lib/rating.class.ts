export class MovieRating {
  movieName: string;
  rating: number;
  director: string;
  cast: Array<string>;
  genre: string;
  isEdit: Boolean = false;
  _id?: string;
  addedDate: Number = Date.now();
   constructor(movieName, rating, director, cast, genre, id) {
    
      this._id = id 
    this.movieName = movieName;
    this.rating = rating;
    this.director = director;
    this.cast = cast; 
    this.genre = genre;   

  }
}
export class SearchMovie{
  search?: any; 
  limit: Number;
  sortBy: String;
  constructor(obj){   
    this.limit = obj.limit || 5;
    this.sortBy = obj.sortedBy || "movieName";
    this.search = obj.searchText || '';
  }
  set searchText(text){
    this.search = text;
  }
  set limitList(limit){
    this.limit = limit;
  }
}