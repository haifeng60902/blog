canvas context2D 对象
=====================

属性
----

###1.canvas

指定了 context2D 对象所属的画布。

属性值：

1. canvasID 画布对象的 ID

###2.fillStyle

指定了用来填充路径的颜色、模式或渐变。

属性值：

1. color CSS 颜色字符串
2. CanvasPattern 由 context.createPattern() 方法创建的对象
3. CanvasGradient 由 context.createLinerGradient() 或 context.createRadialGradient() 方法创建的对象

###3.globalAlpha

指定了绘制的不透明度。

属性值：

1. alpha 透明度（0.0-1.0，默认为 1.0）

###4.globalCompositeOperation

指定了颜色合成方式。

属性值：

1. ？？？？

###5.lineCap

指定了线段末端如何绘制。

属性值：

1. butt [默认]
2. round 
3. square

###6.lineJoin

指定了线条末端如何连接。

属性值：

1. round 
2. bevel
3. miter [默认]

###7.lineWidth

指定了绘制线条的宽度。

属性值：

1. num >0.0（默认为 1.0）

线条在路径中居中，两侧各占一半的宽度。

###8.miterLimit

指定了斜面长度与线条长度的比例（当 `lineJoin="miter"` 时有效。默认为 10）。

###9.shadowBlur

指定了阴影的羽化程度（默认为 0）。

###10.shadowColor

指定了阴影的颜色。

###11.shadowOffsetX

指定了阴影的x偏移量。

###12.shadowOffsetY

指定了阴影的y偏移量。

#13.strokeStyle

指定了用于绘制路径的颜色、模式或渐变。

方法
----

###路径

beginPath()

建立新的路径。

closePath()

如果当前路径未闭合，则自动将当前点和路径起始点连接，形成闭合路径。`fill()` 和 `clip()` 方法也会自动完成该任务。

moveTo(x,y)

设置当前点/位置（开始新的路径。如果之前存在子路径包含所指定的点，则删除该子路径）。

参数：
>1.x 横坐标  
>2.y 纵坐标

###绘制和填充

stroke()

根据 `strokeStyle` `lineCap` `lineJoin` `lineWidth` 等属性的值绘制路径的边框。

fill()

根据 `fillStyle` 属性的值填充当前路径。

###直线

lineTo(x,y)

为当前路径添加一条线段，线段的起点为当前点，终点为 `(x,y)`。（操作完成后，当前点变为 `(x,y)`）

###曲线

bezierCurveTo(cx1,cy1,cx2,cy2,x,y)

以当前点为起点，绘制贝塞尔曲线。（操作完成后，当前点变为 `(x,y)`）

参数：
>1.cx1 控制点1的横坐标  
>2.cy1 控制点1的纵坐标  
>3.cx2 控制点2的横坐标  
>4.cy2 控制点2的纵坐标  
>5.x 终点的横坐标  
>6.y 终点的纵坐标

###圆和弧

###矩形

###图像

###颜色和渐变

###阴影

###组合

###坐标转换

###图像保存

###其他