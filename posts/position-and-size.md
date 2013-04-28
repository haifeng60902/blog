HTML & JavaScript 中的位置和尺寸
==============================

event 对象
----------

###clientX|clientY

事件发生点距浏览器文档显示区域左/上边缘的距离

###offsetX|offsetY

事件发生点距所在元素左/上边缘的距离

###screenX|screenY

事件发生点距屏幕左/上边缘的距离

element 对象
------------

###style.width|style.height

样式中的宽度、高度。

###clientWidth|clientHeight|clientLeft|clientTop

box中内容可视区域的宽度、高度，内容可视区域距box左/上边缘的距离

###offsetWidth|offsetHeight|offsetLeft|offsetTop

box的宽度、高度，box距离页面/parent左/上边缘的距离

###scrollWidth|scrollHeight|scrollLeft|scrollTop

box中内容实际（可滚动）宽度、高度，内容横/纵向滚动距离

可滚动距离最大值：

scrollLeft.Max=scrollWidth-clientWidth  
scrollTop.Max=scrollHeight-clientHeight

![element](/images/position-and-size-element.png "element")

window 对象
-----------

###innerWidth|innerHeight

浏览器文档显示区域的宽度、高度

###outerWidth|outerHeight

浏览器窗口的宽度、高度

###pageXOffset|pageYOffset

当前页面的横/纵向滚动距离

###screenLeft|screenTop|screenX|screenY

浏览器窗口距离屏幕左/上边缘的距离

![window](/images/position-and-size-window.png "window")

screen 对象
-----------

###width|height

屏幕的宽度、高度

###availWidth|availHeight

屏幕可用区域的宽度、高度（不包括任务栏）

###deviceXDPI|deviceYDPI



###logicalXDPI|logicalYDPI

![screen](/images/position-and-size-screen.png "screen")