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

Audio对象
----------

参考：[HTMLMediaElement](https://developer.mozilla.org/zh-CN/docs/DOM/HTMLMediaElement "HTMLMediaElement")

###属性

1.src

记录了音频文件的URL。

	var src=audio.src; // 读取URL
	audio.src="music.mp3"; // 修改URL

2.currentTime

记录了当前播放时间（单位：秒）。

	var time=audio.currentTime; // 读取当前时间
	audio.currentTime=30; // 设置当前时间为30秒

3.volume

记录了音频的音量（范围：0.0-1.0）。

	var volume=audio.volume; // 读取音量
	audio.volume+=0.1; // 增大音量
	


###方法

1.play()

开始播放。

	audio.play(); // 开始播放

2.pause()

暂停播放。

	audio.pause(); // 暂停播放