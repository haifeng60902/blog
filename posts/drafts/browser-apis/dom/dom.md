DOM 文档对象模型
=============

`DOM` （Document Object Model，文档对象模型）提供了通过 `JavaScript` 访问和控制 HTML 和 XML 文档内容的接口。

`DOM` 的核心是将文档中的所有内容作为对象处理，这些对象又被称作节点（Node）。

节点
----

`DOM` 中的节点包括：

+ 代表每个 HTML 元素的 __元素节点__
+ 代表整个 HTML 文档（HTML 元素）的 __文档节点（document 对象）__
+ 代表 HTML 元素属性的 __属性节点__
+ 代表嵌套在 HTML 元素中的文本的 __文本节点__
+ 代表注释的 __注释节点__

参考：node.md

节点树（DOM 树/文档树）
-----

HTML 文档在浏览器中被解析成树形数据结构，该数据结构称为节点树（DOM 树/文档树）。

节点树的特征：

+ document 节点称为 __根节点（root node）__
+ 除了文档节点，所有节点都有 __父节点__ 和 __祖先节点__
+ 大部分元素都有 __子节点__
+ 父节点相同的节点称为 __兄弟节点__

访问节点
-------

###查找节点

document 对象提供了从文档中查找元素/集合的方法：

+ getElementById("id")
+ getElementByName("name")
+ getElementsByClassName("class")
+ getElementsByTagName("tag")
+ querySelector("selectors")
+ querySelectorAll("selectors")

也可以直接通过 document 对象的属性访问某些元素/集合：

+ document.all
+ document.images
+ document.links
+ document.body
+ ...

参考：document.md 和 selector-apis.md

注：本文中的 `元素` 一词等同于 `节点` 。

###读取/设置 HTML 属性



###读取/修改 HTML 内容

访问节点树
---------

###遍历节点树

节点/集合的访问方式只能访问到元素节点，如果需要访问属性节点和文本节点，还需要借助节点之间的关系：

+ node.childNodes
+ node.firstChild
+ node.lastChild
+ node.nextSibling
+ node.parentNode
+ node.previousSibling
+ node.textContent

参考：node.md

###添加/删除节点

访问节点样式
----------

###node.style

node.style 属性代表了节点的 CSS 样式，可通过它来访问/操作节点的样式：

	var target=document.getElementById("target");
	target.style.backgroundColor="#CCC";

在 style 属性中的任何包含 `-` 的样式属性名都要采用 `驼峰命名法` ，如：

	margin-top --> marginTop
	background-color --> backgroundColor

另外，任何 style 中样式的值均为字符串类型，其格式与 CSS 中的属性值相同。

###优化方案

如果需要修改大量节点的样式，或者需要修改大量样式，建议先在 CSS 中编写好样式，然后通过 JS 修改节点的 class/id 等属性值，使其应用相应的样式：

	// CSS
	.blue{
		color:#00F;
	}
	// JS
	document.getElementsByClassName("target").className += "blue";

事件
----

事件在程序中用来监视可能产生的动作，并在该动作发生时产生相应的反应。GUI 程序都是由事件驱动的，如界面中的按钮，会在鼠标点击时执行相应的动作。

###监听事件

有多种方式来为目标对象添加事件监听函数：

① 在 HTML 中设置事件属性（出于内容与行为分离的考虑，不要这么干）
>\<button onclick="func()">按钮\</button>

② 为对象的事件属性赋值
>elmt.onclick=func;

③ 为对象绑定事件监听函数
>elmt.addEventListener("event",func());

###解除监听

某些时候，不再需要监视某个事件，可以取消事件监听函数：

① 将对象的事件属性设置为空
>elmt.onclick=null;

② 取消绑定的事件监听函数
>elmt.removeEventListener("event",func());

###事件对象

从事件对象中，可以获得事件的详细信息：

+ event.srcElement 事件源
+ event.offsetX/event.offsetY 事件发生的位置

参考：event.md