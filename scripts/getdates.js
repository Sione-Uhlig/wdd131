const year = document.querySelector("#yearjs");
        const today = new Date();
        year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

        const lastModified = document.lastModified;
        document.getElementById('lastModified').textContent += lastModified;

        // Hamburger control 
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.querySelector('.hamburger');
            const navigation = document.querySelector('.navigation');

            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navigation.classList.toggle('active');
            });

            document.addEventListener('click', function(event) {
                if (!hamburger.contains(event.target) && !navigation.contains(event.target)) {
                    hamburger.classList.remove('active');
                    navigation.classList.remove('active');
                }
            });
        });