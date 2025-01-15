import { Component } from '@angular/core';
import { OppeningsecComponent } from '../../shaerd_components/oppeningsec/oppeningsec.component';
import { SitemapComponent } from '../../shaerd_components/sitemap/sitemap.component';
import { Title } from '@angular/platform-browser';
import { NgFor } from '@angular/common';
import { ServiceTitles } from './service-titles';
import { QandAComponent } from './qand-a/qand-a.component';

@Component({
  selector: 'app-servicedetails',
  standalone: true,
  imports: [OppeningsecComponent,SitemapComponent,NgFor,QandAComponent],
templateUrl: './servicedetails.component.html',
  styleUrl: './servicedetails.component.scss'
})
export class ServicedetailsComponent {

  h1_background: any = {
    h1_text:"Services",
    background:"banner-page.jpg",
  }

  towhat: any=[
    {
      label: 'Services', 
      route: '/services', 
      class:'text_colored',
      style: {'cursor': 'pointer'},
    },
    {
      label: 'Service details', 
      // route: '/gallery-grid-1', 
      // class:'text_colored'
    },
  ];

  service_titles: ServiceTitles[]=[
    {id:'0',title:'General Contracting',class:'active'},
    {id:'1',title:'Construction Consultant'},
    {id:'2',title:'Design And Build'},
    {id:'3',title:'House Renovation'},
    {id:'4',title:'Tiling and Painting'},
    {id:'5',title:'Special Projects'},
  ];

  contact_info: any=[
    {text:`99 S.t Jomblo Park Pekanbaru 28292. Indonesia`,icon_class:'fa-location-dot'},
    {text:`(0761) 654-123987`,icon_class:'fa-phone'},
    {text:`info@yoursite.com`,icon_class:'fa-envelope'},
    {text:`Mon - Sat 09:00 - 17:00`,icon_class:'fa-clock'},
  ];

  downloadBrochure(){
    console.log('downloadBrochure');
  }



  changeActiveClass(id: string): void {
    this.service_titles = this.service_titles.map(item => ({
      ...item,
      class: item.id === id ? 'active' : '',
    }));

    console.log('changeActiveClass');
  }

}
