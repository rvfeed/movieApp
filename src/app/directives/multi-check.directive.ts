import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';
import { MovieService } from '../services/movie.service'

@Directive({
  selector: '[appMultiCheck]'
})
export class MultiCheckDirective {
  selectMovies: Array<any> = [];
  constructor(private el: ElementRef, private movieSer: MovieService) { 
   // this.el.nativeElement.checked = false;
  }
  @HostListener("click")
  selectCheck(){ 
    this.movieSer.selectMultiCheck(this.el.nativeElement.value);
  }
}
