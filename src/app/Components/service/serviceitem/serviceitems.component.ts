import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-serviceitems',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './serviceitems.component.html',
  styleUrl: './serviceitems.component.scss'
})
export class ServiceitemsComponent {


  Service_items:any[] =[
    {
      icon_class:'fa-helmet-safety',
      h2_text:'General Contracting',
      p_text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      a_text:'READ MORE',
      routePath:'/servicedetails'
    },
    {
      icon_class:'fa-sheet-plastic',
      h2_text:'Construction Consultant',
      p_text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      a_text:'READ MORE',
      routePath:'/servicedetails'
    },
    {
      icon_class:'fa-person-digging',
      h2_text:'Special Projects',
      p_text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      a_text:'READ MORE',
      routePath:'/servicedetails'
    },
    {
      
      icon_class:'fa-house-circle-exclamation',
      h2_text:'House Renovation',
      p_text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      a_text:'READ MORE',
      routePath:'/servicedetails'
    },
    {
      icon_class:'fa-paint-roller',
      h2_text:'Tiling And Painting',
      p_text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      a_text:'READ MORE',
      routePath:'/servicedetails'
    },
    {
      icon_class:'fa-bell-concierge',
      h2_text:'Laminate Flooring',
      p_text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      a_text:'READ MORE',
      routePath:'/servicedetails'
    },
  ]
}
