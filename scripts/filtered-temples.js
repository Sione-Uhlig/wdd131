
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


// Array of Temple Objects 

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "San Diego California",
      location: "San Diego California",
      dedicated: "1983, December, 2",
      area: 72000,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
    },
    {
      templeName: "Idaho Falls Idaho",
      location: "Mexico City, Mexico",
      dedicated: "1945, September, 23",
      area: 92177,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/2019/400x250/5-Idaho-Falls-Temple-1869448.jpg"
    },
    {
      templeName: "Indianapolis Indiana",
      location: "Indianapolis Indiana",
      dedicated: "2015, August, 23",
      area: 9794,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/indianapolis-indiana/400x250/independence-indiana-temple-1510459-wallpaper.jpg"
    },
    {
      templeName: "Córdoba Argentina",
      location: "Córdoba Argentina",
      dedicated: "2015, May, 17",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cordoba-argentina/400x250/cordoba-argentina-temples-buildings-1436933-wallpaper.jpg"
    },
    {
      templeName: "Bosston Massachusetts",
      location: "Bosston Massachusetts",
      dedicated: "2000, October, 1",
      area: 69600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boston-massachusetts/400x250/boston-temple-lds-945541-wallpaper.jpg"
    },
  ];

// Temple card creator.




createTempleCard(temples);

document.querySelector("#home").addEventListener("click", () => {
  createTempleCard(temples);
});
const newLink = document.querySelector('#new');

newLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        const year = parseInt(temple.dedicated.split("-")[0]);
        return year >= 2000;
    }));
});

const oldLink = document.querySelector("#old");

oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        const year = parseInt(temple.dedicated.split("-")[0]);
        return year < 1900;
    }));
});

const largeLink = document.querySelector("#large");

largeLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => {
    return temple.area > 90000;
  }));
});

const smallLink = document.querySelector("#small");

smallLink.addEventListener("click", () => {
  createTempleCard(temples.filter(temple => {
    return temple.area <  10000 ;
  }));
});

function createTempleCard(filteredTemples) {
  document.querySelector(".container").innerHTML = "";
  filteredTemples.forEach(temple => {
      let card = document.createElement("section");
      let name = document.createElement("h3");
      let location = document.createElement("p");
      let dedication = document.createElement("p");
      let area = document.createElement("p");
      let img = document.createElement("img");

      name.textContent = temple.templeName;
      location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
      dedication.innerHTML = `<span class="label"> Dedicated: </span> ${temple.dedicated}`;
      area.innerHTML = `<span class="label">Size</span> ${temple.area} sq ft`;

      const webpUrl = temple.imageUrl.replace(/\.(jpg|jpeg|png)$/, '.webp');
      img.setAttribute("src", webpUrl);

      img.onerror = function() {
          this.onerror = null; 
          this.src = temple.imageUrl;
      };

      img.setAttribute("alt", `${temple.templeName} Temple`);
      img.setAttribute("loading", "lazy");
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);
      card.appendChild(img);

      document.querySelector(".container").appendChild(card);
  });
}