import {InjectionToken} from "@angular/core";
export let APP_CONSTANTS = new InjectionToken("app.constants");
export type DefaultValues = {
    RATINGS: Number[];
    GENRES: String[];
}
export const RATINGS: Number[] = [1,2,3,4,5,7,8,9,10];
export const GENRES: String[] = ["Action", "Crime", "Comedy", "Horror", "Romance", "Sci-Fi", "Animation"];