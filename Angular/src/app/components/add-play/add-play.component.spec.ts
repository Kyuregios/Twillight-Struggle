import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlayComponent } from './add-play.component';

describe('AddPlayComponent', () => {
  let component: AddPlayComponent;
  let fixture: ComponentFixture<AddPlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPlayComponent]
    });
    fixture = TestBed.createComponent(AddPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
