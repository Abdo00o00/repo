// import { NgForOf  } from '@angular/common';
import { Component, OnInit, Injectable } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { GallerydataService } from '../../gallery/gallerydata.service';
import { Galleryarrimages } from '../../gallery/galleryarrimages';
import { Galleryarrsubtitles } from '../../gallery/galleryarrsubtitles';



@Component({
  selector: 'app-latest-projects-gallery',
  standalone: true,
  imports: [
  ButtonModule, 
    GalleriaModule, 
    // NgForOf,
    // GalleryItem
  ],
  templateUrl: './latest-projects-gallery.component.html',
  styleUrl: './latest-projects-gallery.component.scss',
  providers: [],
  
})
export class LatestProjectsGalleryComponent implements OnInit{

  displayBasic: boolean | undefined;
  images: any[] | undefined;
  responsiveOptions: any[] = [
    {
        breakpoint: '1500px',
        numVisible: 5
    },
    {
        breakpoint: '1024px',
        numVisible: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
  ];
  constructor(private _GallerydataService: GallerydataService) {}

  ngOnInit() {}

  gallery_title = "Latest Projects";

  gallery_sub_titles:Galleryarrsubtitles[] = this._GallerydataService.sub_titles_arr

  gallery_items:Galleryarrimages[] =  this._GallerydataService.images_arr


  filtered_items:Galleryarrimages[] = [...this.gallery_items];

  // main func to chahnge images
  changeImages(id: number , text: string): void {
    this.refreshGalleryItems();
    this.changeActiveClass(id);
    this.changeGalleryArr(id);
  }
  refreshGalleryItems(): void {
    this.gallery_items = this._GallerydataService.images_arr
  }

  // func to change gallery items
  changeGalleryArr(id: number): void {
    const selectedCategories = this.gallery_sub_titles[id].category;
    this.filtered_items = this.gallery_items.filter(item => selectedCategories.includes(item.id));

    this.gallery_items = this.filtered_items ;
    // this.filtered_items = [...this.filtered_items];
    console.log(this.filtered_items)
  }

  //func to change active class on click
  changeActiveClass(id: number): void {
    this.gallery_sub_titles = this.gallery_sub_titles.map(item => ({
      ...item,
      class: item.id === id ? 'active' : '',
    }));
  }
  
}