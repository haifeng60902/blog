JAVASCRIPT APIS CURRENT STATUS JAVASCRIPT APIS 当前状态
===========================

Completed Work 已完成工作
--------------

###Standards 标准

####Page Visibility[2013-05-14] 页面可见性

This specification defines a means for site developers to programmatically determine the current visibility state of the page in order to develop power and CPU efficient web applications.

####Selectors API Level 1[2013-02-21] 选择器 API v1

Selectors, which are widely used in CSS, are patterns that match against elements in a tree structure [SELECT][CSS21]. The Selectors API specification defines methods for retrieving Element nodes from the DOM by matching against a group of selectors. It is often desirable to perform DOM operations on a specific set of elements in a document. These methods simplify the process of acquiring specific elements, especially compared with the more verbose techniques defined and used in the past.

####Navigation Timing[2012-12-17]

This document provides an interface for web applications to access timing information related to navigation and elements.

####High Resolution Time[2012-12-17] 高精度计时

This specification defines an interface that provides the current time in sub-millisecond resolution and such that it is not subject to system clock skew or adjustments.

####Element Traversal Specification[2008-12-22] 元素遍历规范

This specification defines the ElementTraversal interface, which allows script navigation of the elements of a DOM tree, excluding all other nodes in the DOM, such as text nodes. It also provides an attribute to expose the number of child elements of an element. It is intended to provide a more convenient alternative to existing DOM navigation interfaces, with a low implementation footprint.

###Group Notes 小组记录

####Web Intents[2013-05-23]

This specification defines a service discovery and light-weight RPC mechanism for web apps called Web Intents.

This document defines DOM interfaces and markup used by client and service pages to create, receive, and reply to Web Intents messages, and the procedures the User Agent carries out to facilitate that process.

####Web Audio Processing: Use Cases and Requirements[2013-01-29] Web 音频处理：用例和标准

This document introduces a series of scenarios and a list of requirements guiding the work of the W3C Audio Working Group in its development of a web API for processing and synthesis of audio on the web.

####Web API Design Cookbook[2012-10-02] Web API 设计教程

####RDFa API[2012-07-05]

RDFa [RDFA-CORE] enables authors to publish structured information that is both human- and machine-readable. Concepts that have traditionally been difficult for machines to detect, like people, places, events, music, movies, and recipes, are now easily marked up in Web documents. While publishing this data is vital to the growth of Linked Data, using the information to improve the collective utility of the Web for humankind is the true goal. To accomplish this goal, it must be simple for Web developers to extract and utilize structured information from a Web document. This document details such a mechanism; an RDFa Application Programming Interface (RDFa API) that allows simple extraction and usage of structured information from a Web document.

####RDF Interfaces[2012-07-05] RDF 接口

####RDF API[2012-07-05]

####Web Application Privacy Best Practices[2012-07-03] Web 应用隐私最佳实践

This document describes privacy best practices for web applications, including those that might use device APIs.

####Device APIs Requirements[2009-10-15] 设备 APi 标准

These are the requirements intended to be met in the development of client-side APIs that enable the creation of Web Applications and Web Widgets that interact with devices services such as Calendar, Contacts, Camera, etc.

####Offline Web Applications[2008-05-30] 离线 Web 应用

Offline Web Applications highlights the features in HTML 5 that address the challenge of building Web applications that work while offline.

Drafts 草案
------

###Candidate Recommendations 候选推荐

####Indexed Database API[2013-07-04] 索引数据库 API

This document defines APIs for a database of records holding simple values and hierarchical objects.

####HTML Media Capture[2013-05-09] HTML 媒体捕捉

This specification defines HTML form enhancements that provide access to the audio, image and video capture capabilities of the device.

####Pointer Events[2013-05-09] 鼠标事件

Defines events and interfaces for handling hardware agnostic pointer input from devices such as mouse, pen or touchscreen.

####Server-Sent Events[2012-12-11] 服务器发送事件

This specification defines an API for opening an HTTP connection for receiving push notifications from a server in the form of DOM events.

####The WebSocket API[2012-09-20]

This specification defines an API that enables Web pages to use the Web Sockets protocol for two-way communication with a remote host.

####Performance Timeline[2012-07-26]

This specification defines an interface for web applications to access timing information related to navigation and elements. It is used by other specifications, like User Timing.

####User Timing[2012-07-26] 用户计时

This specification defines an interface to help web developers measure the performance of their applications by giving them access to high precision timestamps.

####Resource Timing[2012-05-22] 资源计时

This specification defines an interface for web applications to access timing information related to HTML elements.

####Battery Status API[2012-05-08] 电池状态 API

This specification defines a new DOM event type that provides information about the battery status of the hosting device and associated auxiliary devices.

####Web Workers[2012-05-01]

This specification defines an API that allows Web application authors to spawn background workers running scripts in parallel to their main page. This allows for thread-like operation with message-passing as the coordination mechanism.

####HTML5 Web Messaging[2012-05-01] HTML5 Web 消息

This specification defines two mechanisms for communicating between browsing contexts in HTML document.

####Web IDL[2012-04-19]

This document defines an interface definition language, Web IDL, that can be used to describe interfaces that are intended to be implemented in web browsers.

####Progress Events[2011-09-22] 进程事件

This document describes event types that can be used for monitoring the progress of an operation. It is primarily intended for contexts such as data transfer operations specified by XMLHTTPRequest [XHR], or Media Access Events [MAE].

###Last Call Drafts 最终草案

####Vibration API[2013-05-23] 震动 API

An API to control the device's vibrator.

####JSON-LD 1.0 Processing Algorithms and API[2013-05-16] JSON-LD 1.0 处理算法和 API

An Application Programming Interface and a set of algorithms for programmatically transforming JSON-LD documents in order to make them easier to work with in programming environments like JavaScript, Python, and Ruby.

####API for Media Resources 1.0[2013-04-11] 媒体资源 API 1.0

This specification defines a client-side API to access metadata information related to media resources on the Web.

####Ambient Light Events[2012-12-13] 环境光照事件

This specification defines a means to receive events that correspond to a light sensor detecting the presence of a light.

####Proximity Events[2012-12-06] 距离事件

This specification defines a means to receive events that correspond to a proximity sensor detecting the presence of a physical object.

####Timing control for script-based animations[2012-02-21] 脚本动画的时间控制

This document defines an API web page authors can use to write script-based animations where the user agent is in control of limiting the update rate of the animation.

####Geolocation API Specification Level 2[2011-12-01] 地理定位 API 规范 v2

This specification adds the ability to retrieve a civic address, rather than coordinates, to the Geolocation API.

####DeviceOrientation Event Specification[2011-12-01] 设备定向事件规范

This specification defines several new DOM event types that provide information about the physical orientation and motion of a hosting device.
Other Working Drafts

####Web Cryptography API[2013-06-25] Web 密码 API

This specification describes a JavaScript API for performing basic cryptographic operations in web applications, such as hashing, signature generation and verification, and encryption and decryption. Additionally, it describes an API for applications to generate and/or manage the keying material necessary to perform these operations. Key storage is provided for both temporary and permanent keys. Access to keying material is contingent on the same origin policy. Uses for this API range from user or service authentication, document or code signing, and the confidentiality and integrity of communications.

####Web Telephony API[2013-06-20] Web 电话 API

This specification defines an API to manage telephone calls. A typical use case of the Web Telephony API is the implementation of a 'Dialer' application supporting multiparty calls and multiple telephony services. A minimal structure for call history items is also defined.

####Media Capture and Streams[2013-05-16] 媒体捕获和流

This document defines a set of APIs that allow local media, including audio and video, to be requested from a platform, media to be sent over the network to another browser or device implementing the appropriate set of real-time protocols, and media received from another browser or device to be processed and displayed locally.

####The app: URI scheme[2013-05-16]

This specification defines the app: URI scheme and rules for dereferencing an app: URI, which can be used to address resources inside a package (e.g., a packaged application). The dereferencing model relies on HTTP semantics to return resources in a manner akin to a HTTP GET request. Doing so allows this URI scheme to be used with other technologies that rely on HTTP responses to function as intended, such as [XHR].

####Messaging API[2013-05-16] 消息 API

This specification defines a System Level API which offers a simple interface to get access to mobile messaging services. A typical use case of the Messaging API is the implementation of a messaging client application that allows the user to send SMS and MMS messages as well as to access and manage the received SMS and MMS messages.

####Raw Socket API[2013-05-14] 原始套接字 API

This API provides interfaces to raw UDP sockets, TCP client sockets and TCP server sockets.

####Encrypted Media Extensions[2013-05-10] 媒体加密扩展

This specification extends the HTMLMediaElement interface to provide APIs for controlling playback of protected content

####Media Source Extensions[2013-04-15] 媒体源扩展

This specification extends the HTMLMediaElement interface to allow JavaScript to generate media streams for playback.

####Clipboard API and events[2013-04-11] 剪贴板 API 和事件

This document describes apis for clipboard operations such as copy/cut and paste, or drag and drop in web applications.

####Network Service Discovery[2013-04-04] 网络服务探索

This specification defines a mechanism for an HTML document to discover and subsequently communicate with HTTP-based services advertised via common discovery protocols within a user's network.

####Input Method Editor API[2013-04-04] 输入法编辑器 API

Defines an API that provides Web applications with scripted access to an Input Method Editor

####Runtime and Security Model for Web Applications[2013-03-21] Web 应用运行时和安全模式

This document specifies a runtime and security model for Web Applications. It describes how an application is defined through an application manifest, and how it can be installed, updated and packaged. It also specifies how such an application can be put into the background, be put back in the foreground or woken up. Finally, the document describes the security model for such applications. This includes the permission model and the different security rules that would apply.

####WebDriver[2013-03-12]

This specification defines the WebDriver API, a platform-and language-neutral interface that allows programs or scripts to introspect into, and control the behaviour of, a web browser.

####Contacts Manager API[2013-03-07] 联系人管理 API

A system level API for managing the user's contacts that are stored in the system's address book.

####Streams API[2013-02-14] 流 API

Defines an API for representing binary data in web applications as a Stream object.

####MediaStream Recording[2013-02-05] 媒体流记录

This document defines an API for recording audio and video streams.

####Web Alarms API Specification[2013-02-05] Web 警告 API 规范

This specification defines a System Level API to provide access to the device alarm settings, which can schedule a notification or for an application to be started at a specific time. For example, some applications like alarm-clock, calendar or auto-update might need to utilize Alarm API to trigger particular device behaviors at specified time points.

####Navigation Timing 2[2013-01-31]

This document provides an interface for web applications to access timing information related to navigation and elements.

####Web Audio API[2012-12-13]

This specification describes a high-level JavaScript API for processing and synthesizing audio in web applications. The primary paradigm is of an audio routing graph, where a number of AudioNode objects are connected together to define the overall audio rendering. The actual processing will primarily take place in the underlying implementation (typically optimized Assembly / C / C++ code), but direct JavaScript processing and synthesis is also supported.

####XMLHttpRequest[2012-12-06]

The XMLHttpRequest specification defines an API that provides scripted client functionality for transferring data between a client and a server, one of the core components of “AJAX”.

####The Screen Orientation API[2012-12-06] 屏幕方向 API

Defines APIs to read screen orientation state and to lock the screen orientation to a specific state.

####The Network Information API[2012-11-29] 网络信息 API

The Network Information API provides an interface for Web Applications to access the underlying network information (connection info) of the device.

####File API[2012-10-25] 文件 API

This specification provides an API for representing file objects in web applications, as well as programmatically selecting them and accessing their data.

####Push API[2012-10-18] 消息推送 API

An API that provides Web applications with scripted access to server-sent application data.

####Web Intents Addendum - Local Services[2012-10-04] Web Intents 附录 - 本地服务

This specification extends the Web Intents service discovery and light-weight RPC mechanism for web applications by defining optional extensions to Web Intents enabled User Agents to discover and dynamically register local Web Intents Services.

####WebRTC 1.0: Real-time Communication Between Browsers[2012-08-21] WebRTC 1.0：浏览器间实时通信

This document defines a set of APIs that allow local media, including audio and video, to be requested from a platform, media to be sent over the network to another browser or device implementing the appropriate set of real-time protocols, and media received from another browser or device to be processed and displayed locally.

####Pick Contacts Intent[2012-07-12] 通讯录选择 Intent

This specification defines an API that provides access to a user’s unified address book.

####Pick Media Intent[2012-07-12] 媒体选择 Intent

The Pick Media Intent defines a Web Intent that enables access to a user's media gallery from inside a Web application. It defines both an Intent action/type pair that selects this operation, and the format of the media data that is returned by services implementing this specification.

####Fullscreen[2012-07-03] 全屏

This specification defines an API to allow elements to be rendered fullscreen.

####Quota Management API[2012-07-03] 配额管理 API

API to manage usage and availability of local storage resources

####Selectors API Level 2[2012-06-28] 选择器 API v2

The Selectors API specification defines methods for retrieving Element nodes from the DOM by matching against a group of selectors (as used in CSS).

####Web Notifications[2012-06-14] Web 通知

This document defines an API for displaying simple notifications to the user.

####Gamepad[2012-05-29] 游戏手柄

Defines a low-level interface that represents gamepad devices.

####Pointer Lock[2012-05-29] 鼠标锁定

API that provides scripted access to raw mouse movement data while locking the target of mouse events to a single element and removing the cursor from view.

####URL[2012-05-24]

Defines URL parsing, resolving, and canonicalizing as well as the URL API.

####File API: Directories and System[2012-04-17] 文件 API：目录和系统

Defines an API to navigate file system hierarchies and sandboxed sections of a user's local filesystem.

####File API: Writer[2012-04-17] 文件 API：记录

This specification defines an API for writing to files from web applications.

####MediaStream Capture Scenarios[2012-03-06]

This document collates the scenarios that are target use cases for the Media Capture API that enables access to media input capabilities for Web applications using Javascript.

####Audio Processing API[2011-12-15] 音频进程 API

This specification introduces and compares two client-side APIs for processing and synthesizing real-time audio streams in the browser.

####The Messaging API[2011-04-14] 消息 API

This specification defines an API that provides access to messaging functionality in the device, including SMS, MMS and email.

####Permissions for Device API Access[2010-10-05] 设备 API 访问权限

This document identifies the permissions that are needed to use specific client-side APIs which grant access to sensitive data and operations.

####The System Information API[2010-02-02] 系统信息 API

This specification defines an API to provide Web applications with access to various hardware properties of the system which they are running on, including battery status, current network bandwidth.

####Web Forms 2.0[2009-02-26]

This specification defines Web Forms 2.0, an extension to the forms features found in HTML4's Forms chapter and the corresponding DOM2 HTML interfaces. Web Forms 2.0 applies to both HTML and XHTML user agents. It provides new strongly-typed input fields, new attributes for defining constraints, a repeating model for declarative repeating of form sections, new DOM interfaces, new DOM events for validation and dependency tracking, and XML submission and initialization of forms. It also standardizes and codifies existing practice in areas that have not been previously documented, and clarifies some of the interactions of HTML form controls and CSS.

HTML4, XHTML1.1, and the DOM are thus extended in a manner that has a clear migration path from existing HTML forms, leveraging the knowledge authors have built up with their experience with HTML so far.

####Web Forms 2.0[2006-08-21]

This specification defines Web Forms 2.0, an extension to the forms features found in HTML4's Forms chapter and the corresponding DOM2 HTML interfaces. Web Forms 2.0 applies to both HTML and XHTML user agents. It provides new strongly-typed input fields, new attributes for defining constraints, a repeating model for declarative repeating of form sections, new DOM interfaces, new DOM events for validation and dependency tracking, and XML submission and initialization of forms. It also standardizes and codifies existing practice in areas that have not been previously documented, and clarifies some of the interactions of HTML form controls and CSS.

HTML4, XHTML1.1, and the DOM are thus extended in a manner that has a clear migration path from existing HTML forms, leveraging the knowledge authors have built up with their experience with HTML so far.

####Window Object 1.0[2006-04-07] Window 对象 1.0

Obsolete Specifications 已过时规范
-----------------------

###Retired 已废弃

####MediaStream Processing API[2012-05-31] 媒体流

This proposal makes HTML Streams the foundation for integrated Web media processing by creating a mixing and effects processing API for HTML Streams.

####The Media Capture API[2012-03-22] 媒体捕获 API

The Media Capture API enables access to the audio, image and video capture capabilities of the device through Javascript.

####Programmable HTTP Caching and Serving[2011-03-29] 可编程 HTTP 缓存和服务

This document defines APIs for off-line serving of requests to HTTP resources using static and dynamic responses. It extends the function of application caches defined in HTML5.

####Web SQL Database[2010-11-18] Web SQL 数据库

This specification defines an API for storing data in databases that can be queried using a variant of SQL.