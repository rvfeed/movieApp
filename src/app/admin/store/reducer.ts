import {State} from '@ngrx/store'
type actionType = {type: any, payload: any};
export function aclReducer(state: State<any>, action: actionType){
    console.log(action)
switch(action.type){
    case 'GET_ACL':{
        return Object.assign({}, state, action.payload)
    }
    case 'GET_ACL_SUCCESS':{
        return Object.assign({}, state, action.payload)
    }
    default:{
        return Object.assign({}, state);
    }
}
}