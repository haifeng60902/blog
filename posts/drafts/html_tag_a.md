a 标签
======

`<a>` 元素用来定义超链接。

	<a href="http://www.google.com">Google</a>

属性
----

###1.href

用于指定链接到的目标URL。

属性值：
>1. url 链接到的目标

###2.hreflang

用于指定目标URL的语言

属性值：
>1. langauge 目标的语言

###3.media [HTML5]

用于指定目标URL的媒体类型

参考：media query

###4.rel

用于指定目标文档和当前文档的关系。

###5.target

参考：base-target

###6.type

用于指定目标的MIME类型。

锚
--

锚点通常用来实现长页面内的直达或跳转，如直接跳转到文章中的某个标题。

###定义锚点

当为页面中的任意元素定义了 `id` 属性，它就可以作为一个锚点。

###锚点的使用方式

要跳转到页面中的某个锚点，只需要在当前页面的URL后添加 `#` + 锚点名称即可。

	<h3 id="name">名为 name 的锚点</h3>

	<a href="http://something.com/somepage.html#name">跳转到名为 name 的锚点</a>

__注意：__

在HTML之前的版本中，都使用 `name` 属性定义锚点，不过在HTML5中，只建议在表单元素中使用该属性。