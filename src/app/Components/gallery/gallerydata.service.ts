import { Injectable } from '@angular/core';
import { Galleryarrimages } from './galleryarrimages';
import { Galleryarrsubtitles } from './galleryarrsubtitles';



@Injectable({
  providedIn: 'root'
})
export class GallerydataService {

  images_arr: Galleryarrimages[] = [
    {id:'1',altt:"Description for Image 1",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 8.jpeg" },
    {id:'2',altt:"Description for Image 2",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 9.jpeg" },
    {id:'3',altt:"Description for Image 3",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 10.jpeg"},
    {id:'4',altt:"Description for Image 4",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 11.jpeg"},
    {id:'5',altt:"Description for Image 5",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 12.jpeg"},
    {id:'6',altt:"Description for Image 6",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 13.jpeg"},
    {id:'7',altt:"Description for Image 7",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 14.jpeg"},
    {id:'8',altt:"Description for Image 8",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 15.jpeg"},
  ];
  images_arr_2: Galleryarrimages[] = [
    {id:'8',altt:"Description for Image 8",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 15.jpeg"},
    {id:'1',altt:"Description for Image 1",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 8.jpeg" },
    {id:'2',altt:"Description for Image 2",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 9.jpeg" },
    {id:'3',altt:"Description for Image 3",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 10.jpeg"},
    {id:'4',altt:"Description for Image 4",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 11.jpeg"},
    {id:'5',altt:"Description for Image 5",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 12.jpeg"},
    {id:'6',altt:"Description for Image 6",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 13.jpeg"},
    {id:'7',altt:"Description for Image 7",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 14.jpeg"},
  ];
  images_arr_3: Galleryarrimages[] = [
    {id:'7',altt:"Description for Image 7",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 14.jpeg"},
    {id:'1',altt:"Description for Image 1",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 8.jpeg" },
    {id:'2',altt:"Description for Image 2",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 9.jpeg" },
    {id:'3',altt:"Description for Image 3",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 10.jpeg"},
    {id:'4',altt:"Description for Image 4",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 11.jpeg"},
    {id:'5',altt:"Description for Image 5",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 12.jpeg"},
    {id:'6',altt:"Description for Image 6",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 13.jpeg"},
    {id:'8',altt:"Description for Image 8",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 15.jpeg"},
  ];
  images_arr_4: Galleryarrimages[] = [
    {id:'6',altt:"Description for Image 6",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 13.jpeg"},
    {id:'1',altt:"Description for Image 1",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 8.jpeg" },
    {id:'2',altt:"Description for Image 2",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 9.jpeg" },
    {id:'3',altt:"Description for Image 3",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 10.jpeg"},
    {id:'4',altt:"Description for Image 4",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 11.jpeg"},
    {id:'5',altt:"Description for Image 5",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 12.jpeg"},
    {id:'7',altt:"Description for Image 7",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 14.jpeg"},
    {id:'8',altt:"Description for Image 8",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 15.jpeg"},
  ];
  images_arr_5: Galleryarrimages[] = [
    {id:'5',altt:"Description for Image 5",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 12.jpeg"},
    {id:'1',altt:"Description for Image 1",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 8.jpeg" },
    {id:'2',altt:"Description for Image 2",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 9.jpeg" },
    {id:'3',altt:"Description for Image 3",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 10.jpeg"},
    {id:'4',altt:"Description for Image 4",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 11.jpeg"},
    {id:'6',altt:"Description for Image 6",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 13.jpeg"},
    {id:'7',altt:"Description for Image 7",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 14.jpeg"},
    {id:'8',altt:"Description for Image 8",title:'Building Construction',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.',
      imageSrc:"assets/images/asset 15.jpeg"},
  ];

  sub_titles_arr:Galleryarrsubtitles[] = [
    {id:0,slach:false,class:'active',text:' All',category: ['1', '2', '3', '4', '5', '6', '7', '8']},
    {id:1,slach:true,text:'House',category: ['1', '2', '3', '4', '5', '6']},
    {id:2,slach:true,text:'Building',category: ['1', '2','6', '7', '8']},
    {id:3,slach:true,text:'Office',category: ['1' ]},
    {id:4,slach:true,text:'Garden',category: [ '7', '8']},
    {id:5,slach:true,text:'Interior',category: [ '2', '7', '8']}
  ]
}
