HTML & JavaScript 中的位置和尺寸
==============================

event
-----

###clientX|clientY

事件发生点距浏览器窗口内容区域左/上边缘的距离

###offsetX|offsetY

事件发生点距事件所在元素左/上边缘的距离

###screenX|screenY

事件发生点距显示器可视区域左/上边缘的距离

element
-------

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

window
------

###innerheight|innerwidth

###outerheight|outerwidth

###pageXOffset|pageYOffset

###screenLeft|screenTop|screenX|screenY

screen
------

###availHeight|availWidth

###deviceXDPI|deviceYDPI

###localXDPI|localYDPI

###height|width