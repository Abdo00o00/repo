import { Component } from '@angular/core';
import { SubHeaderComponent } from "../sub-header/sub-header.component";
import { OppeningsecComponent } from '../shaerd_components/oppeningsec/oppeningsec.component';
import { SitemapComponent } from '../shaerd_components/sitemap/sitemap.component';
import { Towhat } from './../shaerd_components/sitemap/towhat';
import { OurcompanyComponent } from './ourcompany/ourcompany.component';
import { TimelineComponent } from './timeline/timeline.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SubHeaderComponent,OppeningsecComponent,SitemapComponent,OurcompanyComponent,TimelineComponent],
templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {


  h1_background: any = {
    h1_text:"About Us",
    background:"banner-page.jpg",
  }


  towhat:Towhat[]=[
      {
        label: 'About Us', 
        // route: '/gallery-grid-1', 
        // style: {'cursor': 'pointer;' },
        // class:'text_colored'
      }
    ];

}
