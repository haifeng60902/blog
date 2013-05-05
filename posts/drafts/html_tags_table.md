表格元素
=======

表格在网页中经常用来呈现数据。

	<table border="1">
		<tr>
			<th>cell1</th>
			<th>cell2</th>
		</tr>
		<tr>
			<td>cell3</td>
			<td>cell4</td>
		</tr>
	</table>

标签
----

###1.table

`<table>` 元素用于定义表格。

属性：

1. border

用于指定表格的边框。

属性值：
>"" 无边框
>1 边框宽度为 1px

###2.thead

`<thead>` 元素用于定义表格的表头区域，该元素在 `<table>` 中是可选的。

`<thead>` 元素中需要嵌套 `<tr>` `<th>` 或 `<td>` 元素来定义内容。

###3.tfoot

`<tfoot>` 元素用于定义表格的脚注区域，该元素在 `<table>` 中是可选的。

该元素使用方法与 `<thead>` 相同。

###4.tbody

`<tbody>` 元素用于定义表格的主体区域，该元素在 `<table>` 中是可选的。

该元素使用方法与 `<thead>` 相同。

__注意：__ 如果需要在 `<table>` 中使用以上三个元素，其顺序必须为 `<thead>` `<tfoot>` `<tbody>` 。

###5.tr

`<tr>` 元素用于定义表格的行，可以嵌套在上面任意一个元素中使用。

###6.td

`<td>` 元素用于定义表格的单元格，需要嵌套在 `<tr>` 元素中使用。

###7.th

`<th>` 元素类似于 `<td>` 元素，主要用来定义表头部分的单元格。

该元素中的文本默认会加粗显示。如果需要将非表头部分单元格中的文本加粗显示，__请使用 CSS__ 。

caption col colgroup table tbody td tfoot th thead tr