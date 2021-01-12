//第5章 基本应用类型
//引用类型是把数据和功能组织到一起的结构。引用类型有点像类，但是和类不是一个概念
//函数也是一种引用类型！
// Date
let start = Date.now();
console.log(start); // 1970/1/1至今的毫秒数

// Date.UTC() && Date.parse()
let date = new Date(Date.parse("5/23/2019"));
console.log(date);

date = new Date(Date.UTC(1996,2,18,12,25,25));
console.log(date);

console.log(date.toLocaleString());
console.log(date.toString());

// Date可以使用 < > 进行比较
console.log(date.getMonth());

// 5.2 RegExp 正则表达式

let text = "mom and dad and baby";
let pattern = /mom( and dad( and baby)?)?/gi; //设置正则表达式

let matches = pattern.exec(text);
console.log(typeof matches); // obeject
console.log(matches.index); // 0, index表示开始匹配的位置
console.log(matches.input); // 表示要查找的字符串
console.log(matches[0]); //匹配的整个字符串
console.log(matches[1]); //匹配的第一个字符串
console.log(matches[2]); //匹配的第二个字符串

let text1 = "cat, bat, sat, fat";
pattern = /.at/g;

matches = pattern.exec(text1); //每次匹配完了之后函数就结束了
console.log(matches[0]); // cat
console.log(matches.index); // 0
console.log(pattern.lastIndex); // 记录最后的字符位置
console.log(matches.input); // cat, bat, sat, fat

matches = pattern.exec(text1);
console.log(matches[0]);
console.log(matches.index); // 0
console.log(pattern.lastIndex); // 记录最后的字符位置
console.log(matches.input); // cat, bat, sat, fat
matches = pattern.exec(text1);
console.log(matches[0]);
console.log(matches.index); // 0
console.log(pattern.lastIndex); // 记录最后的字符位置
console.log(matches.input); // cat, bat, sat, fat
matches = pattern.exec(text1);
console.log(matches[0]);
console.log(matches.index); // 0
console.log(pattern.lastIndex); // 记录最后的字符位置
console.log(matches.input); // cat, bat, sat, fat

pattern = /.at/y; //y会覆盖g
matches = pattern.exec(text1); //每次匹配完了之后函数就结束了
console.log(matches); // cat
console.log(matches.index); // 0
console.log(pattern.lastIndex); // 记录最后的字符位置
console.log(matches.input); // cat, bat, sat, fat

matches = pattern.exec(text1);
console.log(matches);
console.log(matches.index); // 0
console.log(pattern.lastIndex); // 记录最后的字符位置
console.log(matches.input); // cat, bat, sat, fat
