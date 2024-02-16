import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildColourComponent } from './child-colour.component';

describe('ChildColourComponent', () => {
  let component: ChildColourComponent;
  let fixture: ComponentFixture<ChildColourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildColourComponent]
    });
    fixture = TestBed.createComponent(ChildColourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
