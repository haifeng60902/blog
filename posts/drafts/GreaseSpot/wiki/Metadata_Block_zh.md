元数据
=====

内容
----

1. Description
2. Syntax
	1. @description
	2. @downloadURL
	3. @exclude
	4. @grant
	5. @icon
	6. @include
	7. @match
	8. @name
	9. @namespace
	10. @require
	11. @resource
	12. @run-at
	13. @unwrap
	14. @updateURL
	15. @version
3. Examples
4. Adding Resources
5. See Also
6. Notes

概述
----

元数据是 `用户脚本` 中用于描述该脚本的部分。其中通常包含脚本名称、命名空间、脚本描述，及包含、排除规则等信息。元数据使用 `JavaScript` 行注释编写，可以作为 `Greasemonkey` 脚本的顶级代码放在任意位置，不过通常放到文件的顶部。

如果元数据中包含 `Greasemonkey` 无法识别的关键词，该词语将被忽略。有些作者会使用自定义的关键词，`userscripts.org` 也定义了一系列不同用途的关键词。

在 `Greasemonkey` 0.9.0 中，当代码更新时，元数据会随之一起重新载入。在某些旧的版本中，需要重新安装脚本，使元数据被浏览其识别。在 0.9.0+ 中,用户可以随意修改元数据规则，如 `@include` 和 `@exclude` 。所有的元数据规则可以随意添加、删除或修改。不过对于 `@name` 和 `@namespace` 规则，它们的组合必须不同于所安装的其他脚本，否则会带来一些问题。

语法
---

元数据必须遵守以下格式：

	// ==UserScript==
	// @关键词 值
	// ==/UserScript==

如上面的代码所示，必须使用行注释 (`//`)，而不是快注释 (`/* */`)。注意起始语句 `// ==UserScript==` 和结束语句 `// ==/UserScript==` 必须置于行首。有些关键词（属性）可以有多个值。所有的属性和值之间，使用空格分隔。结束语句 `==/UserScript==` 要放在元数据部分的末尾（而不是脚本文件的末尾）。

###@description

示例：

	// @description This script even does the laundry!

一段简短的介绍，会显示在管理面板中。

###@downloadURL

当安装更新时，下载该脚本的 URL。

	// @downloadURL https://www.example.com/myscript.user.js

`Greasemonkey` 的默认设置要求该链接为 `HTTPS` 协议。如果未指定该值，则使用该脚本最初安装时所用的 URL。

###@exclude

示例：参考 `@include`

参考 Include and exclude rules. 一个脚本中可以有多个 `@exclude` 规则。

###@grant

参考 `@grant` 页面.

###@icon
适用于：`Greasemonkey` 0.9.0+

示例：

	// @icon http://www.example.org/icon.png

在 `Greasemonkey` 0.9.0 中显示在脚本管理页面。大部分图像都可以，推荐 32*32 像素。

###@include

示例：

	// @include http://www.example.com/*
	// @include http://*
	// @include *

参考 Include and exclude rules。脚本中可以有多个 `@include` 规则。

###@match

适用于：`Greasemonkey` 0.9.8+

示例：

	// @match https://www.example.com/*
	// @match http://*.example.com/*

`@match` 规则类似于 `@include`，但它更加安全。它可在 * 的基础上设置更加精确的规则。

参考 `Google Chrome` 的 Match Patterns 文档获取详细信息。`Chrome` 最先实现了 `@match` 规则，`Greasemonkey` 与其兼容。

###@name

示例：

	// @name Example Script

脚本的名称。该信息会显示在脚本管理界面及 monkey menu 中，并与 `namespace` 共同作为脚本的独立识别信息。如果未提供该属性，则从文件名中获取。

###@namespace

示例：

	// @namespace http://www.example.com/gmscripts

`name` 与 `namespace` 共同作为 `Greasemonkey` 脚本的独立识别信息。如果两个脚本的 `name` 和 `namespace` 信息完全相同，则新安装的脚本会将旧的脚本取代。否则，将作为新的脚本安装。脚本作者通常要为自己的脚本使用统一的 `namespace`，并分别指定不同的 `name`。

`namespace` 是非语义化的，也可以使用 `URL` 替代，有些作者会使用自己的域名。不过，它可以是任意独一无二的值。

###@require

适用于：`Greasemonkey` 0.8.0+

示例：

	// @require http://www.example.com/example.js

脚本中可以有多个 `@require` 规则。当安装脚本时，每个 `@require` 都会被下载，并与脚本保存在一起。URL 可以与安装脚本的 URL 相关。

注意，从 `Greasemonkey` 0.9.0 开始如果 `Greasemonkey` 探测到 `@require` 值被修改，该值将被应用 (因此，每一个 `@require` 会被重新下载)。

参考：

+ 分类：@require Library
+ Adding Resources

###@resource

适用于：`Greasemonkey` 0.8.0+

示例

	// @resource resourceName http://www.example.com/example.png

脚本中可以有多个 `@resource` 规则。

因为 `resourceName` 是非语义化的，它可以是任意符合 `JavaScript` 标识符规则的词语。 每一个 `@resource` 必须有一个独一无二的名字。

当安装脚本时，每个 `@resource` 都会被下载，并与脚本保存在一起。URL 可以与安装脚本的 URL 相关。

命名的资源可以分别通过 `GM_getResourceText` 和 `GM_getResourceURL` 访问。

注意，从 `Greasemonkey` 0.9.0 开始如果 `Greasemonkey` 探测到 `@resource` 值被修改，该值将被应用 (因此，每一个 `@resource` 会被重新下载)。

参考：

+ Adding Resources

###@run-at

适用于：`Greasemonkey` 0.9.8+

参考：

	// @run-at document-end

支持两个值：`document-end` 和 `document-start`。

End 是 `Greasemonkey` 的默认行为(参考：`DOMContentLoaded`)。

Start 是在 0.9.8 版本中添加的。指定脚本在文档下载前执行（在任何脚本运行或图像加载之前）。

要测试是否在 `document-start` 时执行，可访问 `document.readyState`。例如：

	if ('loading' == document.readyState) {
		alert("This script is running at document-start time.");
	} else {
		alert("This script is running with document.readyState: " + document.readyState);
	}

在 `document-end` 执行的脚本会影响该值。

###@unwrap

适用于：`Greasemonkey` 0.8.1 到 0.9.22

注意：该属性在 1.0+ 版本中被移除。

例如：

	// @unwrap

This declarative key has no associated value. It changes the interpretation of the script as it executes.

Normally, Greasemonkey scripts are wrapped in an anonymous function when they are executed. This behavior started in very early versions of Greasemonkey, which ran scripts directly in the content page, to separate their variables from those in the page. In later versions, it remains because isolating the script from the sandbox scope still helps in certain cases.

This key is strongly recommended to only be used for debugging purposes.

###@updateURL

当 `Greasemonkey` 检查脚本更新时下载的 URL。

	// @updateURL https://www.example.com/myscript.meta.js

该 URL 只需要包含元数据。如果 `@version` 的值比已安装的版本更新，代表脚本已经更新。

###@version

适用于：`Greasemonkey` 0.9.0+

参考：

	// @version 1.0

代表脚本的版本，需要被当做 `firefox` 扩展的版本号，并保持一致的语法。

该信息会被 `Greasemonkey` 0.9.12 的自动更新功能使用。当设置了该属性，并启用了自动更新更能，`Greasemonkey` 会自动定时从安装地址下载脚本，并比较 `@version` 值。在 `Greasemonkey` 0.9.0+ 之前的版本中该值仅用于显示在脚本管理面板中。

示例
---

	// ==UserScript==
	// @name          My Script
	// @namespace     http://www.example.com/gmscripts
	// @description   Scripting is fun
	// @include       http://www.example.com/*
	// @include       http://www.example.org/*
	// @exclude       http://www.example.org/foo
	// @require       foo.js
	// @resource      resourceName1 resource1.png
	// @resource      resourceName2 http://www.example.com/resource2.png
	// @version       1.0
	// @icon          http://www.example.net/icon.png
	// ==/UserScript==

其他资源
------

有两个属性允许下载文件 (在脚本安装时，仅一次) 方便引用：一是 `@require`，包含一个远程的代码资源；而是 `@resource`，加载远程的数据资源。

当编辑已安装的代码时，还可以随意添加这两个资源。任何时候，只需要添加合适的代码，引用的资源就会在脚本下次运行时可用。如果你添加了一个相对 URL，它会被解析为与脚本最初下载的地址相关的 URL。如果脚本的下载 URL 不可用（比如：脚本是从本地文件建立的），如果你在脚本所在位置建立合适的文件，它也会顺利运行（从 `Greasemonkey` 1.0. 起可用）。

参考
---

+ API reference
+ Knowing Your Own Metadata
+ Third-Party Libraries

注
--

分类：API Reference