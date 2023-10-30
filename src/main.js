window.addEventListener('mousemove', function (e) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    document.documentElement.style.setProperty('--mouse-x', 100 / w * e.clientX + 'px');
    document.documentElement.style.setProperty('--mouse-y', 100 / h * e.clientY + 'px');
});