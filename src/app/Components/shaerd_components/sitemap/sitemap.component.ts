import { Component,Input,OnInit} from '@angular/core';
// import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { RouterLink, RouterModule } from '@angular/router';
import { NgClass, NgIf , NgFor} from '@angular/common';
import { style } from '@angular/animations';
import { Towhat } from './towhat';
@Component({
  selector: 'app-sitemap',
  standalone: true,
  imports: [BreadcrumbModule, RouterModule, RouterModule, NgFor, RouterLink],
templateUrl: './sitemap.component.html',
  styleUrl: './sitemap.component.scss'
})
export class SitemapComponent  implements OnInit {
  
  @Input() towhat:Towhat[]=[
    {
      label: 'Gallery Grid 1', 
      route: '/gallery-grid-1', 
      // style: {'cursor': 'pointer;' },
      // class:'text_colored'
    }
  ];
  

  constructor() { } 
  // items: MenuItem[] | undefined;

  // home: MenuItem | undefined;

  ngOnInit() {
    // this.items = [
    //   { route: '/installation',label: 'home' , style: { 'color': 'var(--primary)' }}, 
    //   { route: '/installation',label: 'Components' }, 
    //   { route: '/installation',label: 'Components' }, 
    // ];
  }
}
