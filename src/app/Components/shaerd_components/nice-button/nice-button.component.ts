import { Component, Input } from '@angular/core';
import { Buttonninputs } from './buttonninputs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nice-button',
  standalone: true,
  imports: [RouterLink],
templateUrl: './nice-button.component.html',
  styleUrl: './nice-button.component.scss'
})
export class NiceButtonComponent {
  @Input() buttonn:Buttonninputs={
    text: '',
    router: '',
    // func: () => {
    //   console.log('Function not implemented.');
    // }
  };
  @Input() button_text: string = '';
}
