
// for map link --> src="https://maps.google.com/maps?q=pune&t=&z=13&ie=UTF8&iwloc=&output=embed"

  // for current location link -->  https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={APIkey}

  //   const url =
  //     "https://api.openweathermap.org/data/2.5/weather?q=nashik&appid=6d4fd7a03a80a14383e893b863978c75";

  function getData() {
    let city = document.getElementById("city").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d4fd7a03a80a14383e893b863978c75`;

    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        append(res);
        console.log(res);
      })
      .catch(function (err) {
        console.log("an error happend");
      });
  }

  function getWheatherData(lat, lon) {
    let city = document.getElementById("city").value;

    const url = ` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6d4fd7a03a80a14383e893b863978c75`;

    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        append(res);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  function append(data) {
    let container = document.getElementById("container");
    let map = document.getElementById("gmap_canvas");

    container.innerHTML = null;

    let city = document.createElement("p");
    city.innerText = `City : ${data.name}`;

    let current = document.createElement("p");
    current.innerText = `Current Temp : ${data.main.feels_like} Deg C`;

    let min = document.createElement("p");
    min.innerText = `Min Temp : ${data.main.temp_min} Deg C`;

    let max = document.createElement("p");
    max.innerText = `Max Temp : ${data.main.temp_max} Deg C`;

    let humidity = document.createElement("p");
    humidity.innerText = `Humidity : ${data.main.humidity} g.m^-3`;

    container.append(city, current, min, max, humidity);

    map.src = `https://maps.google.com/maps?q=${data.name}z=13&ie=UTF8&iwloc=&output=embed`;
  }

  function getWeather() {
    navigator.geolocation.getCurrentPosition(success);

    function success(position) {
      const crd = position.coords;

      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);

      getWheatherData(crd.latitude, crd.longitude);
    }
  }