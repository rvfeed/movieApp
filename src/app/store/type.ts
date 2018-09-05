import { MovieRating} from '../lib/rating.class'
import {RouterAction} from '@ngrx/router-store';
type payload = { filter: any, movies: MovieRating[]}
export type appState = { type: string, payload: payload}
export type LogInForm = { username: string;  password: string; }
export type State = { app: appState }
export type LOGIN = {type: string, payload: LogInForm}
export type EDIT_MOVIE = {type: string, payload: MovieRating}
export type editMovie = MovieRating;

export type Action = RouterAction<State> | LOGIN | EDIT_MOVIE;
