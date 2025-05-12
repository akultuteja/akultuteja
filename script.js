async function getWeather() {
    const city = document.getElementById('city-input').value.trim();
    if (!city) {
      alert("Please enter a city name.");
      return;
    }
  
    const apiKey = '74d2d6a17759bc564c031f49ac4e0b97'; // Replace this
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (response.ok) {
        document.getElementById('city-name').textContent = data.name;
        document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').textContent = data.weather[0].description;
        document.getElementById('feels-like').textContent = `Feels like: ${Math.round(data.main.feels_like)}°C`;
document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
document.getElementById('wind').textContent = `Wind: ${(data.wind.speed * 3.6).toFixed(1)} km/h`; // convert m/s to km/h

        document.getElementById('weather-icon').src =
          `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementById('weather-result').classList.remove('hidden');
      } else {
        console.error("API error:", data);
        alert("Error: " + data.message);
        document.getElementById('weather-result').classList.add('hidden');
      }
    } catch (error) {
      console.error("Network or code error:", error);
      alert("Something went wrong.");
    }
  }
  