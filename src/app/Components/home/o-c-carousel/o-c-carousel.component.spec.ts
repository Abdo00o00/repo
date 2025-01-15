import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OCCarouselComponent } from './o-c-carousel.component';

describe('OCCarouselComponent', () => {
  let component: OCCarouselComponent;
  let fixture: ComponentFixture<OCCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OCCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OCCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
