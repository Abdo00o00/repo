import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TobNavbarComponent } from './tob-navbar.component';

describe('TobNavbarComponent', () => {
  let component: TobNavbarComponent;
  let fixture: ComponentFixture<TobNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TobNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TobNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
