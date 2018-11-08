import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KyleCardComponent } from './kyle-card.component';

describe('KyleCardComponent', () => {
  let component: KyleCardComponent;
  let fixture: ComponentFixture<KyleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KyleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KyleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
