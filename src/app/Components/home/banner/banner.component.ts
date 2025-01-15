import { Component } from '@angular/core';
import { NiceButtonComponent } from '../../shaerd_components/nice-button/nice-button.component';
import { Buttonninputs } from '../../shaerd_components/nice-button/buttonninputs';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NiceButtonComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  buttonn_service:Buttonninputs={
    text:'Contact Us',
    router:'/contact',
  }

}
