# smoothscroll.js :hammer_and_wrench:

[English](README.md)|[简体中文](doc/README-zh_CN.md)

smoothscroll.js is a lightweight JavaScript library that provides smooth scrolling functionality for your web projects. With just a few lines of code, you can enhance the user experience by adding smooth scrolling to anchor links on your website.

## Features :star2:

- Smoothly scroll to anchor links on the page :anchor:
- Lightweight and easy to use :ok_hand:
- Compatible with all modern web browsers :globe_with_meridians:

## Installation :tada:

To start using smoothscroll.js, you can download the file to your local host and then add the following `<script>` tag to your HTML file:

```html
<script src="smoothscroll.js"></script>
```

You can also use CDN.

```html
<script src="https://cdn.jsdelivr.net/gh/zichenstudio/smoothscroll.js/dist/smoothscroll.js"></script>
```

There are also min versions that can achieve the same effect.

```html
<script src="smoothscroll.min.js"></script>
```

or

```html
<script src="https://cdn.jsdelivr.net/gh/zichenstudio/smoothscroll.js/dist/smoothscroll.min.js"></script>
```

## Usage :wrench:

Once the library is included in your project, you can use the smoothscroll function to add smooth scrolling behavior to your anchor links. Here's an example of how to use it:

```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothscroll);
});
```

## Contributing :briefcase:

If you'd like to contribute to the development of smoothscroll.js, please feel free to submit a [pull request](https://github.com/zichenstudio/smoothscroll.js/pulls) or open an [issue](https://github.com/ZiChenStudio/smoothscroll.js/issues) on the GitHub repository.

## Support :handshake:

If you have any questions or need assistance with using smoothscroll.js, please don't hesitate to reach out to us by opening an [issue](https://github.com/zichenstudio/smoothscroll.js/issues) on the GitHub repository.

## LICENSE :page_facing_up:

[MIT LICENSE](LICENSE)

## END :thumbsup:

Happy scrolling! :rocket:
