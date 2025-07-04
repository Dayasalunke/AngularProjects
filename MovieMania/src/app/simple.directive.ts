import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSimple]',
})
export class SimpleDirective {

  constructor(public el:ElementRef) { 
   this.highlight("");
   }

   private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
   }

}
