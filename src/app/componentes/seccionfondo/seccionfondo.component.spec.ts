import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionfondoComponent } from './seccionfondo.component';

describe('SeccionfondoComponent', () => {
  let component: SeccionfondoComponent;
  let fixture: ComponentFixture<SeccionfondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionfondoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionfondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
