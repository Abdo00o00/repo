import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { AccordionQandAList } from './accordion-qand-a-list';

@Component({
  selector: 'app-qand-a',
  standalone: true,
  imports: [AccordionModule, AvatarModule, BadgeModule, NgForOf,NgIf],
templateUrl: './qand-a.component.html',
  styleUrl: './qand-a.component.scss'
})
export class QandAComponent {


  accordion_QandA_list:AccordionQandAList[] = [
    {
      "id": 0,
      "Q": "Certain pests can be very dangerous?",
      "A": [{
        text:"Create and publilsh dynamic websites for desktop, tablet, and mobile devices that meet the latest web standards- without writing code. Design freely using familiar tools and hundreds of web fonts. easily add interactivity, including slide shows, forms, and more",
        icon:false
      },
        ]
    },
    {
      "id": 1,
      "Q": "We provide the 5 star protection plan guarantees you stay safe from pest without hassle?",
      "A": [
        {
          text:"When you click 'Buy' button you'll be directed to our web store 'Themeforest'. You can purchase our template there, and you will given permission to download our templates.",
          icon:false
        },
        {
          text:"Ready for all devices.",
          icon:true
        },
        {
          text:"HTML template",
          icon:true
        },
        {
          text:"Made with Bootstrap Framework.",
          icon:true
        },
        {
          text:"Easy Costumizable.",
          icon:true
        },
        {
          text:"Affordable Price.",
          icon:true
        },        
      ]
    },
    {
      "id": 2,
      "Q": "Schedule a Complimentary inspection of your Residential?",
      "A": [
        {
          text:"Unzip the file, locate muse file and double click the file and you will directly to adobe muse. Next step you can modifications our template, you can customize color, text, font, content, logo and image with your need using familiar tools on adobe muse without writing any code.",
          icon:false
        },
        {
          text:"You can't re-distribute the Item as stock, in a tool or template, or with source files. You can't re-distribute or make available the Item as-is or with superficial modifications. These things are not allowed even if the re-distribution is for Free.",
          icon:false
        },
      ],
    },
    {
      "id": 3,
      "Q": "Don't worry we will help out you?",
      "A": [
        {
          text:"Open muse file, on the top bar adobe muse you will see text tool. click and add web font do you want. Over 100+ typekit web font ready to use.",
          icon:false
        },
        {
          text:`You just need open "asset" bar on the right side adobe muse. Next right click on the image asset, then "Relink" image asset with your image fit. All image automatically change on tablet and phone too. it's fast and simple. we make your life easier.`,
          icon:false
        },
      ],
    },
  ]

}
