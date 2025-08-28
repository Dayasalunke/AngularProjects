function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "c10c3b68e2815262ead2b370cffb98ae";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.cod === 200) {
        document.getElementById("result").innerHTML = `
          <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-gray-900 dark:text-white">
            <h2 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">${data.name}, ${data.sys.country}</h2>
            <p class="text-lg text-gray-800 dark:text-gray-200"><i class="fa-solid fa-temperature-half"></i> Temperature: ${data.main.temp} °C</p>
            <p class="text-lg text-gray-800 dark:text-gray-200"><i class="fa-solid fa-cloud-rain"></i>  Weather: ${data.weather[0].main}</p>
            <p class="text-gray-600 dark:text-gray-400"><i class="fa-solid fa-pen-to-square"></i> Description: ${data.weather[0].description}</p>
          </div>
        `;
      } else {
        showError("City not found!");
      }
    });

  document.getElementById("cityInput").value = "";
}

function showError(message) {
  document.getElementById("result").innerHTML = `
    <div class="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 p-4 rounded-md shadow-md relative">
      ${message}
      <button onclick="closeError()" class="absolute top-3 right-1 text-xl font-bold hover:text-red-900 dark:hover:text-red-100">❌</button>
    </div>
  `;
}

function closeError() {
  document.getElementById("result").innerHTML = "";
}

// Dark mode functionality
function toggleDarkMode() {
  const body = document.body;
  const toggleButton = document.getElementById("darkModeToggle");
  const icon = toggleButton.querySelector("i");
  
  // Toggle dark class on body
  body.classList.toggle("dark");
  
  // Update button icon and text
  if (body.classList.contains("dark")) {
    icon.className = "fa-solid fa-sun";
    toggleButton.title = "Switch to Light Mode";
  } else {
    icon.className = "fa-solid fa-moon";
    toggleButton.title = "Switch to Dark Mode";
  }
  
  // Save preference to localStorage
  localStorage.setItem("darkMode", body.classList.contains("dark"));
}

// Load dark mode preference on page load
document.addEventListener("DOMContentLoaded", function() {
  const savedDarkMode = localStorage.getItem("darkMode");
  const toggleButton = document.getElementById("darkModeToggle");
  const icon = toggleButton.querySelector("i");
  
  if (savedDarkMode === "true") {
    document.body.classList.add("dark");
    icon.className = "fa-solid fa-sun";
    toggleButton.title = "Switch to Light Mode";
  } else {
    toggleButton.title = "Switch to Dark Mode";
  }
});