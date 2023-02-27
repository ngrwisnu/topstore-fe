export interface CategoryTypes {
  _id?: string;
  name?: string;
  __v?: number;
}

export interface GameItemTypes {
  _id?: string;
  name?: string;
  status?: string;
  thumbnail?: string;
  category?: CategoryTypes;
}

export interface GameCategoriesTypes {
  _id: string;
  name: string;
}

export interface NominalTopUpProps {
  id: string;
  coinName: string;
  coinQuantity: number;
  price: number;
}

export interface PaymentProps {
  bankId: string;
  type: string;
  bankName: string;
}
