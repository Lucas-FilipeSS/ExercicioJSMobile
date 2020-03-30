const url = 'https://ipinfo.io ';

function GetData() {

  fetch('https://ipinfo.io/json')
    .then(function (response) {
      response.json().then(function (data) {
        console.log(data);
        document.getElementById('ip').innerHTML = 'IP: ' + data.ip;
        document.getElementById('hostname').innerHTML = 'Hostname: ' + data.hostname;
        document.getElementById('city').innerHTML = 'CITY: ' + data.city;
        document.getElementById('region').innerHTML = 'Region: ' + data.region;
        document.getElementById('country').innerHTML = 'Country: ' + data.country;
        document.getElementById('loc').innerHTML = 'LOC: ' + data.loc;
        document.getElementById('org').innerHTML = 'ORG: ' + data.org;
        document.getElementById('postal').innerHTML = 'Postal: ' + data.postal;
        document.getElementById('timezone').innerHTML = 'Timezone: ' + data.timezone;
        document.getElementById('readme').innerHTML = 'Readme: ' + data.readme;
      });
    })
    .catch(function (err) {
      console.error('Failed retrieving information', err);
    });

}


