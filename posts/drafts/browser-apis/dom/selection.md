Selection
========

`Selection` 对象代表了当前页面中被选中的文本，可通过 getSelection() 方法获取该对象：

	var se=window.getSelection();
	var se=document.getSelection();

属性
----

###anchorNode/baseNode

选择起点所在的节点/元素。

###anchorOffset/baseOffset

选择起点相对于其所在的节点/元素的位置。

###focusNode/extentNode

选择终点所在的节点/元素。

###focusOffset/extentOffset

选择终点相对于其所在的节点/元素的位置。

###isCollapsed

选择起点与终点是否重合（未选择任何内容）。

###rangeCount

选择范围总数（1：已选择；0：未选择）。

###type

已选择的类型（"Range"：范围(已选择)；"Caret"：插入光标(未选择)）。

###

方法
----

###getRangeAt()

获取指定位置的 Range 对象。

语法：
>selection.getRangeAt(index);

参数：
>index Range 的索引

返回值：
>Range 对象

###collapse()

将 Selection 对象折叠为插入点（不修改文档内容）。

语法：
>selection.collapse(parentNode, offset);

参数：
>parentNode 折叠后光标所在的元素  
>offset 0：光标位于元素文本的开头；1：光标位于元素文本的末尾

###extend()

将 Selection 对象的焦点移动到指定元素的指定位置。

语法：
>selection.extend(parentNode, offset);

参数：
>parentNode 目标元素  
>offset 目标位置

###modify()

修改 Selection 对象选择的内容。

语法：
>selection.modify(alter, direction, granularity);

参数：
>alter 修改类型（"move"：移动；"extend"：扩展）  
>direction 修改进行的方向。可指定的值：  
>>forward 向前（根据语言的方向）  
>>backward 向后（根据语言的方向）  
>>left 向左  
>>right 向右

>granularity 指定修改的间隔。可指定的值：
>>character 按字符  
>>word 按单词  
>>sentence 按句子  
>>line 按行  
>>paragraph 按段落  
>>lineboundary 行边界  
>>sentenceboundary 句边界  
>>paragraphboundary 段落边界  
>>documentboundary 文档边界

###collapseToStart()

将光标定位到 Selection 对象首个 Range 的起点。

语法：
>selection.collapseToStart();

###collapseToEnd()

将光标定位到 Selection 对象最后一个个 Range 的终点。

语法：
>selection.collapseToEnd();

###selectAllChildren()

选中指定元素的所有子元素（之前选中的内容会被丢弃）。

语法：
>selection.selectAllChildren(parentNode);

###addRange()

将 Range 添加到 Selection 对象。

语法：
>selection.addRange(range);

###removeRange()

从 Selection 对象中移除指定的 Range 对象。

语法：
>selection.removeRange(range)

###removeAllRanges()

从 Selection 对象中移除所有的 Range 对象。

语法：
>selection.removeAllRanges();

###deleteFromDocument()

从文档中删除选中的内容。

语法：
>selection.deleteFromDocument();

###toString()

获取选中的文本内容。

语法：
>selection.toString();

###containsNode(aNode, aPartlyContained)

检测指定元素知否包含（或部分包含）在 Selection 对象中。

语法：
>selection.containsNode(aNode, aPartlyContained);

参数：
>aNode 要检测的元素  
>aPartlyContained 是否检测部分包含（true：检测部分包含；false：检测完全包含）

返回值：
>true 包含/部分包含  
>false 不包含/完全包含
