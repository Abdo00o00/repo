import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ServiceComponent } from './Components/service/service.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { NewsComponent } from './Components/news/news.component';
import { ServicedetailsComponent } from './Components/service/servicedetails/servicedetails.component';
import { NotfundComponent } from './Components/notfund/notfund.component';

export const routes: Routes = [
    {path:"",pathMatch:"full",redirectTo:"home"},
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"services",component:ServiceComponent},
    {path:"servicedetails",component:ServicedetailsComponent},
    {path:"projects/:id",component:ProjectsComponent},
    {path:"gallery",component:GalleryComponent,},
    {path:"contact",component:ContactComponent},
    // {path:"news",component:NewsComponent},
    {path:"**",component:NotfundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes ,{useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}