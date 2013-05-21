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

###字符集

`JavaScript` 全面支持 Unicode，和 `HTML` `CSS` 一样，请使用 UTF-8 格式的编码保存文件。

###标识符

`JavaScript` 的标识符（identifier）区分大小写，所以，变量、关键字、函数名等标识符都需要严格统一大小写。

###空白符

同大多数语言一样，`JavaScript` 会忽略标识符、操作符及与语句之间的空白符（空格、制表符、换行符等）。不过，在代码中适当的应用缩进、对齐和换行，有利于提高代码的可读性。

###注释

`JavaScript` 支持行注释和块注释两种方式：

	// 行注释
	/*
	  块注释
	*/

###标识符

标识符用来对变量、函数、对象或类进行命名。标识符需要遵守以下规则：

+ 必须以 字母（a~z，A~Z）、下划线（_）或美元符（$）开始
+ 其它字符可以是字母、数字、下划线或美元符

__注意：__ `JavaScript` 允许在标识符使用任意的 Unicode 字母，但为了保证代码的可读性，建议仅使用英文字母。

###关键字

`JavaScript` 使用了一些标识符作为关键字，这些关键字就不可以在代码中当做普通标识符来使用了：

>break case catch continue debugger default delete do else false finally for function if in instancesof new null return switch this throw true try typeof var void while with

###全局变量和函数

`JavaSctipt` 定义了许多全局变量和函数，它们的名字也不可以当做普通标识符：

>arguments Array Boolean Date decodeURI decodeURIComponent encodeURI encodeURIComponent Error eval EvalError Function Infinity isFinite isNaN JSON Math NaN Number Object parseFloat parseInt RangeError ReferenceError RegExp String SyntaxError TypeError undefined URIError

###保留字

`JavaScript` 中还保留了一些关键字，不过这些关键字仍未被使用：

>class const enum export extends import super

在 `JavaScript` 严格模式下，还有另外两个标识符不可以使用：

>arguments eval

`ECMAScript 3` 将所有的 Java 关键字都作为保留字，如果需要兼容 `ES3` 的解析器，就不要使用这些保留字作为标识符：

>abstract boolean byte char class const double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile

###语句

`JavaScript` 中，请使用 `;` 作为语句的结尾。