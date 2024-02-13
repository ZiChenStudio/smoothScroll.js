# smoothscroll.js :hammer_and_wrench:

[English](../README.md)|[简体中文](README-zh_CN.md)

smoothscroll.js是一个轻量级的JavaScript库，为您的Web项目提供平滑滚动功能。只需几行代码，您就可以通过为您的网站上的锚链接添加平滑滚动来增强用户体验。

## 功能 :star2:

- 平滑滚动到页面上的锚定链接 :anchor:
- 轻量级且易于使用 :ok_hand:
- 与所有现代网页浏览器兼容 :globe_with_meridians:

## 安装 :tada:

要开始使用smoothscroll.js，您可以将文件下载到本地主机，然后在HTML文件中添加以下`<script>`标签：

```html
<script src="smoothscroll.js"></script>
```

您也可以使用CDN。

```html
<script src="https://cdn.jsdelivr.net/gh/zichenstudio/smoothscroll.js/dist/smoothscroll.js"></script>
```

还有可以实现相同效果的min版本。

```html
<script src="smoothscroll.min.js"></script>
```

or

```html
<script src="https://cdn.jsdelivr.net/gh/zichenstudio/smoothscroll.js/dist/smoothscroll.min.js"></script>
```

## 使用 :wrench:

一旦库包含在您的项目中，您就可以使用smoothscroll函数将平滑滚动行为添加到您的锚链接中。以下是如何使用它的示例：

```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothscroll);
});
```

## 贡献 :briefcase:

如果您想为smoothscroll.js的开发做出贡献，请随时在GitHub存储库上提交[pull request](https://github.com/zichenstudio/smoothscroll.js/pulls)或者提出[issue](https://github.com/zichenstudio/smoothscroll.js/issues)。

## 支持 :handshake:

如果您有任何问题或需要使用smoothscroll.js的帮助，请随时通过在GitHub存储库上提出一个[issue](https://github.com/zichenstudio/smoothscroll.js/issues)来与我们联系。

## LICENSE :page_facing_up:

[MIT LICENSE](LICENSE)

## END :thumbsup:

滚动愉快! :rocket:
