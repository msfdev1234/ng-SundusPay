import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KVKKComponent } from './kvkk.component';

describe('KVKKComponent', () => {
  let component: KVKKComponent;
  let fixture: ComponentFixture<KVKKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KVKKComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KVKKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
