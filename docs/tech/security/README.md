---
title: 安全
description: 安全
date: 2021-12-13
---

## 前端安全

前不久，我们公司安全团队报告了一些 `Web` 安全漏洞，我简单整理了一下，具体的每一项的细节可以查看链接。

- [CSP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP)：内容安全策略 `Content-Security-Policy`，其实简单来说，`CSP` 就是一个白名单机制，可以配置允许加载哪些域的资源，可以通过 `Http 头` 或 `<meta> 标签` 的方式来设置。

- [HSTS](https://zh.wikipedia.org/wiki/HTTP%E4%B8%A5%E6%A0%BC%E4%BC%A0%E8%BE%93%E5%AE%89%E5%85%A8)：`Http` 严格传输安全 `Http-Strict-Transport-Security`，作用是强制浏览器使用 `Https` 与服务器创建连接。如 `strict-transport-security: max-age=3153600` ，表示在接下来的 `3153600s`（即一年）中，浏览器向 `example.com` 或其子域名发送 `http` 请求时，必须采用 `https` 来连接，如果用户点击超链接或者地址栏输入 `http://example.com` ，浏览器应当自动将 `http` 转写为 `https` ，然后向 `https://example.com` 发起请求。

- [X-Frame-Options](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Frame-Options)：响应头表示是否允许（或允许哪些）在 `<iframe>` ，`<frame>` ，`<embed>`， `<object>` 等标签中引入，这样的话可以确保自己的网站没有被第三方网站偷偷引入，从而避免了点击劫持。其实我用的比较多的是加百度统计的白名单，热力图功能需要使用 `iframe` 嵌套。

- [X-Content-Type-Options](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Content-Type-Options)：防止服务器响应标记的 `Content-Type` 标记头被篡改。比如设置 `X-Content-Type-Options: nosniff` ，那么下面2种情况的请求会被阻止
  - 请求类型是 `style` ，但 `MIME` 类型不是 `text/css`
  - 请求类型是 `script`，但 `MIME` 类型不是  `JavaScript MIME` 类型
