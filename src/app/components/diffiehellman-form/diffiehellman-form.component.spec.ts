import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffiehellmanFormComponent } from './diffiehellman-form.component';

describe('DiffiehellmanFormComponent', () => {
  let component: DiffiehellmanFormComponent;
  let fixture: ComponentFixture<DiffiehellmanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiffiehellmanFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffiehellmanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
