import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseEncodingComponent } from './base-encoding.component';

describe('BaseEncodingComponent', () => {
  let component: BaseEncodingComponent;
  let fixture: ComponentFixture<BaseEncodingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseEncodingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseEncodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
