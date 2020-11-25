

// make images in section1 move one by one randomly
const landingPage = document.querySelector(".landing-page");

// build an Array of images
const imgsArray = ["00.jpg", "01.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg"];

//set time interval between images apperance by miliseconds
setInterval(() => {
  const randumNumber = Math.floor(Math.random() * imgsArray.length);
  landingPage.style.backgroundImage =
    'url("imgs/' + imgsArray[randumNumber] + '")';
}, 1500);



//set Global Variables
const navb = document.getElementById("navbar__list");
const sectionx = document.querySelectorAll("section");


// build the nav bar
const buildNav = () => {
  let X = "";

  sectionx.forEach((section) => {
    const sectionXID = section.id;
    const DataNav = section.dataset.nav;
    X += `<li><a class="menu__link" href="#${sectionXID}">${DataNav}</a></li>`;
  });
  navb.innerHTML = X;
};
buildNav();

// style nav bar with color red 
  const heading = document.querySelector('nav');
  heading.style.backgroundColor = 'red'

// Add class active when near top of viewport
const Y = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

// delete active class
const deleteActive = (section) => {
  section.classList.remove("your-active-class");
  section.style.cssText = "background-color: white";
};

// adde active class
const addActive = (action, section) => {
  if (action) {
    section.classList.add("your-active-class");
    section.style.cssText = "background-color: red;";
  }
};

//set activation function

const sectionActivate = () => {
  sectionx.forEach((section) => {
    const elementY = Y(section);

    inviewport = () => elementY < 250 && elementY >= -250;

    deleteActive(section);
    addActive(inviewport(), section);
  });
};

window.addEventListener("scroll", sectionActivate);
