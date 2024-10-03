import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwofishFormComponent } from './twofish-form.component';

describe('TwofishFormComponent', () => {
  let component: TwofishFormComponent;
  let fixture: ComponentFixture<TwofishFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwofishFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwofishFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
