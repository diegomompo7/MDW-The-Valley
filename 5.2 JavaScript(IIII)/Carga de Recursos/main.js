
window.onload = () => console.log('Page is ready | Image size: ' + img.offsetWidth + 'x' + img.offsetHeight);
document.addEventListener("DOMContentLoaded", () => console.log('DOM is ready | Image size: ' + img.offsetWidth + 'x' + img.offsetHeight));

window.addEventListener("beforeunload", function (event) {
    event.preventDefault();
});