import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionregistroComponent } from './seccionregistro.component';

describe('SeccionregistroComponent', () => {
  let component: SeccionregistroComponent;
  let fixture: ComponentFixture<SeccionregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionregistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
