CSS 选择器
=========

__选择器__ 通过一系列的规则，指定了应用当前样式规则的目标元素。

按照选择器的匹配方式，可以进行如下分类：

+ 基本选择器
+ 属性选择器
+ 伪元素选择器
+ 伪类选择器
+ 关系选择器
+ 选择器组合

基本选择器
---------

###1.#id

ID 选择器在 `#` 后跟随 `id` 名，匹配 `id="id"` 的元素：

	// HTML
	<p></p>
	<div id="target"></div>
	// CSS
	#target{
		// declarations
	}

只有 `<div id="target">` 被选中。

###2..class

class 选择器在 `。` 后跟随 `class` 名，匹配所有 `class="class"` 的元素：

	// HTML
	<p class="target"></p>
	<div class="target"></div>
	// CSS
	.target{
		// declarations
	}

`<p class="target">` 和 `<div class="target">` 两个元素都会被选中。

###3.element

元素选择器直接使用元素标签名 `tag` 作为选择符，匹配所有标签名为 `<tag>` 的元素：

	// HTML
	<p></p>
	<div></div>
	// CSS
	div{
		// declarations
	}

只有 `<div>` 元素被选中。

###4.*

`*` 用于匹配所有元素：

	// HTML
	<h3></h3>
	<p></p>
	<div></div>
	// CSS
	*{
		// declarations
	}

`<h3>` `<p>` `<div>` 三个元素都会被选中。

