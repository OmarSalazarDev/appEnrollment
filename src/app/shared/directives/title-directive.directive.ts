import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTitleDirective]'
})
export class TitleDirectiveDirective {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    renderer.setStyle(elementRef.nativeElement, 'font-size', '20px');
    renderer.setStyle(elementRef.nativeElement, 'font-weight', '500');
    renderer.setStyle(elementRef.nativeElement, 'color', 'white');
  }
}
