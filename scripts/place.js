const year = document.querySelector("#yearjs");
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent += lastModified;



 // calculating the wnd chill.

const temperature = 50; 
const windSpeed = 3; 

function calculateWindChill(tempF, speedMph) {
    return 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speedMph, 0.16)) + (0.4275 * tempF * Math.pow(speedMph, 0.16));
}


function displayWeather() {
    document.getElementById('temperature').textContent = temperature;
    document.getElementById('wind-speed').textContent = windSpeed;
    
    const wcf = document.getElementById('wcf');

    console.log(`Temperature: ${temperature}, Wind Speed: ${windSpeed}`);

    if (temperature <= 50 && windSpeed > 3) {
        let windChillF = calculateWindChill(temperature, windSpeed);
        wcf.textContent = Math.round(windChillF) + "°F";
    } else {
        console.log("Wind Chill condition not met, displaying N/A");
        wcf.textContent = "N/A";
    }
}

document.addEventListener('DOMContentLoaded', displayWeather);