import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdownToggle]'
})
export class DropdownToggleDirective {

  constructor() { }

  //add class open when toggled is true
  @HostBinding('class.open') toggled = false;

  //listen for a click event on the element using this directive
  @HostListener('click') DropdownToggleDirective() {
    this.toggled = !this.toggled;
  }
}
