import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtransferComponent } from './searchtransfer.component';

describe('SearchtransferComponent', () => {
  let component: SearchtransferComponent;
  let fixture: ComponentFixture<SearchtransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchtransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchtransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
