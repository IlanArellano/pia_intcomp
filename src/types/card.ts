import { WithOrientation } from "./index";

export interface PriceInfo {
  title: string;
  price: number;
}

export interface CardServicePriceInfoProps extends WithOrientation {
  title: string;
  image: string;
  prices: PriceInfo[];
}
