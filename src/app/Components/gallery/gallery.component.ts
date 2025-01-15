import { Component,OnInit} from '@angular/core';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { SitemapComponent } from '../shaerd_components/sitemap/sitemap.component';
import { GalleryitemsComponent } from './galleryitems/galleryitems.component';
import { OppeningsecComponent } from '../shaerd_components/oppeningsec/oppeningsec.component';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    // NgModel,
    OppeningsecComponent,
    SubHeaderComponent,
    SitemapComponent,
    GalleryitemsComponent,
    // Router
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  
  //for openning section
  h1_background: any = {
    h1_text:'Gallery',
    background:'gallery-banner.jpg',
  }

  ngOnInit() {
    // this.items = [
    //   { icon: 'pi pi-home', route: '/installation' }, 
    //   { label: 'Components' }, { label: 'Form' }, 
    //   { label: 'InputText', route: '/inputtext' },
    // ];
  }
}

