import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P5CirclesComponent } from './p5-circles.component';

describe('P5CirclesComponent', () => {
  let component: P5CirclesComponent;
  let fixture: ComponentFixture<P5CirclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P5CirclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P5CirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
