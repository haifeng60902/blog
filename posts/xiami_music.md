虾米音乐探索
===========

本文主要探索了如何下载虾米在线试听的 96K mp3 音乐。单纯讨论技术，不提供任何辅助工具，不作恶。

万恶之源
-------

以前听音乐、下音乐，通常借助 Google，后来 Google 音乐没了。后来百度 ting，然后百度音乐，可惜服务太差。然后一直在用虾米，非常可口，收藏了近 500 首音乐。一冲动，把本地保存的几百首音乐都删除了，然后过上了在线听音乐的生活。可是，在线需要网络，没网的时候很煎熬。虽然有媒体探测插件，可以探测到在线播放的源文件，然后手动下载、修改文件名。但在 500 首歌面前，这种手段很吃力。So，写个程序吧，喝杯茶的功夫就能搞定。

分析
----

###已有数据

首先，打开收藏列表，找到一首收藏的音乐，详细列出可以找到的数据：

	歌曲名：桜の木になろう
	演唱者：AKB48
	专辑：桜の木になろう
	歌曲页面：http://www.xiami.com/song/1769982588
	歌手页面：http://www.xiami.com/artist/57447
	专辑页面：http://www.xiami.com/album/421171
	播放器页面：http://www.xiami.com/song/play?ids=/song/playlist/id/1769982588/object_name/default/object_id/0
	音乐源文件：http://f3.xiami.net/57447/421171/01%201769982588_1991960.mp3

音乐源文件地址可通过 Firefox 的 NetVideoHunter 获得，也可通过开发工具的网络连接分析获得。

###方法一

通过分析，可以得到如下有用的数据：

	歌曲ID：1769982588
	歌手ID：57447
	专辑ID：421171
	音乐源文件 URL 格式：http://f3.xiami.net/[artist_id]/[album_id]/01 [song_id]_1991960.mp3

分析了若干个样本之后发现音乐源文件的 URL 存在如下问题：

1. 01 1991960 两个字符串无法对应到已知的参数
2. 存在多个域名
3. 多个域名下的 URL 格式不同

所以得出结论：无法通过歌曲 ID 反向定位音乐文件的 URL。

###方法二

几乎所有的音视频网站都使用 Flash 插件播放媒体文件，因为 Flash 播放器不直接将源文件的 URL 暴露出来。但要使用 Flash 播放文件，就必然需要向其传递可用的参数，用来定位源文件。

查看播放器源码中的 Flash 播放器参数部分，如下的参数比较可疑：

	<param name="FlashVars" value="dataUrl=/song/playlist/id/1769982588/object_name/default/object_id/0&amp;autoplay=1&amp;btnStatus=1|1|1|0&amp;bfMax=120&amp;srNum=120">

dataUrl 参数中的 URL 部分和该播放器页面的 URL 相同，所以试着打开该地址：

	http://www.xiami.com/song/playlist/id/1769982588/object_name/default/object_id/0

获得了一个 XML 文件，内容如下：

	<?xml version="1.0" encoding="utf-8"?>
	<playlist version="1" xmlns="http://xspf.org/ns/0/">
	<trackList>
		<track>
			<title><![CDATA[桜の木になろう]]></title>
			<song_id>1769982588</song_id>
			<album_id>421171</album_id>
			<album_name><![CDATA[桜の木になろう]]></album_name>
			<object_id>1</object_id>
			<object_name>default</object_name>
			<insert_type>1</insert_type>
			<background>http://img.xiami.com/res/player/bimg/bg-4.jpg</background>
			<grade>1</grade>
			<artist><![CDATA[AKB48]]></artist>
			<location>6hAFat44%159_6pt%fm%422%E81%3t23i271F21295pF..F%1%5759E%%xn52752681.32ie7F1E%989m</location>
			<ms></ms>
			<lyric>http://img.xiami.com/./lyric/upload/88/1769982588_1299898697.lrc</lyric>
			<pic>http://img.xiami.com/images/album/img47/57447/4211711295492738_1.jpg</pic>
		</track>
	</trackList>
	<uid>3842189</uid>
	<type>default</type>
	<type_id>1</type_id>
	<clearlist></clearlist>
	</playlist>

结构很简单，内容显而易见，列个表出来：

	title 歌曲名
	song_id 歌曲ID
	album_id 专辑ID
	album_name 专辑名
	artist 歌手名
	location 歌曲源文件 URL
	lyric 歌词文件 URL
	pic 专辑封面 URL
	
	tracklist 歌曲信息列表
	track 一首歌曲的信息
	uid 我的账户ID

几乎所有信息都是明文的，只有代表歌曲源文件 URL 的 location 是加密的。对于解密，我不拿手，不过网上已经有解密方法了，我们跟着试一试。

可以得出结论：如果 URL 地址解密成功，那么该方法就可行。

解析 URL
-------

我们已经分别得到这首歌的实际 URL 和加过密的 URL：

	http://f3.xiami.net/57447/421171/01%201769982588_1991960.mp3
	6hAFat44%159_6pt%fm%422%E81%3t23i271F21295pF..F%1%5759E%%xn52752681.32ie7F1E%989m

两个地址中都有 % ，是因为进行了 URL encode。对两个 URL 进行 decode：

	http://f3.xiami.net/57447/421171/01 1769982588_1991960.mp3
	乱码

URL2 产生了乱码，通过观察，它的格式有问题，无法进行 decode，我们试着用脑袋分析一下这段加密的 URL，并和实际的 URL 作对比：

1. 两个 URL 都有三个点、两个 m、一个 h、三个 t、两个 p、（剩下的都能够对起来）……
2. URL2 中的大写字母应该是 URL encode 之后产生的

有了这个数据，应该能够明白：URL2 是在 URL1 encode 之后做了乱序处理。所以，我们再来冷静的分析一下，这个乱序的方法是什么：

URL encode 会编码特殊字符，同时考虑到 URL2 中包含大写字母，所以猜测编码后全部使用大写字母表示：

	: %3A
	/ %2F
	空格 +

先按此规则，将 URL1 进行 encode：

	http%3A%2F%2Ff3.xiami.net%2F57447%2F421171%2F01+1769982588_1991960.mp3

依次从 URL2 中找出对应的位置：

	6hAFa t44%1 1
	59_6p t%fm% 2
	422%E 81%3t 3
	23i27 1F212 4
	95pF. .F%1% 5
	5759E %%xn5 6
	27526 81.32 7
	ie7F1 E%989 8
	m 9
	
	h 2
	t 6,16,30
	t 6,16,30
	p 15,43
	% 9,17,20,24,28,48,50,56,57,72
	3 29,32,69
	A 3
	% 9,17,20,24,28,48,50,56,57,72
	2 22,23,31,34,38,40,61,64,70
	F 4,36,44,46,74
	% 9,17,20,24,28,48,50,56,57,72
	2 22,23,31,34,38,40,61,64,70
	F 4,36,47,54,74
	f 18
	3 29,32,69
	. 45,46,68
	x 58
	i 71

寻找到了其中的规律：

	h 2   A 3   F 4
	t 16  % 17  f 18
	t 30  2 31  3 32
	p 43  F 44  . 45
	% 56  % 57  x 58
	3 69  2 70  i 71

将 URL2 an规律所示的矩阵排列：

	6
	hAFat44%159_6p
	t%fm%422%E81%3
	t23i271F21295
	pF..F%1%5759E
	%%xn52752681.
	32ie7F1E%989m

首行的 6 应该代表矩阵的行数，2 3 两行都是 14 个字符，其余四行均为 13 个。按这种方式从上到下、从左到右去除矩阵中的元素，恰好是 URL1 encode 的结果：

	http%3A%2F%2Ff3.xiami.net%2F57447%2F421171%2F01+1769982588_1991960.mp3

再讲此 URL decode，即可获得与 URL1 相同的地址，也就是音乐源文件的 URL。

解密结束。

由此得出结论：只要取得音乐文件对应 xml 中的 location 字符串，就可以反向获取 mp3 文件的链接。

获取 mp3 源文件
--------------