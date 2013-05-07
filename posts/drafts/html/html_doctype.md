doctype 文档类型定义
==================

`<!DOCTYPE>` 声明位于HTML文档的最前面的位置，处于`<html>`标签之前。此标签告诉浏览器该HTML文档使用了哪种HTML或XHTML规范。

文件类型定义（Document Type Definition，DTD）定义了该HTML文档可使用的元素（element）及属性（attribute），浏览器会根据HTML文档中的 `<!DOCTYPE>` 声明来确定DTD的版本，并依据该DTD的规则显示该页面。所以，合理地使用文档类型定义声明，可以让浏览器正确的显示网页。

DTD的版本
--------

###HTML4

在HTML4.01中，定义了三种文档类型：

1.Strict DTD（严格型）

	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

在严格型的HTML文档中，要保证 __内容与表现分离__，即要将CSS样式与HTML声明分离。

2.Transitional DTD（过渡型）

	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

该类型的要求比严格型更加宽松，可用于不支持CSS的浏览器。

3.Frameset DTD（基于框架的）

	<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">

该类型用于使用了框架（`frameset`）的页面，其他的要求类似于 Strict DTD。

###XHTML1

类似HTML4.01，在XHTML1.0中也定义了三种DTD：

###HTML5

在HTML5中，只有一种DTD：

	<!DOCTYPE html>

我们推荐直接使用这个声明。