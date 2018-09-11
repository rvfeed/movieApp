import {Store, State} from "@ngrx/store";
import {Action, appState} from './type';
export function movieReducer(state: any = {}, action: Action ): any{
    switch(action.type){
        case 'LOGIN':{            
            return Object.assign({}, state, action.payload)
        }
        case 'LOGIN_SUCCESS':{          
             return Object.assign({}, state, action.payload)
        }
        case 'LOGIN_FAILURE':{          
             return Object.assign({}, state, {})
        }
        case 'LOAD_MOVIES':{            
              return Object.assign({}, state, action.payload)
        }
        case 'EDIT_MOVIE':{
             return Object.assign({}, state, action.payload)
        }
        case 'LOGOUT':{
            return Object.assign({}, {}, {});
        }
        case 'DELETE_MOVIE':{
            state.movies = state.movies.filter(movie => movie._id != action.payload[0]._id)
       console.log(action.payload[0]._id)
       console.log(state.movies.filter( a=> true))
             return Object.assign({}, state, action.payload)
             
        }
        case 'MOVIES_LOAD_SUCCESS':{   
             console.log(action.payload)
            return Object.assign({}, state, action.payload)
        }
        case 'MOVIE_DELETE_SUCCESS':{
              return Object.assign({}, state, action.payload)
        }
          case 'MOVIE_DELETE_FAILURE':{
              state.movies.push(action.payload[0])
              return Object.assign({}, state, action.payload)
        }
        default:{
            return state;
        }
        
    }
}