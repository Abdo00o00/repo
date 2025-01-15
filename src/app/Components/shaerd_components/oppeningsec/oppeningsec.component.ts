import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-oppeningsec',
  standalone: true,
  imports: [],
  templateUrl: './oppeningsec.component.html',
  styleUrl: './oppeningsec.component.scss'
})
export class OppeningsecComponent {
  @Input() h1_background: any = {
    h1_text:'Gallery Grid 1',
    background:'gallery-banner.jpg'
  };
}
