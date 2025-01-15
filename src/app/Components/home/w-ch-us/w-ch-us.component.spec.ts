import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WCHUSComponent } from './w-ch-us.component';

describe('WCHUSComponent', () => {
  let component: WCHUSComponent;
  let fixture: ComponentFixture<WCHUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WCHUSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WCHUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
