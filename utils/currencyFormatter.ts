const currencyFormatter = (value: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
};

class Price {
  price: number;
  tax?: number;
  taxedPrice: number;

  constructor(price: number, tax: number = 0) {
    this.price = price;
    this.tax = tax;
    this.taxedPrice = (this.tax! * this.price) / 100;
  }

  formattedPrice() {
    return currencyFormatter(this.price);
  }

  taxValue() {
    return currencyFormatter(this.taxedPrice);
  }

  totalPrice() {
    const count = this.taxedPrice + this.price;
    return currencyFormatter(count);
  }
}

export { currencyFormatter, Price };
