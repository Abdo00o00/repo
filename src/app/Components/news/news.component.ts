import { Component } from '@angular/core';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { NavbarComponent } from '../../Layout/navbar/navbar.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [SubHeaderComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {

}
