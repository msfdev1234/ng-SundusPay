import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyforComponent } from './safetyfor.component';

describe('SafetyforComponent', () => {
  let component: SafetyforComponent;
  let fixture: ComponentFixture<SafetyforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyforComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafetyforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
