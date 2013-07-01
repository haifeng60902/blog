JAVASCRIPT WEB APIS
=================

While the most common scripting language ECMAscript (more widely known as JavaScript) is developed by Ecma, a great many of the APIs made available in browsers have been defined at W3C.

ECMAscript 是 ECMA 开发的一门通用脚本语言（作为 JavaScript 更广为人知），W3C 定义了许多可在浏览器中使用的 API。

current status 相关技术：
+ Accessible Rich Internet Applications 无障碍富互联网应用 (WAI-ARIA)
+ DOM
+ DOM events
+ Declarative Web Applications 声明式 Web 应用
+ JavaScript APIs
+ Mobile Web Applications 移动 Web 应用
+ WICD
+ Widgets 组件
+ XBL
+ HTML
+ Web Components Web 组件
+ Web Performance Web 性能

What is scripting? 什么是脚本？
------------------

A script is program code that doesn’t need pre-processing (e.g. compiling) before being run. In the context of a Web browser, scripting usually refers to program code written in JavaScript that is executed by the browser when a page is downloaded, or in response to an event triggered by the user.

脚本是在运行前无需预处理（如 编译）的程序代码。在浏览器环境中，脚本通常是指浏览器在网页加载完毕后，或作为用户触发事件的响应执行的 JavaScript 程序代码。

Scripting can make Web pages more dynamic. For example, without reloading a new version of a page it may allow modifications to the content of that page, or allow content to be added to or sent from that page. The former has been called DHTML (Dynamic HTML), and the latter AJAX (Asynchronous JavaScript and XML).

脚本可以是网页更加动态。如修改页面内容，而无需加载新的页面。这种应用方式之前被叫做 DHTML（动态 HTML），现在的名字是 AJAX（Asynchronous JavaScript and XML，异步 JavaScript 与 XML）。

Beyond this, scripts increasingly allow developers to create a bridge between the browser and the platform it is running on, making it possible, for example, to create Web pages that incorporate information from the user’s environment, such as current location, address book details, etc.

除此之外，脚本为开发者连接浏览器与其运行环境提供了越来越多的可能。例如，创建包含用户环境信息（如：当前位置、详细地址等）的网页。

This additional interactivity makes Web pages behave like a traditional software application. These Web pages are often called Web applications and can be made available either directly in the browser as a Web page, or can be packaged and distributed as Widgets.

这些额外功能是网页表现的越来越像传统软件，这些网页通常被称为 Web 应用。它们可以作为网页运行在浏览器中，或打包并作为组件发布。

What scripting interfaces are available ? 有什么可用的脚本接口？
---------------------------------------

The most basic scripting interface developed at W3C is the DOM, the Document Object Model which allows programs and scripts to dynamically access and update the content, structure and style of documents. DOM specifications form the core of DHTML.

最基本的脚本接口是 W3C 开发的 DOM（Document Object Model，文档对象模型），它允许程序和脚本动态的获取和更新文档的内容、结构和样式。DOM 规范是 DHTML 的核心。

Modifications of the content using the DOM by the user and by scripts trigger events that developers can make use of to build rich user interfaces.

通过 DOM 的事件处理程序来修改页面内容，开发者可以创建丰富的用户交互。

A number of more advanced interfaces are being standardized, for instance:

一系列更高级的接口正在被标准化，例如：

+　XMLHttpRequest makes it possible to load additional content from the Web without loading a new document, a core component of AJAX,
+ XMLHttpRequest 支持加载额外内容，而无需下载新的页面，是 AJAX 的核心组件；
+ the Geolocation API makes the user’s current location available to browser-based applications,
+ 地理定位 API 使基于浏览器的应用可以访问用户当前位置；
+ several APIs make the integration of Web applications with the local file system and storage seamless.
+ 多个 API 使 Web 应用可以访问本地文件系统及无缝存储；

WAI ARIA offers mechanisms to ensure that this additional interactivity remains usable independent of devices and disabilities. Additional considerations apply to the development of Web applications for mobile devices.

WAI-ARIA 提供了确保额外功能对独立设备或残疾人仍然可用的机制。其他注意事项适用于为移动设备开发 Web 应用。

Beyond scripting 除了脚本
----------------

While scripting offers a great opportunity to develop new interfaces and experiment with new user interactions, over time a number of these additions benefit from a more declarative approach; for instance, instead of having each and every developer re-implement a calendar-interface that allows a user to pick a date, defining an input type (`<input type='date' />`) that does it automatically saves a lot of time and bugs, and creates a ground for further innovation.

虽然脚本使开发者可以创建新的界面和用户交互体验，随着时间的推移，可以从其他声明式的方法获得这些新的功能。例如：可以定义一个新的输入框（`<input type='date' />`），来供用户选择时间，而不是让每个开发者重新实现一个日历组件。这会节省许多时间，并避免错误的出现，还为将来的创新打下了基础。

Beyond the set of declarative interfaces made available through HTML, several technologies have been developed to make these Declarative Web Applications possible.

除了 HTML 中实现的一系列声明式接口，正在开发的许多技术使声明式 Web 应用变成可能。