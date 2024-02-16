import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountParentComponentComponent } from './count-parent-component.component';

describe('CountParentComponentComponent', () => {
  let component: CountParentComponentComponent;
  let fixture: ComponentFixture<CountParentComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountParentComponentComponent]
    });
    fixture = TestBed.createComponent(CountParentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
