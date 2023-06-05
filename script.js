function getWeather() {
    var city = document.getElementById("city").value;
    var apiKey = "9bf3ae84970f4c49ae7180601230506"; // Replace with your actual API key
    var url = "https://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + city;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.getElementById("city-name").textContent = data.location.name + ", " + data.location.country;
        document.getElementById("temperature").textContent = "Temperature: " + data.current.temp_c + "°C";
        document.getElementById("description").textContent = "Condition: " + data.current.condition.text;
      })
      .catch(error => {
        console.log("Error:", error);
        document.getElementById("city-name").textContent = "Error fetching weather data";
        document.getElementById("temperature").textContent = "";
        document.getElementById("description").textContent = "";
      });
  }
  