const power_button = document.querySelector('.button');

power_button.addEventListener('click', () => {
document.body.classList.toggle('dark');
power_button.classList.toggle('button--active');
});