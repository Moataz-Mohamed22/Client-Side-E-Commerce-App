import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Shop } from './shop';
import { ShopItemComponent } from './shop-item/shop-item';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [
    Shop
  ],

  imports: [
    CommonModule,
    ShopItemComponent,
    SharedModule
  ],

  exports: [
    Shop,
    ShopItemComponent
  ]
})
export class ShopModule {}
