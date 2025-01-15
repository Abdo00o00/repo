import { Component, importProvidersFrom , OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { NiceButtonComponent } from '../shaerd_components/nice-button/nice-button.component';
import { BannerComponent } from './banner/banner.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { LatestProjectsGalleryComponent } from './latest-projects-gallery/latest-projects-gallery.component';

import { OCCarouselComponent } from './o-c-carousel/o-c-carousel.component';
import { WOCSayCarouselComponent } from './w-o-c-say-carousel/w-o-c-say-carousel.component';
import { LBlogPostComponent } from './l-blog-post/l-blog-post.component';
import { Buttonninputs } from './../shaerd_components/nice-button/buttonninputs'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselModule,
    ButtonModule,
    NiceButtonComponent,
    BannerComponent,
    AboutCompanyComponent,
    LatestProjectsGalleryComponent,

    OCCarouselComponent,
    WOCSayCarouselComponent,
    LBlogPostComponent
  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

  
  
export class HomeComponent implements OnInit{


  responsiveOptions: any[] | undefined;
  stylee : string = "{font-weight: 700 !important;font-size: 60px !important;line-height: 9px !important;}"
  ngOnInit() {

    this.responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
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

  // getSeverity(status: string) {
  //     switch (status) {
  //         case 'INSTOCK':
  //             return 'success';
  //         case 'LOWSTOCK':
  //             return 'warn';
  //         case 'OUTOFSTOCK':
  //             return 'danger';
  //     }
  // }
  products: any[] = [      
  {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset 48.jpeg',inventoryStatus:`<p class="h1 text-center">We Build Your Dream</p>
    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer.</span>`},
  {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset 48.jpeg',inventoryStatus:`<p class="h1 text-center">We Build Your Dream</p>
    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer.</span>`},
  {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset 48.jpeg',inventoryStatus:`<p class="h1 text-center">We Build Your Dream</p>
    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer.</span>`},
  {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset 48.jpeg',inventoryStatus:`<p class="h1 text-center">We Build Your Dream</p>
    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer.</span>`},
  {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset 48.jpeg',inventoryStatus:`<p class="h1 text-center">We Build Your Dream</p>
    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer.</span>`},
  {name: 'Bamboo Watch',description: 'Product Description',imageSrc: 'asset 48.jpeg',inventoryStatus:`<p class="h1 text-center">We Build Your Dream</p>
    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer.</span>`},
  ]

  buttonn_service:Buttonninputs={
    text:'See More',
    router:'/services',
  }

}
