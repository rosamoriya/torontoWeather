$(document).ready(function () {
  const apiKey = "55a7519429753b5511141caeb2141a4c";
  const url =
    // API URL with parameters for Toronto, metric units, and API key
    "https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=" +
    apiKey;

  // AJAX request for the weather data
  $.get(url, function (data) {
    // Update location with city and country
    $("#location").text(data.name + ", " + data.sys.country);

    // Update temperature
    $("#temp").text(data.main.temp);

    // Update weather conditions
    $("#conditions").text(data.weather[0].main);

    // Source and alt text for weather icon
    $("#icon").attr(
      "src",
      "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
    );
    $("#icon").attr("alt", data.weather[0].description);
  }).fail(function () {
    // Error handling if the API call fails
    console.error("Could not retrieve data from the API.");
  });
});
