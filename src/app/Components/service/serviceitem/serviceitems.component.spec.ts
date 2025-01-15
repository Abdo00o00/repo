import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceitemComponent } from './serviceitems.component';

describe('ServiceitemComponent', () => {
  let component: ServiceitemComponent;
  let fixture: ComponentFixture<ServiceitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
