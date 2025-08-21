import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]', // usage: <p appHighlight>...</p>
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background-color',
      'royalblue'
    );
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}
