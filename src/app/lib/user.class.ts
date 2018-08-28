export class User {
  username: string;
  email: string; 
  _id?: string;
  addedDate?: Number = Date.now();
   constructor(username, email, id) {    
      this._id = id 
    this.username = username;
    this.email = email;
  }
}
export class SearchUser{
  search?: any; 
  limit: Number;
  sortBy: String;
  constructor(obj){   
    this.limit = obj.limit || 5;
    this.sortBy = obj.sortedBy || "username";
    this.search = obj.searchText || '';
  }
  set searchText(text){
    this.search = text;
  }
  set limitList(limit){
    this.limit = limit;
  }
}