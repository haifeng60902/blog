HTML & CSS
=========

HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices. Along with graphics and scripting, HTML and CSS are the basis of building Web pages and Web Applications. Learn more below about:

HTML（Hypertext Markup Language，超文本标记语言）和 CSS（Cascading Style Sheets，层叠样式表）是构建网页的两个核心技术。HTML 提供了网页的结构，CSS（包括视觉和听觉）为多种设备提供了布局。HTML、CSS 与图像和脚本一起作为构建网页和 Web 应用的基础。在下面了解更多：

current status 相关技术:

+ HTML
+ CSS
+ Best Practices for Authoring HTML HTML 编写最佳实践
+ Web Fonts Web 字体

What is HTML? 什么是 HTML
-------------

HTML is the language for describing the structure of Web pages. HTML gives authors the means to:

HTML 是描述网页结构的语言，它为作者提供了：

+ Publish online documents with headings, text, tables, lists, photos, etc.
+ 发布包含标题、文本、表格、列表和图像等内容的在线文档。
+ Retrieve online information via hypertext links, at the click of a button.
+ 点击按钮，通过超链接获取在线信息。
+ Design forms for conducting transactions with remote services, for use in searching for information, making reservations, ordering products, etc.
+ 设计与远程服务交互的表单，如：信息检索、在线预订和订购产品等。
+ Include spread-sheets, video clips, sound clips, and other applications directly in their documents.
+ 直接在网页中包含电子表格、音视频剪辑等应用。

With HTML, authors describe the structure of pages using markup. The elements of the language label pieces of content such as “paragraph,” “list,” “table,” and so on.

作者借助 HTML 中的标记描述网页的结构。HTML 中提供的语言标记包括段落、列表、表格等。

What is XHTML? 什么是 XHTML
--------------

XHTML is a variant of HTML that uses the syntax of XML, the Extensible Markup Language. XHTML has all the same elements (for paragraphs, etc.) as the HTML variant, but the syntax is slightly different. Because XHTML is an XML application, you can use other XML tools with it (such as XSLT, a language for transforming XML content).

XHTML 是 HTML 的一个变种，它使用了 XML（Extensible Markup Language，可扩展标记语言）的语法。XHTML 使用了与 HTML 相同的元素（如段落等），只是在语法上右些许差异。由于 XHTML 是一种 XML 应用，所以可以使用其他 XML 工具（如 XSLT，一种用来转换 XML 内容的语言）来处理他。

What is CSS? 什么是 CSS
------------

CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers. CSS is independent of HTML and can be used with any XML-based markup language. The separation of HTML from CSS makes it easier to maintain sites, share style sheets across pages, and tailor pages to different environments. This is referred to as the separation of structure (or: content) from presentation.

CSS 是用来描述网页外观（包括颜色、布局和字体）的语言，它可以使网页外观适应不同的设备，如大屏幕、小屏幕或打印设备。CSS 是独立于 HTML 的，它可用于任何基于 XML 的标记语言。CSS 与 HTML 的分离，可以方便网站维护、多页面样式共享及为不同环境调整页面，这涉及到结构（或内容）与表现分离的知识。

What is WebFonts? 什么是 Web 字体
-----------------

WebFonts is a technology that enables people to use fonts on demand over the Web without requiring installation in the operating system. W3C has experience in downloadable fonts through HTML, CSS2, and SVG. Until recently, downloadable fonts have not been common on the Web due to the lack of an interoperable font format. The WebFonts effort plans to address that through the creation of an industry-supported, open font format for the Web (called "WOFF").

Web 字体是一种使人们可以使用网络上的字体，而无需将字体安装到操作系统上的技术。W3C 拥有在 HTML、CSS2 和 SVG 中使用可下载字体的经验，直到最近，由于缺乏通用的字体格式，可下载字体在网页中变得不再流行。Web 字体致力于创造一种被行业广泛支持的开放 Web 字体格式（WOFF），来解决该问题。

Examples 示例
--------

The following very simple example of a portion of an HTML document illustrates how to create a link within a paragraph. When rendered on the screen (or by a speech synthesizer), the link text will be “final report”; when somebody activates the link, the browser will retrieve the resource identified by “http://www.example.com/report”:

下面简单的 HTML 片段用来说明如何在段落中创建超链接。当网页被浏览器（或语音合成器）渲染后，“final report” 会作为连接文本；当点击该链接时，浏览器将会取回 “http://www.example.com/report” 所代表的资源：

	<p class="moreinfo">
		For more information see the
		<a href="http://www.example.com/report">final report</a>.
	</p>

The `class` attribute on the paragraph's start tag (`<p>`) can be used, among other thing, to add style. For instance, to italicize the text of all paragraphs with a class of “moreinfo,” one could write, in CSS:

可以在段落的开始标签（`<p>`）中使用 `class` 属性，来为其添加样式。例如，使所有 `class` 属性包含 `moreinfo` 的段落用斜体显示，可以在 CSS 中书写：

	p.moreinfo { font-style: italic }

By placing that rule in a separate file, the style may be shared by any number of HTML documents.

将该规则保存在单独的文件中，就可以在任何 HTML 文档中共享该样式了。

More Information 更多信息
----------------

For more information about HTML and CSS, see tutorials for HTML and CSS.

参考 HTML CSS 教程，获取更多信息。

For advanced document transformations and layout beyond CSS, see XSLT & XSL-FO.

参考 XSLT % XSL-FO 了解高级文档转换和无 CSS 布局。。