window.addEventListener('load', function () {
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description')
  let temperatureInDegree = document.querySelector('.temperature-in-degree')
  let locationTimezone = document.querySelector('.location-timezone')
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      long = position.coords.longitude
      lat = position.coords.latitude
      const proxy = 'https://cors-anywhere.herokuapp.com/'
      const api = `${proxy}https://api.darksky.net/forecast/8928ec0cefa9875c61895d8e9b9095a5/${lat},-${long}`

      fetch(api)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data)
          const { temperature, summary, icon } = data.currently
          const timezone = data.timezone
          //set dom elements from the api
          temperatureInDegree.textContent = temperature
          temperatureDescription.textContent = summary
          locationTimezone.textContent = timezone
          // SET ICON
          setIcon(icon, document.querySelector('.icon'))


        })
    })
    function setIcon(icon, iconID) {
      var skycons = new Skycons({ "color": "white" });
      const currentIcon = icon.replace(/-/g, '_').toUpperCase()
      skycons.play();
      return skycons.set(iconID, Skycons[currentIcon])
    }
  }
})