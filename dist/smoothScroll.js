/*!
 * smoothScroll.js JavaScript Library v1.0
 * github.com/ZiChenStudio/smoothScroll.js
 *
 * Copyright (c) 2024 ZiChenStudio Official
 * Released under the MIT License
 * github.com/ZiChenStudio/smoothScroll.js/blob/main/LICENSE
 *
 * Date(UTC): 2024-01-15
 *
 */
function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
    });
}
