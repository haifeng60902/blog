Location 对象
===========

`location` 对象包含了当前页面 URL 的相关信息。

属性
---

hash

设置或返回当前 URL 中的锚信息（从 # 开始的部分）。

host

设置或返回当前 URL 中的主机名和端口号。

hostname

设置或返回当前 URL 中的主机名。

href

设置或返回当前 URL。

pathname

设置或返回当前 URL 中的路径部分。

port

设置或返回当前 URL 中的端口号。

protocol

设置或返回当前 URL 的协议。

search

设置或返回当前 URL 中的查询信息（以 ? 开始的部分）。

方法
---

assign()

加载新页面。

语法：
>location.assigh(url);

参数：
>1.url 要加载的页面 URL

reload()

重新加载当前页面。

语法：
>location.reload(force);

参数：
>1.force 是否强制重新加载（从服务器重新加载，忽略本地缓存）。true 强制重新加载；false 重新加载。该参数可选，默认为 false

replace()

加载新页面，并替换当前页面（不产生新的历史记录）。

语法：
>location.assigh(url);

参数：
>1.url 要加载的页面 URL