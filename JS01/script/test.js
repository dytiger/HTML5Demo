function sayHello() {
    alert('Hello JS!');
}

// 声明常量
const COUNT = 100;
// COUNT = COUNT+1;

// 字符串
var s1 = "abc";
var s2 = 'xyz';
var s3 = "This's an apple.";
var s4 = 'This\'s an apple.';

console.log(0 / 0);
console.log(10 / 0);
console.log(-10 / 0);
console.log(NaN == NaN);// false
console.log(isNaN(0 / 0) == isNaN(NaN));// true

// 数字0转成boolean类型是false
// 数字非0转成boolean类型是true
console.log(Boolean(0));// false
console.log(Boolean(10));// true
console.log(Boolean(-100));// true

// 数组声明
var a1 = new Array(10);// 声明了一个初始包含了10个元素的数组
var a2 = Array(5);// 声明了一个初始包含了5个元素的数组
var a3 = Array();// 声明了一个空数组
var a4 = [];// 声明了一个空数组
var a5 = [1, 2, 3];// 声明了一个包含1,2,3的数组
var a6 = [1, true, 'abc'];// 声明了一个包含1,true,'abc'的数组
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);

// 可以通过array.length访问数组的长度，可以使用索引来读取或修改数组中某一个元素的值
// 数组元素的索引是从0到其长度-1
console.log(a6.length);
console.log(a6[0]);// 访问a6数组的第一个元素
console.log(a6[1]);// 访问a6数组的第二个元素
console.log(a6[2]);// 访问a6数组的第三个元素
a6[0] = 10;
console.log(a6[0]);// 访问a6数组的第一个元素

a4['name'] = 'Tom';
a4['age'] = 28;
console.log(a4);
console.log(a4.name);
console.log(a4.age);
console.log(a4['name']);
console.log(a4['age']);

// 对象
var o1 = new Object();
o1.name = "Mike";
o1.age = 30;
o1.salary = 10000;
console.log(o1);

// 初始化了一个描述书籍的对象
// 如果属性名字是合法的JS标识符，可以不加单引号或双引号
// 如果属性名字不是合法的JS标识符，一定要使用单引号或双引号将其引起来
var o2 = {'name': 'Java编程思想', 'pub-date': '2000-01-25', price: 85, discount: 7.5};
// 对此对象进行了方法的扩展
o2.getFinalPrice = function () {
    return this.price * this.discount * 0.1;
}
console.log(o2);
// 调用对象中定义的方法
console.log(o2.getFinalPrice());

console.log(o2.name);
console.log(o2['name']);
// console.log(o2.pub-date);// 使用点号操作符访问不合法的JS标识符时，是不允许的，应该使用[]形式访问此类属性
console.log(o2['pub-date']);

// 算数运算符
// 一元的+、-
var a = +10;
var b = -a;

// 二元的：+、-、*、/、%
console.log(55 % 3);
// 取余的结果符号是与左操作数一致的
// 通常取余运算用于判断某个数字是否能被另一个数字整除
console.log(7 % 4);
console.log(-7 % 4);
console.log(7 % -4);
console.log(-7 % -4);

// 自增自减一元运算：++、--
// i++; =>i=i+1;
// i--; =>i=i-1;
var i = 10;
var j = i++;// 先用后加：j = i;i = i + 1;
console.log(i);
console.log(j);

i = 10;
j = ++i;// 先加后用：i = i + 1;j = i;
console.log(i);
console.log(j);

// 非运算（一元）：非true => false 非false => true
var b1 = !true;
var b2 = !b1;

// 与运算（二元）：只有当左右两个操作数都是true时，结果才是true
b1 = true && false;// false
b1 = false && true;// false
b1 = false && false;// false
b1 = true && true;// true

// 或运算（二元）：只有当左右两个操作数都是false时，结果才是false
b1 = true || false;// true
b1 = false || true;// true
b1 = false || false;// false
b1 = true || true;// true

// 比较运算>、>=、<、<=、==(相等判断)、===(恒等判断)、!=(不等判断)、!==(恒不等判断)
var str1 = '123';
var num1 = 123;
console.log(str1 == num1);// 不同数据类型的操作数会先被转型成为一致的类型，再进行比较
console.log(str1 === num1);// 先判断操作数的类型是否一致，如果一致再判断它们的值是否相等，如果类型不一致，直接返回false

// 条件运算：(boolean)?(boolean==true):(boolean==false);
var num2 = 50;
var result1 = (num2 < 10) ? '小于10' : '大于等于10';
console.log(result1);

var year = 2016;
var isLeapYear = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
console.log(isLeapYear);