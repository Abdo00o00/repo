import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryitemsComponent } from './galleryitems.component';

describe('GalleryitemsComponent', () => {
  let component: GalleryitemsComponent;
  let fixture: ComponentFixture<GalleryitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryitemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
