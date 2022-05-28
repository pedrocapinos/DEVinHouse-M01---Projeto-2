import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSubComponent } from './layout-sub.component';

describe('LayoutSubComponent', () => {
  let component: LayoutSubComponent;
  let fixture: ComponentFixture<LayoutSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
