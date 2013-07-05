Navigator 对象
============

`navigator` 对象包含了浏览器的相关信息。

属性
---

plugins

以数组形式返回页面中的嵌入对象。

appCodeName

浏览器代码名称。

appMinorVersion

浏览器的次要版本号。

appName

浏览器名称。

appVersion

包括浏览器的平台及版本信息。

browserLangauge

浏览器的语言。

cookieEnabled

是否已启用 cookie。

cpuClass

CPU 信息。

onLine

在线模式/脱机模式。

platform

运行平台。

systemLangauge

浏览器所在系统使用的语言。

userAnget

用户代理信息。

userLangauge

浏览器所在系统使用的语言。

方法
---

javaEnabled()

检测浏览器是否启用了 Java。

语法：
>navigator.javaEnabled();

返回值：
>1.true 已启用  
>2.false 已禁用

taintEnabled()

检测浏览器是否启用了 data tainting。

语法：
>navigator.taintEnabled();

返回值：
>1.true 已启用  
>2.false 已禁用