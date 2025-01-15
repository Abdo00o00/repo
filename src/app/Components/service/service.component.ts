import { Component } from '@angular/core';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { OppeningsecComponent } from '../shaerd_components/oppeningsec/oppeningsec.component';
import { ServiceitemsComponent } from './serviceitem/serviceitems.component';
import { SitemapComponent } from '../shaerd_components/sitemap/sitemap.component';
import { Towhat } from './../shaerd_components/sitemap/towhat';


@Component({
  selector: 'app-service',
  standalone: true,
  imports: [SubHeaderComponent,OppeningsecComponent,ServiceitemsComponent,SitemapComponent],
templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {

  h1_background: any = {
    h1_text:"Services",
    background:"banner-page.jpg",
  }

  towhat: Towhat[]=[
    {
      label: 'Services', 
      // route: '/services', 
      // class:'text_colored',
      // style: {'cursor': 'pointer'},
    },
  ]
}
