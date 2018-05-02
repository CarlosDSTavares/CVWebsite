import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvproperComponent } from './cvproper.component';

describe('CvproperComponent', () => {
  let component: CvproperComponent;
  let fixture: ComponentFixture<CvproperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvproperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvproperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
