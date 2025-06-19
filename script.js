// This function gets called when the user clicks the "Get Weather" button
async function getWeather() {
  // Step 1: Get the city name that the user entered in the input field
  const city = document.getElementById("cityInput").value.trim();
  // Step 2: This is your API key from OpenWeatherMap
  const apiKey = "YOUR_API_KEY"; // <-- Replace with your actual key
  // Step 3: This is the correct URL to request weather data
  const url = "https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${apiKey}&units=metric";
// Step 4: If the city input is empty, show an alert and stop the function
  if (!city) {
    alert("Please enter a city name.");
    return;
  }
// Step 5: Try to fetch the weather data from the API
  try {
    const response = await fetch(url);
     // Step 6: If the response is not OK (like if the city doesn't exist), show an error
    if (!response.ok) throw new Error("City not found");
// Step 7: Convert the response into a JavaScript object
    const data = await response.json();
      // Step 8: Display the weather details in the HTML element with id="weatherResult"
    document.getElementById("weatherResult").innerHTML = `
      <p><strong>City:</strong> ${data.name}</p>
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    `;
  } catch (error) {
    // Step 9: If something goes wrong (like no internet or wrong city), show this message
    document.getElementById("weatherResult").innerHTML =
      <p style="color:red;">Error: ${error.message}</p>;
  }
}
