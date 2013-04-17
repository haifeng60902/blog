多媒体元素
=========

多媒体元素用于向网页中插入图像、音视频、Flash或可绘制的画布等内容。

1.audio
-------

参考：tag-audio

2.canvas
--------

参考：tag-canvas

3.embed [HTML5]
--------

用于定义嵌入的内容，如Flash。

	<embed src="flash.swf" />

###属性

1.height

用于定义嵌入内容的高度。

属性值：
>1. number 高度值

2.src

用于定义嵌入文件的URL。

属性值：
>1. url 嵌入文件的URL

3.type

用于定义嵌入文件的MIME类型。

4.width

用于定义嵌入内容的宽度。

4.img
-----

用于嵌入图像。

	<img src="image.png" alt="image" />

###属性

1.alt

2.src

3.height

用于定义图像的显示高度。

属性值：
>1. px/% 高度值（像素值或百分数）

4.ismap

用于定义图像映射为服务器端映射，当点击图像时，点击的坐标会被发送到服务器端。

属性值：
>1. ismap

5.usemap

定义图像的热区。

属性值：
>1. #map-name `#` + 图像热区的 `name` 值

6.width

7.object



audio canvas embed img object param source track video  