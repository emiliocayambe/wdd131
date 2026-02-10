// Update the current year for the copyright notice
const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

// Update the last modified date of the document
const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Modification: ${lastModified}`;

// 1. get the current number of reviews from localStorage, or start at 0 if it doesn't exist
let numReviews = Number(window.localStorage.getItem("reviews-ls")) || 0;

// 2. Increment the number of reviews by 1
numReviews+= 1;

// 3. Store the updated number back in localStorage
window.localStorage.setItem("reviews-ls", numReviews);

// 4. Update the review count display on the page
const countDisplay = document.querySelector("#review-count");
if (countDisplay) {
    countDisplay.textContent = numReviews;
}

// 5. Update the current year in the footer (Consistency)
document.getElementById("currentyear").textContent = new Date().getFullYear();