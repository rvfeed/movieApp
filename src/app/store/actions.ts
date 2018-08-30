import {Action } from './type';
export function getActions(action, payload:Action ){
            return { type: action, payload }     
    }
