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

属性选择器
---------

###1.[attr]

[attr] 选择器匹配所有包含 `attr` 属性的元素：

	// HTML
	<h3 display="none"></h3>
	<p></p>
	<div></div>
	// CSS
	[display]{
		// declarations
	}

`<h3>` 元素会被选中。

###2.[attr="value"]

[attr="value"] 选择器会匹配所有 `attr` 属性值为 `value` 的元素：

	// HTML
	<h3 display="none"></h3>
	<p></p>
	<div display="inline"></div>
	// CSS
	[display="inline"]{
		// declarations
	}

`<div display="inline">` 会被选中。

###3.[attr~="value"]

[attr~="value"] 选择器会匹配所有 `attr` 属性值包含单词 `value` 的元素：

	// HTML
	<h3 title="head element"></h3>
	<p></p>
	<div title="div element"></div>
	// CSS
	[title~="head"]{
		// declarations
	}

`<h3 title="head element">` 会被选中。

###4.[attr|="value"]

[attr|="value"] 选择器会匹配所有 `attr` 属性值为 `value` 或以 `value-` 开头的元素：

	// HTML
	<h3 title="head"></h3>
	<p></p>
	<div title="head-div"></div>
	// CSS
	[title|="head"]{
		// declarations
	}

`<h3 title="head">` `<div title="head-div">` 两个元素都会被选中。

###5.[attr^="value"]

[attr^="value"] 选择器会匹配所有 `attr` 属性值以字符串 `value` 开头的元素：

	// HTML
	<h3 title="head element"></h3>
	<p></p>
	<div title="here"></div>
	// CSS
	[title^="head"]{
		// declarations
	}

`<h3 title="head element">` 元素会被选中。

###6.[attr$="value"]

[attr$="value"] 选择器会匹配所有 `attr` 属性值以字符串 `value` 结尾的元素：

	// HTML
	<h3 title="element head"></h3>
	<p></p>
	<div title="here"></div>
	// CSS
	[title$="head"]{
		// declarations
	}

`<h3 title="element head">` 元素会被选中。

###7.[attr*="value"]

[attr*="value"] 选择器会匹配所有 `attr` 属性值包含字符串 `value` 的元素：

	// HTML
	<h3 title="element head3"></h3>
	<p></p>
	<div title="here"></div>
	// CSS
	[title*="head"]{
		// declarations
	}

`<h3 title="element head3">` 元素会被选中。

伪元素选择器
-----------

:first-letter

:first-line

:first-child

:before

:after

:first-of-type

:last-of-type

:only-of-type

:only-child

:nth-child(n)

:nth-last-child(n)

:nth-of-type(n)

:nth-last-of-type(n)

:last-child

:root

:target

伪类选择器
---------

:link

:visited

:active

:hover

:focus

:lang(lang)

:empty

:enabled

:disabled

:checked

:not(selector)

::selection

关系选择器
---------

###1.a b

###2.a>b

###3.a+b

###4.a~b

选择器组合
---------

###1.a,b