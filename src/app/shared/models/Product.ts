export interface IProduct {
[x: string]: any;
  name: string;
  description: string;
  photos: IPhoto[];
  price: number;
  oldPrice: number;
  categoryName: string;
}

export interface IPhoto {
  imageName: string;
  productId: number;
}
