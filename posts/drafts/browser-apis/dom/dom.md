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

document 对象提供了从文档中查找元素/集合的方法：

+ document.getElementById("id") --> node[live]
+ document.getElementByName("name") --> nodelist[live]
+ document.getElementsByClassName("class") --> nodelist[live]
+ document.getElementsByTagName("tag") --> nodelist[live]
+ document.querySelector("selectors") --> node
+ document.querySelectorAll("selectors") --> nodelist

`nodeList` 是类似于数组的节点集合。

也可以直接通过 document 对象的属性访问某些元素/集合：

+ document.all
+ document.images
+ document.links
+ document.body
+ ...

参考：dom/document.md

注：本文中的 `元素` 一词等同于 `节点` 。

访问节点树
---------

节点/集合的访问方式只能访问到元素节点，如果需要访问属性节点和文本节点，还需要借助节点之间的关系：

+ node.childNodes
+ node.firstChild
+ node.lastChild
+ node.nextSibling
+ node.parentNode
+ node.previousSibling
+ node.textContent

参考：node.md