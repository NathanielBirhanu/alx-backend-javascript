const cloneCarSymbol = Symbol('cloneCarSymbol');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clone = new this.constructor();
    Object.getOwnPropertySymbols(this).forEach(symbol => {
      clone[symbol] = this[symbol];
    });
    return clone;
  }
}
