"use strict";
//한방에 설정
class Circle {
    constructor(radius) {
        this.radius = radius;
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
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
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
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach((shape) => {
    console.log(shape.getArea());
});
const person = {
    name: '김사랑',
    age: 20,
};
const expert = {
    name: '김개발자',
    skills: ['react', 'js'],
};
const people = [person, expert];
const person2 = {
    name: '김사랑2',
};
const expert2 = {
    name: '개발자2',
    skills: ['123', '456'],
};
const people2 = [person2, expert2];
const color = 'red';
const colors = ['yellow', 'blue'];
//Generics 타입 유추가 힘들떄, 다양한 타입넣을때
// function merge(a: any, b: any): any {
//   return {
//     ...a,
//     ...b,
//   };
// }
// const merged = merge({ foo: 1 }, { bar: 1 });
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 1 });
function wrap(param) {
    return {
        param,
    };
}
const wrapped = wrap(10);
const wrapped2 = wrap('abc');
const wrapped3 = wrap([1, 2, 3]);
const items = {
    list: ['a', 'b', 'c'],
};
const items2 = {
    list: [1, 3, 4],
};
const items3 = {
    list: ['a', 'b', 'c'],
};
// class 에서 Generics
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
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
