import {
  PRODUCT_CATEGORY,
  PRODUCT_TYPE,
} from "@src/constants/enum/product.enum";

export interface IProduct {
  id: number;
  name: string;
  category: PRODUCT_CATEGORY;
  type: PRODUCT_TYPE;
  price: number;
  realPrice: number;
  discount: number;
  image: string;
  sold: number;
  stock: number;
  soldCountPercentage: number;
  viewCount: number;
}

export interface IProductHead {
  id: number;
  label1: string;
  label2: string;
  icon: string;
  bgImage: string;
  category: PRODUCT_CATEGORY;
}

export interface IProductSlide {
  id: number;
  image: string;
}
