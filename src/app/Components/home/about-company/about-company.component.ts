import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-company',
  standalone: true,
  imports: [ NgForOf],
  templateUrl: './about-company.component.html',
  styleUrl: './about-company.component.scss'
})
export class AboutCompanyComponent {



  about_company_items:any[] = [
    {
      icon:`fa-solid fa-building`,
      title:"Building",
      desc:"Lorem ipsum dolor sit piscing sed diam nonmy end ."
    },
    {
      icon:`fa-solid fa-paintbrush`,
      title:"Renovation",
      desc:"Lorem ipsum dolor sit piscing sed diam nonmy end ."
    },
    {
      icon:`fa-solid fa-gavel`,
      title:"Digging",
      desc:"Lorem ipsum dolor sit piscing sed diam nonmy end ."
    },
    {
      icon:`fa-regular fa-image`,
      title:"interior",
      desc:"Lorem ipsum dolor sit piscing sed diam nonmy end ."
    },
  ]
}
