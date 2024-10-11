
const year = document.querySelector("#yearjs");
const today = new Date();

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent += lastModified;

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});