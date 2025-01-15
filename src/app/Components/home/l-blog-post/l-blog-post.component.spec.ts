import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LBlogPostComponent } from './l-blog-post.component';

describe('LBlogPostComponent', () => {
  let component: LBlogPostComponent;
  let fixture: ComponentFixture<LBlogPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LBlogPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
