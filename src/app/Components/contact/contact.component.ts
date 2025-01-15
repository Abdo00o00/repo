import { Component , NgModule  } from '@angular/core';
import { SubHeaderComponent } from '../sub-header/sub-header.component';
import { NgForOf } from '@angular/common';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { NiceButtonComponent } from '../shaerd_components/nice-button/nice-button.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FloatLabelModule } from 'primeng/floatlabel';

import { DataContact } from './data-contact';
import {DataInput} from './data-input'
import { Buttonninputs } from './../shaerd_components/nice-button/buttonninputs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NiceButtonComponent,
    FloatLabelModule,
    InputTextareaModule,
    SubHeaderComponent,
    NgForOf,
    FormsModule, 
    InputGroupModule, 
    InputGroupAddonModule, 
    InputTextModule,
    // BrowserModule,
    // ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  buttonn_Submit:Buttonninputs={
    text: 'Submit',
    // router: '',
  }
  buttonn_clear:Buttonninputs={
    text: 'Reset',
    router: '',
  }


  //clear input values
  clearValues(nameInput: HTMLInputElement, emailInput: HTMLInputElement, textarea: HTMLTextAreaElement) {
    nameInput.value = ''; 
    emailInput.value = ''; 
    textarea.value = ''; 
  }
  
  //contact data
  data_contacts:DataContact[] = [
    {icon_class:'fa-solid fa-phone',property:'Phone',value:'+91 564 548 4854'},
    {icon_class:'fa-solid fa-envelope',property:'Email',value:'demo@gmail.com'},
    {icon_class:'fa-solid fa-location-dot',property:'Address',value:'252 W 43rd St New York, NY'},
  ]





}
