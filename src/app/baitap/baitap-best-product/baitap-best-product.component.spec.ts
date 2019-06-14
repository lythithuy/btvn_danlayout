import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapBestProductComponent } from './baitap-best-product.component';

describe('BaitapBestProductComponent', () => {
  let component: BaitapBestProductComponent;
  let fixture: ComponentFixture<BaitapBestProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapBestProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapBestProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
