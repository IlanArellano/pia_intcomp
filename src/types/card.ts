import { WithOrientation } from "./index";

export interface PriceInfo {
  title: string;
  price: string;
}

export interface CardServicePriceInfoProps extends WithOrientation {
  title: string;
  image: string;
  prices: PriceInfo[];
}
