interface Shape {
  getArea(): number;
}

//한방에 설정

class Circle implements Shape {
  constructor(public radius: number) {
    this.radius = radius;
  }
  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}

// class Circle implements Shape {
//   radius: number;
//   constructor(radius: number) {
//     this.radius = radius;
//   }

//   getArea() {
//     return this.radius ** 2 * Math.PI;
//   }
// }

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
}

// class Rectangle implements Shape {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea() {
//     return this.width * this.height;
//   }
// }

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius);

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach((shape) => {
  console.log(shape.getArea());
});

// 왜 두번 발생하지? 생성자 함수에 할당을 안해줘도 들어가네

//일반 객체
interface Person {
  name: string;
  age?: number;
}

interface Deveolper extends Person {
  skills: string[];
}

const person: Person = {
  name: '김사랑',
  age: 20,
};

const expert: Deveolper = {
  name: '김개발자',
  skills: ['react', 'js'],
};

const people: Person[] = [person, expert];

// 이번엔 별칭
type Person2 = {
  name: string;
  age?: number;
};

type Deveolper2 = Person2 & {
  skills: string[];
};

const person2: Person2 = {
  name: '김사랑2',
};

const expert2: Deveolper2 = {
  name: '개발자2',
  skills: ['123', '456'],
};

type People2 = Person2[];
const people2: People2 = [person2, expert2];

type Color = 'red' | 'yellow' | 'blue';
const color: Color = 'red';
const colors: Color[] = ['yellow', 'blue'];

//Generics 타입 유추가 힘들떄, 다양한 타입넣을때

// function merge(a: any, b: any): any {
//   return {
//     ...a,
//     ...b,
//   };
// }

// const merged = merge({ foo: 1 }, { bar: 1 });

function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b,
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });

function wrap<T>(param: T) {
  return {
    param,
  };
}

const wrapped = wrap(10);
const wrapped2 = wrap('abc');
const wrapped3 = wrap([1, 2, 3]);

// interface 에서 Generics

interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ['a', 'b', 'c'],
};

const items2 = {
  list: [1, 3, 4],
};

// type 에서 Generics

type Items2<T> = {
  list: T[];
};

const items3: Items2<String> = {
  list: ['a', 'b', 'c'],
};

// class 에서 Generics

class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
