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

border-top-width

设置顶部边框的宽度。

属性值：

1. thin 细
2. medium 中等（默认）
3. thick 粗
4. 尺寸值

border-top-style

设置顶部边框的样式。

属性值：

1. none 无边框
2. hidden 与 none 类似。在应用于表格时，可以解决边框冲突
3. dotted 点状线
4. dashed 虚线
5. solid 实线
6. double 双线
7. groove 3D 凹陷
8. ridge 3D 突出
9. inset 3D inset
10. outset 3D outset

border-top-color

设置顶部边框的颜色。

属性值：

1. transparent 透明（默认）
2. 颜色值

bottom-top

在同一个声明中设置顶部边框属性。

可包括的属性：

+ border-top-width
+ border-top-style
+ border-top-color

border-right-width

border-right-style

border-right-color

bottom-right

border-bottom-width

border-bottom-style

border-bottom-color

bottom-bottom

border-left-width

border-left-style

border-left-color

bottom-left

...

border-color

在同一个声明中设置边框颜色。

可包括的属性：

+ border-top-color
+ border-right-color
+ border-bottom-color
+ border-left-color

有四种设置方式：

1. a b c d 分别设置顶部、右侧、底部和左侧的边框颜色
2. a b c 分别设置顶部、左右和底部的边框颜色
3. a b 分别设置顶部和底部、左右的边框颜色
4. a 一次设置四个边框颜色

border-style

在同一个声明中设置边框样式。

可包括的属性：

+ border-top-style
+ border-right-style
+ border-bottom-style
+ border-left-style

有四种设置方式：

1. a b c d 分别设置顶部、右侧、底部和左侧的边框样式
2. a b c 分别设置顶部、左右和底部的边框样式
3. a b 分别设置顶部和底部、左右的边框样式
4. a 一次设置四个边框样式

border-width

在同一个声明中设置边框宽度。

可包括的属性：

+ border-top-width
+ border-right-width
+ border-bottom-width
+ border-left-width

有四种设置方式：

1. a b c d 分别设置顶部、右侧、底部和左侧的边框宽度
2. a b c 分别设置顶部、左右和底部的边框宽度
3. a b 分别设置顶部和底部、左右的边框宽度
4. a 一次设置四个边框宽度

...

border

在同一个声明中设置边框属性。

可包括的属性：

+ border-width
+ border-style
+ border-color

###图像边框(border-image)

border-image-outset

设置边框图像超出边框的量。

属性值：

+ 尺寸值
+ border-width 的倍数

有四种设置方式，分别代表顶部、右侧、底部及左侧的 outset 值。

border-image-repeat

设置边框图像的呈现方式。

属性值：

1. stretch 拉伸
2. repeat 平铺
3. round 类似于 repeat。无法平铺时，会对图像进行缩放

border-image-slice

？？

border-image-source

设置边框图像的 URL。

属性值：

1. url("url") 用作边框图像的资源

border-image-width

？？

border-image

在同一个声明中设置边框图像属性。

可包括的属性：

+ border-image-source
+ border-image-slice
+ border-image-width
+ border-image-outset
+ border-image-repeat

###轮廓(outline)

参考：css_outline

###圆角(border-radius)

border-top-left-radius

border-top-right-radius

border-bottom-left-radius

border-bottom-right-radius

border-radius

###盒阴影(box-shadow)



参考：css_background

定位(positioning)
--------------

浮动(float)
----------

变换(transform)
--------------

参考：css_transform

过渡(transition)
---------------

参考：css_transition

动画(animation)
--------------

