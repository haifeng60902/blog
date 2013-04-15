div 标签
========

`<div>` 元素代表分隔（division），常用于定义页面中的区块，并通过与CSS的组合对页面进行排版。

由于 `<div>` 本身只有一个默认属性（`display:block`），所以很长一段时间内，大多数网站都是用它来进行页面排版。但它没有任何实际意义，无法表达其中内容的含义。HTML5中，强化了 `标签语义化` 的概念，并提供了若干个类似 `<div>` 的新标签，来代替 `<div>` 的一些习惯用法。

语义化的标签
-----------

address article aside blockquote footer header menu nav section

###1.address

用于定义联系信息，如 e-mail、地址、联系人和电话等。

###2.article [HTML5]

用于定义新闻文章、博客博文等页面主体内容。

###3.aside [HTML5]

用于定义侧边栏等非页面主体内容。

###4.blockquote

用于定义引用的内容。

###5.footer [HTML5]

用于定义页脚的内容。

###6.header [HTML5]

用于定义页眉的内容。

###7.menu [HTML5]

用于定义上下文菜单（右键菜单）或工具栏。通常将 `<command>` 元素嵌套其中，作为菜单项或工具栏按钮。

###8.nav [HTML5]

用于定义导航栏。

###9.section [HTML5]

用于定义页面中的区段，如文章章节、侧边栏区块等。  
建议 `<section>` 的首个子元素为标题（`h1~h6`）。