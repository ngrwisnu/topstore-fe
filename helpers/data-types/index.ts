export interface CategoryTypes {
  _id?: string;
  name?: string;
  __v?: number;
}

export interface CheckoutDataTypes {
  voucher: string;
  nominal: string;
  bank: string;
  name: string;
  userAccount: string;
}
export interface GameItemTypes {
  _id?: string;
  name?: string;
  status?: string;
  thumbnail?: string;
  category?: CategoryTypes;
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

export interface PlayerTypes {
  [key: string]: string;
}

export interface TopUpFormProps {
  voucherDetails: VoucherDetailsTypes;
}

export interface UserSignUpFormTypes {
  fullname: string;
  username: string;
  email: string;
  password: string;
}

export interface VoucherDetailsTypes {
  name: string;
  thumbnail: string;
  category: CategoryTypes;
}
