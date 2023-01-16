const user = {
  name: 'JayH',
  age: 30,
  height: 180,
};

// 물음표 처리를 통한 에러 발생 억제, Optional chaining

// console.log(user.color?.bg);

const rect = {
  width: 10,
  height: 20,
  square: function () {
    console.log(
      `가로가 ${this.width}, 세로가 ${this.height} 인 사각형의 넓이는 ${
        this.width * this.height
      } 이다.`
    );
    return this.width * this.height;
  },
};

rect.square();
