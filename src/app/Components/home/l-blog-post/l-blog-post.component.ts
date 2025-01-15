import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-l-blog-post',
  standalone: true,
  imports: [
    CardModule,
    NgFor
  ],
  templateUrl: './l-blog-post.component.html',
  styleUrl: './l-blog-post.component.scss'
})
export class LBlogPostComponent {

  cards = [
    {
      img_src:'asset 21.jpeg',
      date:{ddmm:'10 Aug',yyyy:'2023'},
      num_of_comments:12,
      by_who:'demongo',
      desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the when an printer took a galley`,
    },
    {
      img_src:'asset 21.jpeg',
      date:{ddmm:'10 Aug',yyyy:'2023'},
      num_of_comments:12,
      by_who:'demongo',
      desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the when an printer took a galley`,
    },
    {
      img_src:'asset 21.jpeg',
      date:{ddmm:'10 Aug',yyyy:'2023'},
      num_of_comments:12,
      by_who:'demongo',
      desc:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the when an printer took a galley`,
    },
  ]

}
