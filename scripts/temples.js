document.getElementById("lastModified").innerHTML = document.lastModified;
// use the date object  
const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();

// Menu functionality
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');


// Add click event to hamburger button
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');

});