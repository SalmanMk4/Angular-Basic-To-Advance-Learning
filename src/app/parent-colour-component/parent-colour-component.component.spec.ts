import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentColourComponentComponent } from './parent-colour-component.component';

describe('ParentColourComponentComponent', () => {
  let component: ParentColourComponentComponent;
  let fixture: ComponentFixture<ParentColourComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentColourComponentComponent]
    });
    fixture = TestBed.createComponent(ParentColourComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
