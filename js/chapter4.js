//4.1 原始值和引用值
// 引用值可以随时添加，修改和删除其属性和方法

let name1 = "nicholas";
let name2 = new String("matter");

name1.age = 27;
name2.age = 29;

console.log(name1.age); // undefined
console.log(name2.age); // 29;
console.log(typeof name1); // string
console.log(typeof name2); // object

//引用值的代码说明
let obj1 = new Object();
let obj2 = obj1;
obj1.name = "huangpu";
console.log(obj2.name); //obj2引用的是obj1，指向的是同一个地址。修改obj1会修改原内存的内容。obj2也会被修改


function test(){
  console.log("hello world");
}


/*
两种不同的写法，很有意思！ C++中必须使用函数指针
let test1 = test();
test1;

let test1 = test;
let test2 = test();
console.log(typeof test2); // undefined
console.log(typeof test1); // function;
*/

//引用值的类型一般是object
// instanceof
console.log(obj1 instanceof Object); // true



var color = "blue";

function changeColor(){
  let anotherColor = "red";

  function swapColors(){
    let tempColor = anotherColor;
    anotherColor = color;
    color = tempColor;
  }
  swapColors();
}

changeColor();
console.log(color);

function getColor(){
  let color = "yellow";
  return color;
}

console.log(getColor());
console.log(color);
