import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwBodyComponent } from './fw-body.component';

describe('FwBodyComponent', () => {
  let component: FwBodyComponent;
  let fixture: ComponentFixture<FwBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
