Document 对象
===========

`document` 对象代表了整个 HTML 文档（HTML 元素）。

属性
----

activeElement

返回当前获取焦点的对象。

anchors

以数组形式返回页面中的锚。

body

返回 body 节点。

characterSet

返回页面的字符集。

cookie

以分号分隔列表的形式返回所有 cookie，也可以通过 cookie="key1=value1;key2=value2" 设置 cookie 值。

defaultView

返回当前文档所在的 window 对象的引用。

designMode

设置或返回页面内容是否可编辑。

doctype

返回 DTD。

documentElement

返回 html 节点。

embeds

以数组形式返回 embed 对象列表。

forms

以数组形式返回 form 对象列表。

head

返回 head 节点。

images

以数组形式返回 image 对象列表。

lastModified

返回文档的最后修改时间。

links

以数组形式返回 link 对象列表。

plugins

以数组形式返回 plugin 对象列表。

readyState

返回文档当前状态（loading 加载中；interactive 解析完成；complete 加载完毕）。

referrer

返回跳转到当前页面的前一个页面的 URI。

scripts

以数组形式返回 script 对象列表。

styleSheets

以数组形式返回 styleSheet 对象列表。

title

返回页面的 title 值。