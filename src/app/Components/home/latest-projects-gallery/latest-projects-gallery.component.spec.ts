import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestProjectsGalleryComponent } from './latest-projects-gallery.component';

describe('LatestProjectsGalleryComponent', () => {
  let component: LatestProjectsGalleryComponent;
  let fixture: ComponentFixture<LatestProjectsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestProjectsGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestProjectsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
