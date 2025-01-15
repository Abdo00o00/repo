import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WOCSayCarouselComponent } from './w-o-c-say-carousel.component';

describe('WOCSayCarouselComponent', () => {
  let component: WOCSayCarouselComponent;
  let fixture: ComponentFixture<WOCSayCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WOCSayCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WOCSayCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
