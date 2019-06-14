import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapMenuComponent } from './baitap-menu.component';

describe('BaitapMenuComponent', () => {
  let component: BaitapMenuComponent;
  let fixture: ComponentFixture<BaitapMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
