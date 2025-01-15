import { Component , OnInit } from '@angular/core';
// import { Product } from '@domain/product';
// import { ProductService } from '@service/productservice';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import {Product} from './product';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-ourcompany',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule,DividerModule,],
  templateUrl: './ourcompany.component.html',
  styleUrl: './ourcompany.component.scss'
})
export class OurcompanyComponent implements OnInit{
  products: Product[]=[
    {id:'0',name: 'project 1',image: 'blog-2.jpg',},
    {id:'1',name: 'project 2',image: 'blog-3.jpg',},
    {id:'2',name: 'project 3',image: 'service-detail-1.jpg',},
  ]; ;

  responsiveOptions: any[] | undefined;

  constructor() {}

  ngOnInit() {


  }
  

}
