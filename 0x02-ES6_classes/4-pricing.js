import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._currency = currency;
    this._amount = amount;
  }

  // getter for amount
  get amount() {
    return this._amount;
  }

  // setter for amount
  set amount(num) {
    if (typeof num === 'number') {
      this._length = num;
    } else {
      throw new Error('Length must be a number');
    }
  }

  // getter for currency
  get currency() {
    return this._currency;
  }

  // setter for currency
  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw new Error('Invalid currency. Please provide an instance of the Currency class.');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
