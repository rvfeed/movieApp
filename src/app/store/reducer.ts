import {Store, State} from "@ngrx/store";
import {Action, appState} from './type';
export function movieReducer(state: appState, action: Action ): appState{
    switch(action.type){
        case 'LOGIN':{            
            return Object.assign({}, state, action.payload)
        }
        case 'LOGIN_SUCCESS':{
             return Object.assign({}, state, action.payload)
        }
        case 'LOGIN_FAILURE':{
             return Object.assign({}, state, action.payload)
        }
        case 'EDIT_MOVIE':{
             return Object.assign({}, state, action.payload)
        }
        default:{
            return state;
        }
        
    }
}