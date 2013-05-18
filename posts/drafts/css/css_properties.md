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

###背景渐变(background-gradient)

参考：css_gradient

###圆角(border-radius)

参考：css_border-radius

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

###溢出（overflow）

参考：css_overflow

可伸缩盒模型（flexible-box）
-------------------------

内容生成(content)
----------------

参考：css_content

多列(multi-column)
-----------------

参考：css_column

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

参考：css_animation

滤镜（filter）
------------

opacity

设置元素的透明度。

属性值：

1. alpha 透明度（0.0-1.0 0.0 代表完全透明，1.0 代表完全不透明）

filter

滤镜，主要应用于图像。

属性值：

1.grayscale() 灰度
2.sepia() 褐色
3.saturate() 饱和度
4.hue-rotate() 色向反转
5.invert() 反色
6.opacity() 透明度
7.brightness() 亮度
8.contrast() 对比度
9.blur() 模糊
10.drop-shadow() 阴影

其他(other)
----------

clip

设置元素的可见形状及尺寸（裁剪）。

属性值：

1. auto 不裁剪（默认）
2. shap 设置形状及大小（仅支持：rect(top,right,bottom,left)）

cursor

设置鼠标外形。

属性值：

1. auto 自动（默认）
2. default 默认光标（箭头）
3. crosshair 十字线
4. pointer 手形
5. move 四向箭头
6. n-resize 可向上移动（纵 双向箭头）
7. s-resize 可向下移动（纵 双向箭头）
8. w-resize 可向左移动（横 双向箭头）
9. e-resize 可向右移动（横 双向箭头）
10. nw-resize 可向左上移动（右下-左上 双向箭头）
11. ne-resize 可向右上移动（左下-右上 双向箭头）
12. sw-resize 可向左下移动（右上-左下 双向箭头）
13. se-resize 可向右下移动（左上-右下 双向箭头）
14. text 文本选择光标
15. wait 等待光标（表/沙漏）
16. help 帮助光标（问号/气球）

visibility

设置元素是否可见。

1. visible 可见（默认）
2. hidden 不可见（仍占据原位置及空间）
3. collapse 在表格中，隐藏行/列；在其他元素中，类似于 hidden

resize

设置元素是否可调整大小。

属性值：

1. none 不能调整大小（默认）
2. horizontal 可调整宽度
3. vertical 可调整高度
4. both 可调整宽度和高度

appearance

设置元素的呈现方式。

box-sizing

设置元素盒模型的计算方式。

属性值：

1. content-box 按照 CSS2.1 的盒模型计算（宽度和高度应用于内容区域，内边距和边框属于额外部分）
2. border-box 宽度和高度指定了边框区域的总大小（宽度包含左右内边距和左右边框，高度包含上下内边距和上下边框）