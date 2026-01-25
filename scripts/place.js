// Actualizar fechas del pie de página
document.getElementById("lastModified").innerHTML = document.lastModified;
// use the date object  
const today = new Date();
document.getElementById("currentyear").innerHTML = today.getFullYear();

// Configuración de variables de clima
const temp = 28; // Temperatura estática en °C
const windSpeed = 10; // Velocidad del viento en km/h

// Función para calcular sensación térmica (Fórmula en Celsius)
function calculateWindChill(t, s) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);
}

const windChillElement = document.getElementById("windchill");

// Condición: Temp <= 10°C y Viento > 4.8 km/h para sistema métrico
if (temp <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = calculateWindChill(temp, windSpeed) + "°C";
} else {
    windChillElement.textContent = "N/A";
}

