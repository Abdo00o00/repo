import { Component , OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-o-c-carousel',
  standalone: true,
  imports:[
    CarouselModule,
    ButtonModule,
    TagModule,
  ],
  templateUrl: './o-c-carousel.component.html',
  styleUrl: './o-c-carousel.component.scss'
})
export class OCCarouselComponent implements OnInit {


  responsiveOptions: any[] | undefined;
  stylee : string = "{font-weight: 700 !important;font-size: 60px !important;line-height: 9px !important;}"


  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1400px',
          numVisible: 5,
          numScroll: 5
      },
      {
          breakpoint: '1000px',
          numVisible: 4,
          numScroll: 4
      },
      {
          breakpoint: '767px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '575px',
          numVisible: 3,
          numScroll: 3
      }
  ]
  }

  products: any[] = [      
    {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset25.png'},
    {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset26.png'},
    {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset27.png'},
    {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset28.png'},
    {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset29.png'},
    {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset30.png'},
    {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset25.png'},
    {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset26.png'},
    {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset27.png'},
    {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset28.png'},
    {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset29.png'},
    {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset30.png'},
    {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset25.png'},
    {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset26.png'},
    {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset27.png'},

    ]

}
