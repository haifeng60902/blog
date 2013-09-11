audio 标签
=======

`<audio>` 元素用于向页面中添加音频。

	<audio src="music.mp3" controls="controls"></audio>
	
也可以通过在 `<audio>` 元素中嵌套一个或多个 `<source>` 元素，来指定音乐文件。使用该方法时，`<audio>` 元素的 `src` 属性被忽略。【待证实】

	<audio controls="controls">
		<source src="music.mp3" type="audio/mp3" />
		<source src="music.ogg" type="audio/ogg" />
	</audio>

属性
----

###1.autoplay

指定音频在页面加载完成后自动开始播放。

属性值：
>1. autoplay

###2.controls

指定显示播放控件，一般包含播放/暂停按钮、进度条、播放时间、音量调节滑块等控件。

属性值：
>1. controls

###3.loop

指定音频循环播放。

属性值：
>1. loop

###4.preload

指定在页面加载完成后如何下载音频文件。若已经指定 `autoplay`，则忽略本属性。

属性值：
>1. auto 加载全部内容
>2. metadata 仅加载元数据（音频信息）
>3. none 不加载

###5.src

指定音频文件的URL。

###6.muted

指定静音。

属性值：
>1. muted