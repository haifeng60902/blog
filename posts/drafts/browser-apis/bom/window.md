Window 对象
=========

`window` 对象代表了一个浏览器窗口（标签）或一个嵌入到页面中的框架（iframe）。

参考：[WebPlatform/dom/window](http://docs.webplatform.org/wiki/dom/window "dom/window")

属性
---

###applicationCache

返回 ApplicationCache 对象的引用。

###frames

以数组形式返回页面中的所有框架。

###closed

窗口是否被关闭。

属性值：
>1.true 已关闭  
>2.false 未关闭

###console

返回 Console 对象的引用。

###defalutStatus

读取或设置状态栏文本。

###document

返回 Document 对象的只读引用。

###frameElement

获取当前框架窗口的 frame 引用。

###hidden

获取窗口是否隐藏。

###history

返回 History 对象的只读引用。

###indexedDB

获取 IDBFactory 对象的引用。

###innerHeight

返回窗口文档显示区的高度，单位为像素。

###innerWidth

返回窗口文档显示区的宽度，单位为像素。

注：innerHeight 和 innerWidth 不包含菜单栏、工具栏及滚动条的尺寸。

###length

获取窗口中的框架数量。

###location

返回 Location 对象的引用。

###localStorage

获取 LocalStorage 对象的引用。

###maxConnectionsPerServer

获取浏览器与每个服务器之间的最大连接数。

###name

设置或返回窗口标题。

###navigator

返回 Navigator 对象的只读引用。

###offscreenBuffering

设置或获取是否屏幕外渲染。

###opener

返回创建当前窗口的父窗口的引用。

###outerHeight

返回窗口的外边缘高度。

###outerWidth

返回窗口的外边缘宽度。

###pageXOffset

设置或返回当前页面左侧距离文档显示区左侧的距离。

###pageYOffset

设置或返回当前页面顶部距文档显示区顶部的距离。

###parent

返回父窗口的引用。

###screen

返回 Screen 对象的只读引用。

###self

返回当前窗口的引用，相当于 window。

###status

设置或读取状态栏的文本信息。

###top

返回最顶层父窗口的引用。

###screenLeft/screenX

返回窗口左边缘距显示器左边缘的距离。

###screenTop/screenY

返回窗口上边缘距显示器上边缘的距离。

###XMLHttpRequest

获取 XMLHttpRequest 对象的引用。

方法
===

###alert()

弹出警告对话框。

语法：
>window.alert("msg");

参数：
>1.msg 警告信息，支持转义字符

弹出的警告对话框中会显示警告信息，窗口底部有一个[确定]按钮。

###blur()

取消当前窗口的焦点。

语法：
>window.blur();

###clearInterval()

取消定时器。

语法：
>window.clearInterval(interval_id);

参数：
>1.interval_id setInterval() 方法返回的定时器 ID

###clearTimeout()

取消计时器。

语法：
>window.clearTimeout(timeout_id);

参数：
>1.timeout_id setTimeout() 方法返回的计时器 ID

###close()

关闭当前窗口。

语法：
>window.close();

###confirm()

弹出确认对话框。

语法：
>window.confirm("msg");

参数：
>1.msg 提示信息，支持转义字符

弹出的确认对话框中会显示提示信息，窗口底部有[确定]和[取消]按钮。

返回值：
>1.true 用户点击了[确定]按钮  
>2.false 用户点击了[取消]按钮

###focus()

使当前窗口获取焦点。

语法：
>window.focus();

###getComputedStyle()

获取对象或伪对象的 CSSStyleDeclaration 属性。

语法：
>window.getComputedStyle(elmt,pseudoName);

参数：
>1.elmt 目标对象  
>2.pseudoName 伪元素（可选）

返回值：
>1.CSSStyleDeclaration 对象

###getSelection()

获取当前的 HTMLSelection 对象。

###item()

取得对象中指定的子对象。

语法：
>obj.item(name,index);

参数：
>1.name name/id 属性值或索引值（从 0 开始）  
>2.index 索引值

###matchMedia()

获取 MediaQueryList 对象。

语法：
>obj.matchMedia();

###moveBy()

根据指定的偏移量移动窗口。

语法：
>window.moveBy(x,y);

参数：
>1.x 横向移动距离（向右为正）  
>2.y 纵向移动距离（向下为正）

###moveTo()

将窗口移动到指定位置。

语法：
>window.moveTo(x,y);

参数：
>1.x 目标点横坐标  
>2.y 目标点纵坐标

###open()

打开新的窗口，或修改已存在的窗口。

语法：
>window.open(url,name,features,replace);

参数：
>1.url 要在新窗口中载入的 URL  
>2.name 新窗口的名称（标识符）  
>3.features 新窗口特征列表（参考下面的列表，多个值之间使用 `,` 分隔）  
>4.replace 是否替换窗口的历史记录条目（true：替换历史记录；false：新建历史记录）

####窗口特征列表

channelmode ??
>yes/1 启用  
>no/0 关闭

directories ??
>yes/1 启用  
>no/0 关闭

fullscreen ??
>yes/1 启用  
>no/0 关闭

height 文档显示区高度
>px 像素值

width 文档显示区宽度
>px 像素值

left 窗口 x 坐标
>px 像素值

top 窗口 y 坐标
>px 像素值

location ??
>yes/1 启用  
>no/0 关闭

menubar ??
>yes/1 启用  
>no/0 关闭

resizable ??
>yes/1 启用  
>no/0 关闭

scrollbars ??
>yes/1 启用  
>no/0 关闭

status ??
>yes/1 启用  
>no/0 关闭

titlebar ??
>yes/1 启用  
>no/0 关闭

toolbar ??
>yes/1 启用  
>no/0 关闭

####实际表现（Chrome 27）：

新建标签：
>window.open();  
>window.open("","id");

新标签中打开页面：
>window.open("http://www.w3school.com.cn");  
>window.open("http://www.w3school.com.cn"，"id");  
>window.open("http://www.w3school.com.cn"，"id","");

打开新窗口，应用位置和尺寸属性：
>window.open("http://www.w3school.com.cn","id","left=100,top=100,width=400,height=400");

其他属性无效。

###print()

打印当前页面（等同于执行浏览器的打印功能）。

语法：
>window.print();

###prompt()

显示输入对话框。

语法：
>window.prompt(text,default);

参数：
>1.text 提示信息，支持转义字符  
>2.default 默认文本

弹出的输入对话框中会显示提示信息，窗口中间有一个文本框，底部有[确定]和[取消]按钮。

返回值：
>1.文本框中的文本 用户点击了[确定]按钮  
>2.null 用户点击了[取消]按钮

###resizeBy()

根据指定的像素调节窗口大小。

语法：
>window.resizeBy(x,y);

参数：
>1.x 窗口宽度变化值  
>2.y 窗口高度变化值

x、y 为像素数。当其值 >0 时，窗口增大；< 0 时，窗口缩小。

###resizeTo()

调节窗口大小到指定的尺寸。

语法：
>window.resizeTo(x,y);

参数：
>1.x 窗口宽度  
>2.y 窗口高度

###scrollBy()

滚动当前页面。

语法：
>window.scrollBy(x,y);

参数：
>1.x 横向滚动距离（向右为正）  
>2.y 纵向滚动距离（向下为正）

###scrollTo()/scroll()

滚动当前页面到指定位置。

语法：
>window.scrollTo(x,y);

参数：
>1.x 目标位置横坐标  
>2.y 目标位置纵坐标 

###setInterval()

定义定时器。

语法：
>window.setInterval("func",millisec);

参数：
>1.func 定时调用的函数名称（字符串格式）  
>2.millisec 定时器周期（毫秒）

func 函数会在设定的时间间隔后被 __重复执行__ ，直到使用 clearInterval(interval_id) 清除了该定时器。

返回值：
>interval_id 定时器的 ID

###setTimeout()

定义计时器。

语法：
>window.setTimeout("func",millisec);

参数：
>1.func 延迟调用的函数名称（字符串格式）  
>2.millisec 计时器时长（毫秒）

func 函数会在设定的时间后被 __执行一次__ ，可以使用 clearTimeout(timeout_id) 清除该计时器。

返回值：
>timeout_id 计时器的 ID