import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodebArbitrationComponent } from './todeb-arbitration.component';

describe('TodebArbitrationComponent', () => {
  let component: TodebArbitrationComponent;
  let fixture: ComponentFixture<TodebArbitrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodebArbitrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodebArbitrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
