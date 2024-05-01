import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllPointsComponent } from './show-all-points.component';

describe('ShowAllPointsComponent', () => {
  let component: ShowAllPointsComponent;
  let fixture: ComponentFixture<ShowAllPointsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAllPointsComponent]
    });
    fixture = TestBed.createComponent(ShowAllPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
