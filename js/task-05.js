class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed:${car.speed} , isOn:${car.isOn} , distance:${car.distance} , price:${car.price} `
    );
  }
  constructor({ maxSpeed, price }) {
    this.maxSpeed = maxSpeed;
    this._price = price;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
  }
  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    if (value <= this.maxSpeed) {
      this.speed += value;
    } else {
      `Ви не можите нехать с такоой скоростью`;
    }
  }
  decelerate(value) {
    if (this.speed - value > 0) {
      this.speed -= value;
    } else {
      `Вы не можете ехать назад`;
    }
  }
  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    } else {
      `Машина не заведена`;
    }
  }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
