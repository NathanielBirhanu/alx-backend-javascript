import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice() {
    const { name, code } = this._currency;
    return `${this._amount} ${name} (${code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
