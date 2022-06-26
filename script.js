let modeToggle = document.querySelector('.mode-tog');
let darkMode = document.querySelector('.dark-mode');
let body = document.querySelector('body');
let title = document.querySelector('.title')

modeToggle.addEventListener('click', () => {

    if (modeToggle.classList[1] === 'bx-moon') {
        modeToggle.classList.toggle('bx-sun');
    } else {    
        modeToggle.classList.remove('bx-sun');
    }
  
    darkMode.classList.toggle('active');
    modeToggle.classList.toggle('active');
    body.classList.toggle('dark--mode');
    title.innerHTML = title.innerHTML === 'Telegram light mode' ? 'Telegram dark mode' : 'Telegram light mode';


})