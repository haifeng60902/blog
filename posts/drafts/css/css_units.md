CSS 单位
========

CSS 中的许多属性都和尺寸有关，这些属性值都需要有单位，比如：

	width:100px;
	font-size:14px;
	line-height:2em;
	...

不同的单位
---------

###1.%

% 代表百分比值。使用百分比值作为尺寸的元素通过其外层元素计算自身的尺寸值，比较适合“响应式”的内容：

	<div style="height:400px;">
		<div style="height:25%;"></div>
	</div>

内层的 `<div>` 元素高度为 `400px*25%=100px`。

###2.px

px 代表像素值。像素值对应显示器中的像素点，是比较常用的精确尺寸：

	<p style="font-size:14px;"></p>

段落的字体大小为 14 像素。

###3.em

em 代表字体大小的倍数值。使用该单位，可以使元素根据字体大小设置自身尺寸属性：

	<p style="font-size:14px;line-height:2em;"></p>

段落的行高为 `14px*2=28px`。

该单位适合文本排版属性，如 `line-height` `word-spacing` `text-indent` 等。

###4.cm

cm 代表厘米值。

###5.mm

mm 代表毫米值。

###6.ex

###7.pt

###8.pc

计算
----

###calc(exp)

计算表达式 exp 的值。

	width:calc(100%-10px);

表达式：

\+ - * / 均可支持。  
\+ - 两侧需要有空格。