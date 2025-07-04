function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "c10c3b68e2815262ead2b370cffb98ae";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.cod === 200) {
        document.getElementById("result").innerHTML = `
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h2 class="text-xl font-semibold mb-2">${data.name}, ${data.sys.country}</h2>
            <p class="text-lg">🌡 Temperature: ${data.main.temp} °C</p>
            <p class="text-lg">🌥 Weather: ${data.weather[0].main}</p>
            <p class="text-gray-600">📝 Description: ${data.weather[0].description}</p>
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
    <div class="bg-red-100 text-red-700 p-4 rounded-md shadow-md relative">
      ${message}
      <button onclick="closeError()" class="absolute top-3 right-(1) text-xl font-bold hover:text-red-900">❌</button>
    </div>
  `;
}

function closeError() {
  document.getElementById("result").innerHTML = "";
}
