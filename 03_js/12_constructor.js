const user01 = {
  name: '황보석',
  age: 31,
  hello: function () {
    console.log(`안녕하세요 저는 ${this.age}세 ${this.name}입니다.`);
  },
};

user01.hello();

function User(name, age) {
  return {
    name,
    age,
    hello: function () {
      console.log(`안녕하세요 저는 ${age}세 ${name}입니다.`);
    },
  };
}

const user02 = [User('김민수', 29), User('정민석', 35)];

user02[0].hello();
user02[1].hello();

function User2(name, age) {
  this.name = name;
  this.age = age;
}

User2.prototype.send = function (msg) {
  console.log(msg);
};

User2.prototype.hello = function () {
  console.log(`안녕하세요 저는 ${this.age}세 ${this.name}입니다.`);
};

User2.isUser = function (user) {
  console.log(user instanceof User2);
};

const user04 = new User2('Kim', 35);
console.log(user04);
user04.hello();

class UserClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log(`안녕하세요 저는 ${this.age}세 ${this.name}입니다.`);
  }

  static hi() {
    console.log(`이건 정적 메소드`);
  }
}

const user03 = new UserClass('박성진', 33);

user03.hello();

class Car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
  }

  stop() {
    console.log('자동차가 멈췄습니다.');
  }

  static isCar(obj) {
    return obj instanceof Car;
  }
}

const car = new Car('red', 200);
console.log(car);
car.stop();
console.log(Car.isCar(car) ? '자동차가 맞습니다' : '자동차가 아닙니다.');

class Animal {
  constructor(species, legs) {
    this.species = species;
    this.legs = legs;
  }

  cry(sound) {
    console.log(
      `다리가 ${this.legs}개 달린 ${this.species}의 소리는 ${sound} 입니다.`
    );
  }
}

class Cat extends Animal {
  constructor(color) {
    super('고양이', 4);
    this.color = color;
  }

  cry() {
    super.cry('야옹');
  }

  jump() {
    console.log('폴짝');
  }
}

const dog = new Animal('강아지', 4),
  cat = new Cat('white');
dog.cry('멍멍');
cat.cry();
cat.jump();
