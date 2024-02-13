/**
 * @file smoothscroll.js JavaScript Library v1.0
 * @see github.com/zichenstudio/smoothscroll.js
 *
 * @license MIT License
 * @see github.com/zichenstudio/smoothscroll.js/blob/main/LICENSE
 *
 * @date 2024-01-15 (UTC)
 */
function smoothscroll(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: "smooth",
  });
}

