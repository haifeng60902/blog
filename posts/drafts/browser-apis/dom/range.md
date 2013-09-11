Range
=====

`Range` 对象代表了包含文本节点片段或其他节点的文档片段（范围）。

有三种方式获得 Range 对象：

	var range=document.createRange();
	var range=selection.getRangeAt(index);
	var range=new Range();

属性
----

###collapsed

范围的起点与终点是否重合（空，未包含任何内容）。

###commonAncestorContainer

获取文档中包含 Range.startContainer 和 Range.endContainer 节点的最深层节点（最小包含节点）。

###endContainer

范围终点所在的节点。

###endOffset

范围终点在 endContainer 节点中的位置。

###startContainer

范围起点所在的节点。

###startOffset

范围起点在 endContainer 节点中的位置。

方法
----

###setStart()

设置范围的起点。

语法：
>range.setStart(startNode, startOffset);

###setEnd()

设置范围的起点。

语法：
>range.setEnd(endNode, endOffset);

###setStartBefore()

设置范围起点在指定节点之前，目标节点与范围起点所在节点的父节点相同。

语法：
>range.setStartBefore(referenceNode);

参数：
>用作参考的节点

###setStartAfter()

设置范围起点在指定节点之后，目标节点与范围起点所在节点的父节点相同。

###setEndBefore()

设置范围终点在指定节点之前，目标节点与范围终点所在节点的父节点相同。

###setEndAfter()

设置范围终点在指定节点之后，目标节点与范围终点所在节点的父节点相同。

###selectNode()

设置范围包含指定节点，目标节点与范围起点/终点所在节点的父节点相同。

语法：
>range.selectNode(referenceNode);

###selectNodeContents()

设置范围包含指定节点的所有内容，目标节点就是范围起点/终点所在节点，startOffset 为 0，endOffset 为目标节点包含的字符数。

语法：
>range.selectNodeContents(referenceNode);

###collapse(toStart)

折叠范围，并将光标定位在范围起点/终点。

语法：
>range.collapse(toStart);

参数：
>toStart 是否将光标定位在起点（true：定位在起点；false：定位在终点(默认)）

###cloneContents()

以 DocumentFragment 对象的形式返回 Range 的内容。

###deleteContents()

从文档中删除 Range 包含的内容。

###extractContents()

从文档中删除 Range 包含的内容，以 DocumentFragment 对象的形式返回。

###insertNode()

将指定节点添加到范围的开始。如果目标节点将要插入到文本节点中，则该文本节点被分割成两部分。

语法：
>range.insertNode(newNode);

###surroundContents(newNode)

将 Range 的内容插入到指定节点中，并将目标节点放置在 Range 的起始位置。操作完成后，Range 将会包含目标节点。（如果 Range 中包含了非完整元素(被起点/终点截断)，则无法完成该操作）。

语法：
>range.surroundContents(newNode);

###compareBoundaryPoints()

比较指定范围与当前范围的起点/终点位置关系。

语法：
>range.compareBoundaryPoints(how, sourceRange);

参数：
>how 比较方式。可使用的参数：
>>Range.END_TO_END 比较二者的终点  
>>Range.END_TO_START 比较目标范围的终点与当前范围的起点  
>>Range.START_TO_END 比较目标范围的起点与当前范围的终点  
>>Range.START_TO_START 比较二者的起点

>sourceRange 目标范围

返回值：
>-1 之前  
>0 相同  
>1 之后

###cloneRange()

复制当前范围，返回其副本，而非引用。

###detach()

释放当前范围对象。

###toString()

返回当前范围内的文本。

###

###

###

###

###