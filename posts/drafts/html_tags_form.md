表单元素
=======

表单主要用来向服务器输入和提交各种数据，主要包括文本输入区域，单选、复选按钮，列表，时间日期组件等。

标签
----

###1.form

参考：tag_form

###2.fieldset

用于对表单元素进行分组，可用 `<legend>` 元素为其添加标题。（`<fieldset>` 元素会在分组周围显示边框）

	<form>
		<fieldset>
			<legend>fieldset title</legend>
			...
		</fieldset>
	</form>

属性：

1.disabled

规定禁用当前分组内的所有表单元素。

属性值：
>1.disabled 禁用当前分组中的所有表单元素

2.form

指定所属的一个或多个表单。（通常将表单元素放置在 `<form>` 元素外部，并指定其 `form` 属性指定元素所属表单。所有表单元素均包含此属性和用法）

属性值：
>1.form_IDs 所属的表单 ID（多个 ID 之间使用 `,` 分隔）

3.name

###3.legend

`<legend>` 元素需要嵌入 `<fieldset>` `<figure>` 和 `<details>` 元素中使用，用于指定其标题。

###4.label

`<label>` 元素需要和其他表单元素搭配使用，用于为表单元素指定标签。

	<label for="name">User Name:</label>
	<input type="text" id="name" />

属性：

1.for

用于指定绑定的表单元素。

属性值：
>1.element_ID 绑定的表单元素的 ID

与表单元素绑定后，对 `<label>` 元素的操作会映射到绑定的表单元素上（如点击 `<label>` 中的文本，会选中/取消选中 `<input type="checkbox" />`）。

`<label>` 元素与绑定的表单元素的位置可以是任意的，不比相邻。

###5.textarea

用于定义表单中的多行文本输入区域。

属性：

1.autofocus

指定页面加载时，当前元素是否自动获取焦点。

属性值：
>1.true 自动获取焦点
>2.false 不自动获取焦点

2.cols

用于指定文本区可见列数。

属性值：
>1.n 可见的列数

3.disabled

4.form

5.inputmode

用于指定文本区的输入模式。

属性值：
>？？？

6.name

7.readonly

规定内容是否只读。

属性值：
>1.true 内容只读
>2.false 内容可编辑

8.required

规定内容是否可空。

属性值：
>1.true 内容不可空
>2.false 内容可空

9.rows

用于指定文本区可见行数。

属性值：
>1.n 可见的行数

###6.select

###7.option

###8.optgroup

###9.input

###10.button

###11.progress

###12.meter

###13.datalist



command keygen output