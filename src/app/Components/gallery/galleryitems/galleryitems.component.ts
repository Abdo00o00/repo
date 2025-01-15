import { NgForOf  } from '@angular/common';
import { Component, OnInit, Injectable } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { GallerydataService } from '../gallerydata.service';
import { Galleryarrimages } from './../galleryarrimages';
import { Galleryarrsubtitles } from './../galleryarrsubtitles';
import { RouterLink } from '@angular/router';
import { MainProjectsDataService } from './../../shaerd_components/main-projects-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-galleryitems',
  standalone: true,
  imports: [
    ButtonModule, 
    GalleriaModule, 
    NgForOf,
    RouterLink,
  ],
  templateUrl: './galleryitems.component.html',
  styleUrl: './galleryitems.component.scss',
  providers: [GallerydataService]
})
export class GalleryitemsComponent implements OnInit{
  constructor(private _GallerydataService: GallerydataService , private _MainProjectsDataService : MainProjectsDataService , private router: Router) { }

  //the id uesr clicked on and send to section project to display it
  project_selected_from_user:string = '';
  

  images: any[] | undefined;
  ngOnInit() {
    this.images = this._GallerydataService.images_arr
  }

  gallery_title = "Latest Projects";
  gallery_sub_titles: Galleryarrsubtitles[] = this._GallerydataService.sub_titles_arr;
  gallery_items :Galleryarrimages[] = this._GallerydataService.images_arr;
  filtered_items: Galleryarrimages[] = [...this.gallery_items];

  // main func to chahnge images
  changeImages(id: number): void {
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
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.filtered_items = this.gallery_items.filter(item => selectedCategories.includes(item.id));

    this.gallery_items = this.filtered_items ;
    // this.filtered_items = [...this.filtered_items];
    console.log(this.filtered_items)
  }

  //func to change active title class on click
  changeActiveClass(id: number): void {
    this.gallery_sub_titles = this.gallery_sub_titles.map(item => ({
      ...item,
      class: item.id === id ? 'active' : '',
    }));
  }
  

  //for pagination
  pagess_wrapper: any[]=[
    {text:'1',class:'active'},
    {text:'2'},
    {text:'3'},
    {text:'4'},
    {text:'5'},
  ]
  
  //for pagination
  changeActiveClass_pages(text: string): void {
    this.pagess_wrapper = this.pagess_wrapper.map(item => ({
      ...item,
      class: item.text === text ? 'active' : '',
    }));
  }
  pagenation(text:string){
    const pagesData: { [key: string]: Galleryarrimages[] } = {
      '1': this._GallerydataService.images_arr,
      '2': this._GallerydataService.images_arr_2,
      '3': this._GallerydataService.images_arr_3,
      '4': this._GallerydataService.images_arr_4,
      '5': this._GallerydataService.images_arr_5,
    };
  
    // تحديث العناصر بناءً على النص
    this.gallery_items = pagesData[text] || this._GallerydataService.images_arr;
  
    console.log('Current Page:', text);
  }
  //for pagination
  changeActiveClass_pages_wrapper(text: string): void {
    this.changeActiveClass_pages(text);
    this.pagenation(text);
    

  }

  //pass project id and call sendSelectedProjectId
  getProjectId(id: string): void {
    // this.router.navigate([`gallery/projects/${id}`]);
    this.project_selected_from_user = id ;
    this._MainProjectsDataService.updateData(this.project_selected_from_user);
    // this.sendSelectedProjectId(this.project_selected_from_user);
  }
  
  //update project id to display it
  // sendSelectedProjectId(project_selected_from_user: string): void {
  //   this._MainProjectsDataService.updateData(this.project_selected_from_user); 
  // }

}
