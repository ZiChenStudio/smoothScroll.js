# SmoothScroll.js :hammer_and_wrench:

SmoothScroll.js is a lightweight JavaScript library that provides smooth scrolling functionality for your web projects. With just a few lines of code, you can enhance the user experience by adding smooth scrolling to anchor links on your website.

## Features :star2:

- Smoothly scroll to anchor links on the page :anchor:
- Lightweight and easy to use :ok_hand:
- Compatible with all modern web browsers :globe_with_meridians:

## Installation :tada:

To start using smoothScroll.js, you can download the file to your local host and then add the following `<script>` tag to your HTML file:

```html
<script src="smoothscroll.js"></script>
```

## Usage :wrench:

Once the library is included in your project, you can use the smoothScroll function to add smooth scrolling behavior to your anchor links. Here's an example of how to use it:

```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothScroll);
});
```

## Contributing :briefcase:

If you'd like to contribute to the development of SmoothScroll.js, please feel free to submit a [pull request](https://github.com/ZiChenStudio/smoothScroll.js/pulls) or open an [issue](https://github.com/ZiChenStudio/smoothScroll.js/issues) on the GitHub repository.

## Support :handshake:

If you have any questions or need assistance with using SmoothScroll.js, please don't hesitate to reach out to us by opening an issue on the GitHub repository.

## LICENSE :page_facing_up:

[MIT LICENSE](LICENSE)

## END :thumbsup:

Happy scrolling! :rocket:
