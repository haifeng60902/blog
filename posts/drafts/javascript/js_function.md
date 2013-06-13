函数
===

函数定义
-------

函数定义如下：

	function fun_name(arguments){
		// operations
	}

__函数名__ 需要符合 `JavaScript` 标识符定义规则。函数可以有多个 __参数__ ，也可以没有参数。 __形参__ 在函数体中作为局部变量使用。

函数可以有 __返回值__ ，返回值会在调用函数时返回到调用语句：

	// 定义
	function sum(a,b){
		return a+b;
	}
	// 调用
	var s=sum(1,2); // s=3

如果函数作为对象的属性，则该函数称为 __对象的方法__ ：

	var obj={
		x:1,
		y:2,
		fun:function(){ // 一种定义形式
			//
		}
	};
	obj.sum=function(){ // 另一种定义形式
		return this.x+this.y;
	};

可以将函数赋值给变量，该变量称为 __匿名函数__ ：

	var f=function(){//};
	// 调用
	f();

可以在函数定义后，直接调用该函数：

	var f=(function(a){
		return a*a;
	}(5)); // f=25

###1.return

`return` 用于从函数中返回任何值。当函数运行到 `return` 语句时，函数会停止执行。

###2.函数嵌套

在 `JavaScript` 中，函数可以嵌套在其它函数中：

	function sun(a,b){
		function square(x){return x*x};
		return (square(a)+square(b));
	}

嵌套在内层的函数可以读取外层函数的局部变量（包括参数）。

函数调用
-------

###1.普通函数的调用

	// 无参函数
	function fun1(){
		//
	}
	// 有参函数
	function fun2(a){
		//
	}
	// 有返回值的函数
	function fun3(a){
		//
		return x;
	}
	// 函数调用
	fun1();
	fun2(5);
	var re=fun3(5);

###2.调用对象的方法

	var s=Math.max(1,2); // s=2

也可以通过字符串形式的属性名调用该函数，不过并不常用：

	var s=Math["max"](1,2); // s=2

如果某个方法的返回值是对象，则可以在调用该方法的语句之后继续调用其返回对象的方法，也就是 __方法链__ ：

	var str="1234abcd";
	str.slice(4).replace("a","A");
	// 截取字符串得到 "abcd"，再将 "a" 替换为 "A"

###3.构造函数的调用

构造函数用于构造新的对象，调用时，需要在函数前使用关键字 new：

	var array=new Array();

###4.call()

###5.apply()

函数的参数
--------

###1.形参

形参是函数声明时规定的参数。形参在函数体中作为局部变量使用。

函数可以没有形参，也可以有多个形参。

###2.实参

实参是在调用函数时传入的值，对应的形参会引用传入的实参。

函数声明时，形参无法限制传入数据的类型；函数调用时，也不会检测传入实参的个数。因此，需要在函数中判断传入参数的个数和有效性。

###3.参数列表

在函数体中，arguments 对象是一个包含了所有传入实参的数组，可通过读取 arguments 的属性和值，判断传入实参的有效性：

	function(a,b){
		var len=arguments.length; // 实参个数
		for(var i=0;i<len;i++){
			// arguments[i] 遍历实参列表
		}
	}

另外，如果传入的实参个数小于形参个数，则空余的形参值为 undefined。

__注意：__ arguments 对象可写，即实参列表可以被修改，要谨慎使用。

如果需要在函数中使用不定个数的参数，可以使用数组或对象做参数，将所有的值包装到数组或对象中。

使用对象做参数的好处是只需要记住对象的属性名，不需要考虑其顺序。

函数对象
-------

`JavaScript` 中的函数不是原始值，而是对象。

###1.Function()

可以使用函数的构造函数生成函数对象：

	var f=new Function("a","b","return a+b;");
	// 类似于
	var f=function(a,b){return a+b;};

唯一的不同点是，每次调用构造函数会生成新的对象，而不是执行已有的函数对象。

###2.函数的属性

函数是对象，所以，它也可以拥有属性。

函数的属性可以作为函数的静态变量使用：

	test.counter=0;
	function test(){
		test.counter++;
	}
	test();
	var type=typeof test; // function
	var n=text.counter; // 1

每个函数都有一个 __length__ 属性，代表了函数期望的参数个数，也就是声明的形参的个数。length 属性可以结合 arguments.length 属性使用，可以用来判断实参的合法性等。

作为对象，函数也包含 prototype 属性，该属性在函数作为构造函数时，可以实现继承等功能。

###3.作为命名空间

由于函数作用域的影响，函数中的变量都是局部变量，局部变量在函数体内可访问，在函数外不可见。可利用此特性，将函数用作命名空间。

###4.call() 和 apply()

`call()` 和 `apply()` 方法可以以对象作为参数，为该对象调用某个方法，不论该方法是否属于此对象。

	function f(arg1,arg2,...){}
	var obj=new Object();
	// call()
	f.call(obj,arg1,arg2,...);
	// apply()
	f.apply(obj,[arg1,arg2,...]);

与 call() 方法不同，apply() 方法的其他参数必须放在数组中。

###5.bind()

`bind()` 方法可以将函数绑定到对象中。

	function f(arg1,arg2,...){}
	var obj=new Object();
	// bind()
	var g=f.bind(obj);
	// 调用
	obj.f(arg1,arg2,...);
	// 等同于
	g(arg1,arg2,...);

闭包
----

？？
