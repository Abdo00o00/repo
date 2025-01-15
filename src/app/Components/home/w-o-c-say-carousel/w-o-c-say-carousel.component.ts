import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-w-o-c-say-carousel',
  standalone: true,
  imports: [
    CarouselModule,
    ButtonModule,
    TagModule,
  ],
  templateUrl: './w-o-c-say-carousel.component.html',
  styleUrl: './w-o-c-say-carousel.component.scss'
})
export class WOCSayCarouselComponent {

  responsiveOptions: any[] | undefined;
  stylee : string = "{font-weight: 700 !important;font-size: 60px !important;line-height: 9px !important;}"


  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1400px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '1200px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '1000px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1
      }
  ]
}

products: any[] = [      
  {
    name: 'Bamboo Watch',
    description: 'Product Description',
    imageSrc: 'asset 24.jpeg',
    // inventoryStatus:'<i class="bi bi-quote"></i>'
  },
  {
    name: 'Bamboo Watch',
    description: 'Product Description',
    imageSrc: 'asset 24.jpeg',
    inventoryStatus:'ssss'
  },
  {
    name: 'Bamboo Watch',
    description: 'Product Description',
    imageSrc: 'asset 24.jpeg',
    inventoryStatus:'ssss'
  },
  {
    name: 'Bamboo Watch',
    description: 'Product Description',
    imageSrc: 'asset 24.jpeg',
    inventoryStatus:'ssss'
  },
  {
    name: 'Bamboo Watch',
    description: 'Product Description',
    imageSrc: 'asset 24.jpeg',
    inventoryStatus:'ssss'
  },
  {
    name: 'Bamboo Watch',
    description: 'Product Description',
    imageSrc: 'asset 24.jpeg',
    inventoryStatus:'ssss'
  },
  ]

}
