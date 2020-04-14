import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UplodComponent } from './uplod.component';

describe('UplodComponent', () => {
  let component: UplodComponent;
  let fixture: ComponentFixture<UplodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UplodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UplodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
