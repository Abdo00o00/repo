import { Component , OnInit } from '@angular/core';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { SitemapComponent } from '../shaerd_components/sitemap/sitemap.component';
import { OppeningsecComponent } from '../shaerd_components/oppeningsec/oppeningsec.component';
import { Towhat } from './../shaerd_components/sitemap/towhat';
import { ServiceTitles } from './../service/servicedetails/service-titles';
import { NgFor } from '@angular/common';
import { MainProjectsData } from './../shaerd_components/main-projects-data';
import { MainProjectsDataService } from './../shaerd_components/main-projects-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SubHeaderComponent,SitemapComponent,OppeningsecComponent,NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  providers:[MainProjectsDataService],
})
export class ProjectsComponent implements OnInit {
  projectId: number | null = null;
  constructor (private _MainProjectsDataService : MainProjectsDataService ,private route: ActivatedRoute){}

  receivedData: string = '';
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectId = +params['id']; // تحويل id إلى رقم
      this.loadProject(this.projectId); // استدعاء دالة لعرض المشروع
    });
    // this._MainProjectsDataService.the_project_on_screen.subscribe((data) => {
    //   this.receivedData = data;
    // });
    // this._MainProjectsDataService.the_project_on_screen.subscribe((data) => {
    //   this.updateDisplayedProject(data);
    //   // if (data) {
    //   //   console.log('Received Project ID:', data);
    //   // } else {
    //   //   console.warn('No Project ID received');
    //   // }
    //   // console.log(data + "fff");
    //   // console.log('op' + "fff");
    // });
  }
  loadProject(id: number): void {
    // منطق تحميل المشروع بناءً على id
    console.log(`Loading project with ID: ${id}`);
  }
  // updateDisplayedProject(projectId: string): void {
  //   const project = this._MainProjectsDataService.the_Main_Projects_Data.find(p => p.project_id  == projectId);
  //   if (project) {
  //     this.main_project_display = project;
  //     // console.log('ppee'+ "fff");
  //   }
  // }

  //the main project what the user see 
  main_project_display:MainProjectsData=
    {
      project_id:'project_1',
      project_img_src:'project-detail-2.jpg',
      project_title:'Building Construction',
      project_desc:[
        {
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          class:'mb-4'
        },
        {
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          class:'mb-4'
        },
        {
          text:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          class:'with_border'
        },
      ],
      project_client_info:{
          Client:'Rudhi Sasmito',
          Location:'Sidoarjo, East Java, ID',
          Completed:'March, 2016',
          Website:'www.petro.com' ,class:'last_child'
        },
  };

  //for oppenning section
  h1_background: any = {
    h1_text:  "Projects",
    background: "banner-page.jpg",
  };

  //site tree 
  towhat:Towhat[]=[
    {
      label: 'gallery', 
      route: '/gallery', 
      style: {'cursor': 'pointer' },
      class:'text_colored'
    },
    {
      label: 'Projects', 
      // route: '/gallery-grid-1', 
      // style: {'cursor': 'pointer;' },
      // class:'text_colored'
    }
  ];

  //next & previous buttons
  service_titles: ServiceTitles[]=[
    {id:'Previous',title:'Previous Project'},
    {id:'Next',title:'Next Project'},
  ];


  downloadBrochure(){
    console.log('downloadBrochure');
    console.log(this.receivedData);
  };



  changeActiveClass(id: string): void {
    this.service_titles = this.service_titles.map(item => ({
      ...item,
      class: item.id === id ? 'active' : '',
    }));

    console.log('changeActiveClass');
  }
  
}
