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

export interface GetServerSideProps {
  req: {
    cookies: {
      tk: string;
    };
  };
}

export interface NominalTopUpProps {
  id: string;
  coinName: string;
  coinQuantity: number;
  price: number;
}

export interface PaymentProps {
  id: string;
  bankId: string;
  type: string;
  bankName: string;
  name: string;
  accountNumber: string;
}

export interface CheckoutDataTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  userAccount: string;
}

export interface BankType {
  _id: string;
  bankName: string;
  name: string;
  noRekening: string;
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
  gameDetails: GameItemTypes;
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface PlayerTypes {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
}

export interface PayloadTypes {
  player: PlayerTypes;
  iat: number;
}

export interface VoucherTopupHistoryTypes {
  gameName: string;
  category: string;
  thumbnail: string;
  coinName: string;
  coinQuantity: string;
  price: number;
}

export interface PaymentHistoryTypes {
  name: string;
  type: string;
  bankName: string;
  noRekening: string;
}
