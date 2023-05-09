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

export interface CheckoutDataTypes {
  voucher: string;
  nominal: string;
  bank: string;
  name: string;
  userAccount: string;
}

export interface BankType {
  _id: string;
  bankName: string;
}
export interface PaymentTypes {
  _id: string;
  banks: BankType[];
  type: string;
}

export interface NominalTypes {
  _id: string;
  coinName: string;
  coinQuantity: number;
  price: number;
}

export interface TopUpFormProps {
  payments: PaymentTypes[];
  nominals: NominalTypes[];
}

export interface LoginTypes {
  email: string;
  password: string;
}
