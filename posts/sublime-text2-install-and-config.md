Sublime Text2 安装配置
==================

文本编辑器是最常用的工具软件，也是广大 coder 最爱讨论的话题之一。一个适合 coder 的文本编辑器，一般有以下特征：

+ 语法高亮
+ 多标签
+ 扩展/插件支持
+ 高度可配置
+ 代码自动补全
+ 丰富的快捷键并可自定义
+ ...

Windows 平台中，Notepad++ 是入门首选；gEdit 则是 Linux 中值得推荐的一款。

Sublime Text2 几乎拥有了一款文本编辑器该有的所有功能，其特色功能有：

+ 免费且无限期的试用
+ 多平台支持（Win/Max/Linux）
+ 代码高亮/皮肤自定义
+ 代码地图（Minimap）
+ 分栏布局
+ 即时保存/状态恢复
+ 多行编辑
+ 文件/行跳转
+ 命令支持
+ ...

下载安装
-------

官方网站：<http://www.sublimetext.com/>

目前的稳定版为 2.0.2，Sublime Text3 目前仍是 beta 版（Build 3047）。建议下载 2.0.2 版。

Windows 版本可以下载安装包安装，或者下载便携版，解压缩即可。Linux 版本只有便携版可用。

配置
----

###用户配置

执行 Preferences-->Settings-User，打开用户配置文件。

用户配置为 JSON 格式，具体的参数及参数值可参考 Settings-Default（默认配置， __请勿修改__ ）。可以在其中使用单行注释（"//"）或多行注释（"/**/"）。

需要自定义任何参数时，只需要在用户配置文件中添加该属性，并设置自定义的值即可。下面给出的示例列出了几个常用的配置参数：

	{
		// 字体
		"font_face": "Monaco",
		// 高亮当前行
		"highlight_line": true,
		// 自动换行
		"word_wrap": true
	}

###快捷键配置

执行 Preferences-->Key Bindings-User，打开快捷键配置文件。

快捷键配置的参数及参数值可参考 Key Bindings-Default（默认快捷键配置， __请勿修改__ ）。

###语法高亮配置

执行 Preferences-->Color Scheme，可以选择适合自己的配色方案。

如果需要自定义配色方案，可以到：
>C:\Users\***\AppData\Roaming\Sublime Text 2\Packages\Color Scheme - Default （Win 安装版）

中复制已有的方案，然后进行自定义。

插件管理
-------

支持插件，是 Submlime Text 的特色之一。我们通常借助 [Sublime Package Control](http://wbond.net/sublime_packages/package_control) 这个插件来安装/管理其他插件。

###安装Package Control

1.使用快捷键 `Ctrl+`` 或执行 View-->Show Console 开启控制台；

2.粘贴下面的代码：

	import urllib2,os; pf='Package Control.sublime-package'; ipp=sublime.installed_packages_path(); os.makedirs(ipp) if not os.path.exists(ipp) else None; urllib2.install_opener(urllib2.build_opener(urllib2.ProxyHandler())); open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read()); print('Please restart Sublime Text to finish installation')

3.等到出现如下的提示：
>Please restart Sublime Text to finish installation

重新启动 Sublime。

###插件管理

####安装插件

我们试着用 Package Control 安装 Emmet（原 Zen Coding，HTML/CSS 编写辅助工具）插件：

1. 使用快捷键 `Ctrl+Shift+P` 启动 Package Control；
2. 在命令窗口输入 `install package`，点击回车；
3. 输入 `emmet`，点击回车；
4. 安装完成后，会打开名为 `Package Control Messages` 的文件。

####卸载插件

1. 启动 Package Control，输入 `remove package`，点击回车；
2. 从给出的插件列表中选择插件（或输入插件名称），点击回车；
3. 卸载完成后，状态栏会给出短暂的提示。

Package Control 的作者提供了一份 Sublime Text 的插件列表，目前包含 1395 个插件：
><http://wbond.net/sublime_packages/community>

###主题管理

我们前面提到，Sublime Text 是支持自定义主题的。如果你觉得默认的主题不够漂亮，下面一定会有一个你喜欢的：

+ [Sublime Text 2 (ST2) Themes in Pictures](http://theneum.com/sublime-text-2-st2-themes-in-pictures/)
+ [Nil Theme](https://github.com/nilium/st2-nil-theme)
+ [Flatland](https://github.com/thinkpixellab/flatland)
+ [Aqua Theme](https://github.com/cafarm/aqua-theme)
+ [Soda Theme](http://buymeasoda.github.io/soda-theme/)

####安装 Theme Soda

Theme Soda 是一款非常受大家喜欢的主题，它比默认的主题更加细腻与和谐。

1. 启动 Package Control，输入 `install package`，点击回车；
2. 输入 `theme-soda`，点击回车；
3. 安装完毕后，状态栏会给出短暂的提示；
4. 打开用户配置文件，添加如下参数：

>"theme": "Soda Dark.sublime-theme"

然后重新启动 Sublime Text 即可。

为了让界面更和谐，建议隐藏菜单栏。