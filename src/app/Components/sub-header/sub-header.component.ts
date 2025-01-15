import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  standalone: true,
  imports: [],
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss',
})
export class SubHeaderComponent implements OnInit {
  title = '';

  constructor(){

  }
  ngOnInit(): void {
    this.getTitle()
  }
  
  getTitle(){
    switch (location.href.split('/').filter(Boolean).pop()) {
      case "about": this.title='About Us'
        break;
      case "services": this.title='Services'
        break;
      case "projects": this.title='Projects'
        break;
      case "gallery": this.title='Gallery'
        break;
      case "contact": this.title='Contact Us'
        break;
      case "news": this.title='News'
        break;
      default:
        this.title='****'

    }
  }
}
