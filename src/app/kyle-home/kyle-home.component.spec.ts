import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KyleHomeComponent } from './kyle-home.component';

describe('KyleHomeComponent', () => {
  let component: KyleHomeComponent;
  let fixture: ComponentFixture<KyleHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KyleHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KyleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
