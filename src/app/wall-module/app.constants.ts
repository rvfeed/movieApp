export const urls = {
    _serverUrl: "http://localhost",
    _port: 9090,
    get serverApiUrl(){ return this.serverUrl+"/api/v1";},
    get serverUrl(){ return this._serverUrl+":"+this._port; },
    get registerUrl(){ return this.serverUrl+"/register";  },
    get loginUrl(){ return this.serverUrl+"/login" },
    get postStatus(){ return this.serverApiUrl+"/postStatus"; },
    get readAllPosts() { return this.serverApiUrl+"/readAllPosts"; },
    get likeStatus() {return this.serverApiUrl+"/likeStatus";  },
    get addComment() {return this.serverApiUrl+"/addComment";  },
    get deleteComment() {return this.serverApiUrl+"/deleteComment";  },
    get likeComment() {return this.serverApiUrl+"/likeComment";  },
    get readPost() {return this.serverApiUrl+"/readPost";  },
    
}

export const messages = {
    registration:{
        success: "User has added succesfully!",
        failure: "Failed to add the details"
    }
}
