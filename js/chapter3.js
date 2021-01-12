"use strict"  //使用严格模式 ,如果放在某个函数中，表示这个函数使用严格模式。

// var和let的区别在于，var声明的范围是函数作用域，而let声明的范围是块作用域！ 再者，let不会做变量提升！
//函数作用域和块级作用域的区别：https://blog.csdn.net/luzhaopan/article/details/82288543?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.control
//使用let在全局作用域中的变量不会成为window对象的属性，而var则会
//标签和标签函数。symbol

let pageHtml = `
<div>
  <a herf= "#">
  <span>Jake<span>
  </a>
</div>
`;

console.log(pageHtml);
let thirdTemplateLiteral = `firstline
secondline`;
console.log(thirdTemplateLiteral.length);


let value = '';
function append(){
  value = `${value}abc`;
  console.log(value);
}
append(); // abc;
append(); // abcabc;
append(); // abcabcabc;

let a = 6;
let b = 9;
function simpleTag(strings, aValExpression,bValExpression,sunExpression){
  console.log(strings);
  console.log(aValExpression);
  console.log(bValExpression);
  console.log(sunExpression);

  return "foo bar";
}

let untaggedResult = `${a} + ${b} = ${a+b}`;
let taggedResult = simpleTag`${a} + ${b} = ${a+b}`;

//console.log(untaggedResult);
//console.log(taggedResult);
/* 报错
var array = new Array();
for(const propName in window){
  array.append(propName);
}*/
