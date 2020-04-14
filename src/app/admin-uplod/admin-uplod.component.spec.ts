import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUplodComponent } from './admin-uplod.component';
import { from } from 'rxjs';

describe('AdminUplodComponent', () => {
  let component: AdminUplodComponent;
  let fixture: ComponentFixture<AdminUplodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUplodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUplodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
