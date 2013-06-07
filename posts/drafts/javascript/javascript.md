JavaScript 参考
==============

概述
----

`JavaScript` 是一种应用广泛的脚本语言。最早由 SUN 和 Netscape 创立，作为网页中的脚本语言，运行于浏览器中。后来 Microsoft 在 IE 3.0 中引入了类似的脚本语言：`JScript`。后来，ECMA 将其指定为标准 [ECMA-262](https://en.wikipedia.org/wiki/ECMAScript "Wiki: ECMAScript")，也就是 `ECMAScript`，目前最新的标准为 [ECMAScript 5.1](http://www.ecma-international.org/publications/standards/Ecma-262.htm "ECMAScript 5.1")。

广义的 `JavaScript` 包括：`JavaScript` 语言本身、`BOM`、`DOM` 等内容；狭义的 `JavaScript` 指的是 `ECMAScript` 的一个子集。本文主要讨论后者，关于 `BOM` `DOM` 的讨论将放在另外的章节中进行。

###测试运行

本文中主要讨论 `JavaScript` 语言本身，而非其基于浏览器的应用。所以，我们抛开浏览器，通过另一个运行环境—— [Node.js](https://en.wikipedia.org/wiki/Node.js "Node.js")，来以学习 C / C++ 的传统方式学习 `JavaScript`。

在任意一个操作系统中安装配置好 Node.js，就可以开始学习了。

通过 Node 执行 JavaScript，有两种方法：

1.在命令窗口中直接输入 node ，进入命令模式，边输入边执行

	// 输入
	node
	>var a=123;
	>console.log(a);
	// 输出
	123

2.将 JavaScript 保存到文件中，通过 node 执行该文件

	// test.js
	var a=123;
	console.log(a);
	// 执行
	node test.js
	// 输出
	123

建议使用第二种方式。可以保存代码，并方便修改。在代码较多时，也不会产生相互干扰。

JavaScript 语法
---------------

参考：js_grammer

数据类型
--------

`JavaScript` 中的数据类型包括原始类型和对象类型两种。

###原始类型

参考：js_datatype

###对象

参考：js_object

###内置对象

参考：js_objects

数组
----

参考：js_array

变量
----

参考：js_variable

运算符
------

参考：js_operators

控制结构
--------

参考：js_statements

函数
----

参考：js_function

类
--

参考：js_class

正则表达式
----------

参考：js_regexp