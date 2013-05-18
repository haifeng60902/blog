内容生成(content)
================

content

与 :before 和 :after 伪元素配合，用于插入内容。

	elmt:before{
		content:"abc";
		...
	}

属性值：

1. "string" 插入的文本
2. url("url") 插入的文件
3. attr(attr) 获取并插入 elmt 的 attr 属性值
4. counter(counter) 获取并插入计数器 counter 的值

使用 content 插入内容后，还可以继续为插入的内容添加样式：

	elmt:before{
		content:"abc";
		color:blue;
		...
	}

counter-reset

创建或重置计数器。

属性值：

1. none 不重置计数器
2. counter n 定义计数器 counter 并指定初始值 n（可选，默认为 0）

counter-increment

设置计数器的增量。

属性值：

1. none 无计数器增量（默认）
2. counter n 设置计数器 counter 的增量为 n（正数、负数或 0。可选，默认为 1）