// Custom Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Easter Egg
console.log("%cYo, you found the secret 😏", "color: #8a2be2; font-size: 20px;");