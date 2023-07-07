export type ProductType = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
  quantity?: number;
  attributes?: Attributes[];
};

export type Attributes = {
  name: string;
  value_id: string;
  value_name: string;
};
