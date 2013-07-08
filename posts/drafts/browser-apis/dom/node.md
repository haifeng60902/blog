Node 对象
========

`Node` 对象代表了 DOM 中的节点，也是所有 DOM 元素的父类。

属性
----

###attributes

返回包含节点所有属性的数组。

###childNodes

返回节点中包含所有元素子节点和文本子节点的列表。

###firstChild

返回节点的首个子节点。

###lastChild

返回节点的最后一个子节点。

###nextSibling

返回相邻的下一个兄弟节点。

###nodeName

节点名称。

节点名称的规则：

+ 元素节点以大写的标签名作为节点名称
+ 属性节点以属性名作为节点名称
+ 文本节点以 #text 作为节点名称
+ 文档节点以 #document 作为节点名称

###nodeValue

节点的值。

节点值得规则：

+ 文本节点的值为节点包含的文本
+ 属性节点的值为属性值
+ 文档节点和元素节点没有 nodeValue 属性（undefined）

###nodeType

节点类型。

节点类型列表：

+ 1 元素节点
+ 2 属性节点
+ 3 文本节点
+ 8 注释节点
+ 9 文档节点

###ownerDocument

返回创建当前节点的 document 对象。

###parentNode

返回当前节点的父节点。

###previousSibling

返回相邻的上一个兄弟节点。

###textContent/innerText [<=IE8]

设置或返回包含在节点中的文本。

方法
----

###addEventListener()

为对象绑定事件监听函数。

语法：
>elmt.addEventListener("event",func,useCapture);

参数：
>1.event 事件名称  
>2.func 事件处理程序  
>3.useCapture bool ??

事件处理程序可调用的参数：
>1.event Event 事件对象  
>2.this 事件源对象

####attachEvent() IE<=8

语法：
>elmt.attachEvent("event",func);

###removeEventListener()

取消事件监听。

语法：
>elmt.removeEventListener("event",func,useCapture);

####detachEvent() IE<=8

语法：
>elmt.detachEvent("event",func);

###dispatchEvent()

触发当前对象的指定事件。

语法：
>obj.dispatchEvent("event");

####fireEvent() IE<=8

###appendChild()

插入子节点。

语法：
>node.addendChild(childNode);

返回值：
>child 新插入的子节点

###cloneNode()

复制节点。

语法：
>node.cloneNode(cloneChild);

参数：
>cloneChild 是否克隆子节点

返回值：
>clone node 节点的副本

###compareDocumentPosition()

比较两个节点的位置关系。

语法：
>node.compareDocumentPosition(targetNode);

返回值：
>1.DOCUMENT_POSITION_DISCONNECTED/1 两个节点不相关  
>2.DOCUMENT_POSITION_PRECEDING/2 目标节点在当前节点之前  
>3.DOCUMENT_POSITION_FOLLOWING/4 目标节点在当前节点之后  
>4.DOCUMENT_POSITION_CONTAINS/8 目标节点包含在当前节点中  
>5.DOCUMENT_POSITION_CONTAINED_BY/16 当前节点包含在目标节点中  
>6.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC/32 两个节点的关系无法比较

###hasAttribute()

检测节点是否包含指定的属性。

语法：
>node.hasAttribute("attr");

参数：
>attr 属性名

返回值：
>1.true 包含指定属性  
>2.false 不包含指定属性

###hasAttributes()

检测节点是否包含属性。

语法：
>node.hasAttributes();

返回值：
>1.true 包含至少一个属性  
>2.false 不包含任何属性

###hasChildNodes()

检测节点是否包含子节点。

语法：
>node.hasChildNodes();

返回值：
>1.true 包含至少一个子节点  
>2.false 不包含任何子节点

###insertBefore()

将目标节点作为当前节点的子节点，并插入到指定节点之前。

语法：
>node.insertBefore(newNode,targetBefore);

参数：
>1.newNode 要插入的新节点  
>2.targetBefore 插入目标位置的节点

返回值：
>child 插入的新节点

###isEqualNode()

检测两个节点是否同类型并同名。

语法：
>node.isEqualNode(anotherNode);

检测的属性包括：

+ nodeType
+ nodeName
+ localName
+ namespaceURI

返回值：
>1.true 两个节点相同  
>2.false 两个节点不同

###isSameNode()

检测两个节点是否为同一个节点。

###removeChild()/removeNode()

删除指定的子节点。

语法：
>node.removeChild(childNode);

返回值：
>child 被删除的节点

###replaceChild()/replaceNode()

替换指定的子节点。

语法：
>node.replaceChild(newChild,oldChild);

返回值：
>old 被替换的节点