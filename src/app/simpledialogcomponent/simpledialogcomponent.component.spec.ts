import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpledialogcomponentComponent } from './simpledialogcomponent.component';

describe('SimpledialogcomponentComponent', () => {
  let component: SimpledialogcomponentComponent;
  let fixture: ComponentFixture<SimpledialogcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpledialogcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpledialogcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
