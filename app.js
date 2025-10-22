// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('sideMenu');

hamburger.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
});

// Copy Email (for contact page)
function copyEmail(){
    navigator.clipboard.writeText("delta@delphadex.com");
    alert("Email copied to clipboard!");
}

// Optional: Animate skill bars on scroll
const skillLevels = document.querySelectorAll('.skill-level');

window.addEventListener('scroll', () => {
    const trigger = window.innerHeight * 0.8;
    skillLevels.forEach(level => {
        const rect = level.getBoundingClientRect();
        if(rect.top < trigger){
            level.style.width = level.style.width; // already set in HTML style
        }
    });
});