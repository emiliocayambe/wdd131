/* --- 1. FOOTER DATE UPDATES --- */

// Update the current year for the copyright notice
const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

// Update the last modified date of the document
const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = `Last Modification: ${lastModified}`;


/* --- 2. WEATHER & WIND CHILL LOGIC --- */

// Static weather values as per project requirements
const temp = 28; // Static temperature in °C
const windSpeed = 10; // Static wind speed in km/h

/**
 * Calculates the wind chill factor using the Celsius formula.
 * Formula: 13.12 + 0.6215T - 11.37V^0.16 + 0.3965TV^0.16
 * @param {number} t - Temperature
 * @param {number} s - Wind Speed
 * @returns {string} Calculated wind chill rounded to 1 decimal place.
 */
function calculateWindChill(t, s) {
    return (13.12 + (0.6215 * t) - (11.37 * Math.pow(s, 0.16)) + (0.3965 * t * Math.pow(s, 0.16))).toFixed(1);
}

// Select the display element
const windChillElement = document.querySelector("#windchill");

/**
 * Requirement Check: 
 * Temperature must be <= 10°C AND Wind Speed must be > 4.8 km/h 
 * to calculate a valid Wind Chill in the metric system.
 */
if (temp <= 10 && windSpeed > 4.8) {
    // If conditions are met, display the result
    windChillElement.textContent = `${calculateWindChill(temp, windSpeed)}°C`;
} else {
    // Since Guayaquil is 28°C, it should display "N/A"
    windChillElement.textContent = "N/A";
}