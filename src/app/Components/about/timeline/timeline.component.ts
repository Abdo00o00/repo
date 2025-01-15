import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NgIf } from '@angular/common';

interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
    class?:string;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [TimelineModule, CardModule, ButtonModule, NgIf],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {





    events: EventItem[];

    constructor() {
        this.events = [
            { status: 'Smells Racy Free Announcing', date: '1983',image: 'history-1.jpg' },
            { status: 'Smells Racy Free Announcing', date: '1994',image: 'history-2.jpg' },
            { status: 'Smells Racy Free Announcing', date: '2009',image: 'history-3.jpg' },
            { status: 'Smells Racy Free Announcing', date: '2015',image: 'history-4.jpg',class:'last' }
        ];
    }
}


