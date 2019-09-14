window.addEventListener('load', function () {
  let long;
  let lat;
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
          const { temperature, summery } = data.currently
        })
    })

  }
})