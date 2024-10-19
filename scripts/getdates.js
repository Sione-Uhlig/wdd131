const year = document.querySelector("#yearjs");
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent += lastModified;