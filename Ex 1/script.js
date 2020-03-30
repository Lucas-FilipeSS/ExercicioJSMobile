window.onload = function() {
  let target = document.getElementById('Map');
  let long = document.getElementById('long');
  let lat = document.getElementById('lat');
  var watchId;

  if ('geolocation' in navigator) {
    document.getElementById('askButton').addEventListener('click', function() {
      navigator.geolocation.getCurrentPosition(function(location) {
        long.innerHTML = ' Longitude: ' + location.coords.longitude;

        lat.innerHTML = 'Latitude: ' + location.coords.latitude;
      });
    });
  } else {
    target.innerText = 'API de Geolocalização não suportada';
  }
};
