const Geocodio = require('geocodio-library-node');
const geocoder = new Geocodio('67f1a2e46ea336a676f41f6b1b761eee6eb6433');
const geocode = (address,callback) => {
  
    geocoder
      .geocode(address)
      .then(response => {

        console.log('response',response);
        if(response) callback(undefined,{
            latitude:response.results[0].location.lat,
            longitude:response.results[0].location.lng

        })
      }).catch(error => {
        if(error) callback('unable to find location',undefined)
      });
}

module.exports = geocode;