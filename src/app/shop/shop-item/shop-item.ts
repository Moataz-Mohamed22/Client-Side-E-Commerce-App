import { Component, Input } from '@angular/core';
import { IProduct } from '../../shared/models/Product';

@Component({
  selector: 'app-shop-item',
  standalone: true,
  templateUrl: './shop-item.html',
  styleUrl: './shop-item.scss'
})
export class ShopItemComponent {

  @Input() item!: IProduct;

}
