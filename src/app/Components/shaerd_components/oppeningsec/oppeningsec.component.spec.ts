import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OppeningsecComponent } from './oppeningsec.component';

describe('OppeningsecComponent', () => {
  let component: OppeningsecComponent;
  let fixture: ComponentFixture<OppeningsecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OppeningsecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OppeningsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
