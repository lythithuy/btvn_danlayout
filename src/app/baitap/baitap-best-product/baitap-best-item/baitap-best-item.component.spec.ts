import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapBestItemComponent } from './baitap-best-item.component';

describe('BaitapBestItemComponent', () => {
  let component: BaitapBestItemComponent;
  let fixture: ComponentFixture<BaitapBestItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapBestItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapBestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
