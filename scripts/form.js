// Update the current year for the copyright notice
const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

// Update the last modified date of the document
const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Modification: ${lastModified}`;

// products array
const products = [
    { 
    id: "fc-1888", 
    name: "flux capacitor", 
    averagerating: 4.5
    },
    { 
        id: "fc-2050", 
        name: "power laces", 
        averagerating: 4.7 
    },
    { 
        id: "fs-1987", 
        name: "time circuits", 
        averagerating: 3.5 
    },
    { 
        id: "ac-2000", 
        name: "low voltage reactor", 
        averagerating: 3.9 
    },
    { 
        id: "jj-1969", 
        name: "warp equalizer", 
        averagerating: 5.0 
    }
];

// populate the select element with product options
const selectElement = document.getElementById("product-name");

if (!selectElement) {
    console.error("Select element with id 'product-name' not found in the document.");
} else {                

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id; // the value is the product ID for form submission
    option.textContent = product.name; // the visible text is the product name
    selectElement.appendChild(option);
});
}

