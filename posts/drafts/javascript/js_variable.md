variable 变量
===========

变量的声明
--------

变量在声明后才能使用。声明变量要是用关键字 var：

	var a; // 声明变量 a
	var a,b; // 声明变量 a b
	var a=1; // 声明变量并赋值
	var a=1,b=2; // 声明多个变量并赋值

变量的赋值
--------

声明变量后，对变量的首个操作应该是赋值：

	var a;
	a=1;

如果变量未赋值，则变量的值为 undefined。如果访问一个不存在的变量，其值同样是 undefined：

	var a;
	var value_a=a; // undefined
	var value_b=b; // undefined

`JavaScript` 中的变量是无类型的，可以将任何类型的值赋给一个变量：

	var a;
	a=1; // Number
	a="abc"; // String
	a=new Date(); // Date
	a=function(){}; // Function
	a=[1,2,3]; // Array
	a={x:1,y:2}; // Object

变量的访问
--------

使用变量时，将其作为一个值或对象：

	var a=1;
	a++; // 自增操作
	var b="abc";
	b.length; // 字符串的长度 3
	b[1]; // 字符串第二个字符 "b"
	var c=function(x){return x*x;};
	c(x); // 函数 求 x 的平方
	var d=[1,2,3];
	d.push(4); // 为数组添加元素
	var e={x:1,y:2};
	e.x; // 访问对象的 x 属性

变量的作用域
----------

###局部变量

###全局变量

###作用域链

