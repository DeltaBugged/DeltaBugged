// Custom Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Copy Email Button
function copyEmail(){
    navigator.clipboard.writeText("delta@delphadex.com");
    alert("Email copied to clipboard!");
}

// Easter Egg
console.log("%cHey coder, welcome to the secret console 👀","color:#8a2be2; font-size:18px;");