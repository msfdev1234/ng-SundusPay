import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalwarningsComponent } from './legalwarnings.component';

describe('LegalwarningsComponent', () => {
  let component: LegalwarningsComponent;
  let fixture: ComponentFixture<LegalwarningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalwarningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalwarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
