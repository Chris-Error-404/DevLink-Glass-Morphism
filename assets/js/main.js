//NAVBAR SCROLL SCRIPT
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav.navbar');

    if (window.scrollY > 10){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
});


//HAMBURGER MENU SCRIPT
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})


const themeCheckbox = document.getElementById('theme-checkbox');

// Check localStorage for theme preference
const savedTheme = localStorage.getItem('theme');

// Apply saved theme or system preference
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    themeCheckbox.checked = true;
} else {
    document.documentElement.classList.remove('dark');
    themeCheckbox.checked = false;
}

// Toggle theme on checkbox change
themeCheckbox.addEventListener('change', () => {
    if (themeCheckbox.checked) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
});


//SKILSS CAROUSEL SCRIPT
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#skills .skills-container');
  
    // Clone children for seamless looping
    const cloned = container.cloneNode(true);
    cloned.querySelectorAll('span').forEach(span => {
      span.classList.add('cloned');
    });
    container.append(...cloned.children);
  
    // Pause/resume on hover
    container.addEventListener('mouseenter', () => {
      container.style.animationPlayState = 'paused';
    });
  
    container.addEventListener('mouseleave', () => {
      container.style.animationPlayState = 'running';
    });
  });



  
//PROJECTS DROPDOWN SCRIPT
const toggles = document.querySelectorAll('.toggle-icon');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const description = toggle.parentElement.nextElementSibling;
        const projectBox = toggle.closest('.project-box');
/*         const other = toggle.nextSibling('.other'); */

        // Toggle description visibility
        description.classList.toggle('open');

        // Toggle background on parent
        projectBox.classList.toggle('open-box');

        // Toggle icon
        if (toggle.classList.contains('bx-plus')) {
            toggle.classList.remove('bx-plus');
            toggle.classList.add('bx-minus');
        } else {
            toggle.classList.remove('bx-minus');
            toggle.classList.add('bx-plus');
        }
    });
});


//CONTACT SCRIPT
//to keep form from reloading
document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();
});


const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', () => {

    const userName = document.getElementById('name').value
    const url = document.getElementById('url').value
    const message = document.getElementById('message').value

    console.log(`you name is: ${userName}`);
    console.log(`your URL is: ${url}`);
    console.log(`your message is: ${message}`)
})
