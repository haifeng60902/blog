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

Audio对象
----------

参考：[HTMLMediaElement](https://developer.mozilla.org/zh-CN/docs/DOM/HTMLMediaElement "HTMLMediaElement")
[MediaElement](http://www.w3.org/TR/2012/CR-html5-20121217/embedded-content-0.html#media-element "media-element")

###属性

1.src

音频文件的URL。

	var src=audio.src; // 读取URL
	audio.src="music.mp3"; // 修改URL

2.currentTime

当前播放时间（单位：秒）。

	var time=audio.currentTime; // 读取当前时间
	audio.currentTime=30; // 设置当前时间为30秒

3.volume

音频的音量（范围：0.0-1.0）。

	var volume=audio.volume; // 读取音量
	audio.volume+=0.1; // 增大音量
	
4.autoplay

音频是否自动播放（true/false）。

	var autoplay=audio.autoplay; // 读取自动播放状态
	audio.autoplay=true; // 设置音频自动播放

5.controls

是否显示播放控件（true/false）。

6.defaultMuted

是否默认静音（true/false）。

7.defaultPlaybackRate

默认播放速度（>0.0~1.0-...）。

8.duration

音频时长（只读，单位：秒）。

9.ended

是否播放完毕（只读，true/false）。

10.initialTime

可播放的起始时间（只读，单位：秒）。

11.loop

是否循环播放（true/false）。

12.muted

是否静音（true/false）。

13.networkState

网络状态。

NETWORK_EMPTY/0 未加载文件
NETWORK_IDLE/1 网络空闲
NETWORK_LOADING/2 正在加载文件
NETWORK_NO_SOURCE/3 资源不可用【？】

14.paused

是否暂停（只读，true/false）。

15.playbackRate

播放速度。

FF中，范围是 0.25~5.0。  
Chrome中，范围是 0.5~4.0。

16.played

已播放时间范围（只读）。

timeRanges

17.preload

预加载方式（none/metadata/auto）。

18.readyState

媒体状态（只读）。

HAVE_NOTHING/0 不可用
HAVE_METADATA/1 媒体信息可用
HAVE_CURRENT_DATA/2 已加载当前播放数据
HAVE_FUTURE_DATA/3 已加载未来播放数据
HAVE_ENOUGH_DATA/4 数据充足

19.seekable

用户可选播放范围。

TimeRanges 包含多个时间段的数组。
timeRanges.length 数组长度
timeRanges.start(i) 时间段i的起始时间
timeRanges.end(i) 时间段i的终止时间

20.seeking

是否正在选择播放位置（拖动滑块）。

21.buffered

已加载的时间段（timeRanges）。

###方法

1.play()

开始播放。

	audio.play(); // 开始播放

2.pause()

暂停播放。

	audio.pause(); // 暂停播放

3.load()

开始加载数据。

4.canPlayType(DOMString)

return:
>1. probably 可播放
>2. maybe 可能可播放
>3. [empty] 不可播放

###事件

