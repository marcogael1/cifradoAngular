import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RIPEMDFormComponent } from './ripemd-form.component';

describe('RipemdFormComponent', () => {
  let component: RIPEMDFormComponent;
  let fixture: ComponentFixture<RIPEMDFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RIPEMDFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RIPEMDFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
