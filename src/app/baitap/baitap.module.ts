import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap1Component } from './baitap1.component';
import { BaitapMenuComponent } from './baitap-menu/baitap-menu.component';
import { BaitapCarouselComponent } from './baitap-carousel/baitap-carousel.component';
import { BaitapBestProductComponent } from './baitap-best-product/baitap-best-product.component';
import { BaitapPromotionComponent } from './baitap-promotion/baitap-promotion.component';
import { BaitapBestItemComponent } from './baitap-best-product/baitap-best-item/baitap-best-item.component';

@NgModule({
  declarations: [Baitap1Component, BaitapMenuComponent, BaitapCarouselComponent, BaitapBestProductComponent, BaitapPromotionComponent, BaitapBestItemComponent],
  exports:[Baitap1Component, BaitapMenuComponent, BaitapCarouselComponent, BaitapBestProductComponent, BaitapPromotionComponent, BaitapBestItemComponent],
  imports: [
    CommonModule
  ]
})
export class BaitapModule { }
