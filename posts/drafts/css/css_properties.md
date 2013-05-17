CSS 属性
========

文本(text)
---------

参考：css_text

字体(font)
---------

参考：css_font

自定义字体(@font-face)
--------------------

参考：css_font-face

列表(list)
---------

参考：css_list

表格(table)
----------

参考：css_table

盒模型(box)
----------

display

设置元素的盒类型。

属性值：

1. none 不显示（不可见，也不占据空间）
2. block 块级元素
3. inline 内联元素（默认）
4. inline-block 内联块元素
5. list-item 列表项
6. run-in 根据上下文判断为 block 或 inline
7. table 表格（类似 `<table>`）
8. inline-table 内联表格
9. table-row-group 表格的行分组（类似 `<tbody>`）
10. table-header-group 表格的行分组（类似 `<thead>`）
11. table-footer-group 表格的行分组（类似 `<tfoot>`）
12. table-row 表格的行（类似 `<tr>`）
13. table-column-group 表格列分组（类似 `<colgroup>`）
14. table-column 表格列（类似 `<col>`）
15. table-cell 表格单元格（类似 `<td>`）
16. table-caption 表格标题（类似 `<caption>`）

###尺寸(dimension)

参考：css_dimension

###背景(background)

###外边距(margin)

参考：css_margin

###内边距(padding)

参考：css_padding

###边框(border)

参考：css_border

###图像边框(border-image)

参考：css_border-image

###轮廓(outline)

参考：css_outline

###背景(background)

参考：css_background

###圆角(border-radius)

border-top-left-radius

border-top-right-radius

border-bottom-left-radius

border-bottom-right-radius

border-radius

###盒阴影(box-shadow)

box-shadow

设置 box 的阴影。

可包括的属性：

+ h-shadow 阴影水平位置（右为正，左为负。默认为 0）
+ v-shadow 阴影垂直位置（下为正，上为负。默认为 0）
+ blur 模糊距离（可选，默认为 0）
+ spread 阴影尺寸（可选）
+ color 阴影颜色（可选，默认与边框颜色相同）
+ inset 内阴影（可选，不设置则为外阴影）

多重阴影

在 box-shadow 中设置多组阴影数据，即可实现多重阴影：

	box-shadow:2px 2px 5px #CCC inset,5px 5px 10px #AAF;

可伸缩盒模型（flexible-box）
-------------------------

内容生成(generated-content)
--------------------------

多列(multi-column)
-----------------

定位(positioning)
----------------

参考：css_position

浮动(float)
----------

float

设置元素是否浮动。

属性值：

1. none 不浮动（默认）
2. left 向左浮动
3. right 向右浮动

clear

设置清除是否浮动。

属性值：

1. none 不清除浮动（默认）
2. left 清除左侧浮动
3. right 清除右侧浮动
4. both 清除两侧的浮动

变换(transform)
--------------

参考：css_transform

过渡(transition)
---------------

参考：css_transition

动画(animation)
--------------

其他(other)
----------

clip

cursor

visibility

resize

appearance

box-sizing