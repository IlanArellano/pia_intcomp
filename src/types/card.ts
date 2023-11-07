export interface PriceInfo {
  title: string;
  price: string;
}

export interface CardServicePriceInfoProps {
  title: string;
  image: string;
  orientation: "left" | "right";
  prices: PriceInfo[];
}
