
const geocode = require('./utils/geocode')
const forcast = require('./utils/forecast')
// geocoder
//   .geocode('1109 N Highland St, Arlington, VA')
//   .then(response => {
//     console.log('res',response.results[0].location);
//   }).catch(error => {
//     console.error('error',error);
//   });
// const url = "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=13ca0c89d8cd04873921fbc32a542965&units=metric"
// request({url:url, json:true}, function (error, response, body) {
// //   console.log('error:', error); // Print the error if one occurred
// //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// //   console.log(`in this location temp is ${body.main.temp} celsius and rain chance is ${body.clouds.all}%`); // Print the HTML for the Google homepage.
// if (error) {
//     console.log('there is some error in whether app');
// } else if (response.body.cod !== 200) {
//     console.log(response.body.message);
// } else  {
//     console.log(`in this location temp is ${body.main.temp} celsius and rain chance is ${body.clouds.all}%`); 
// }
// });



geocode('1109 N Highland St, Arlington, VA',(error,data) => {
    if(error) {
        return console.log('error',error);
    }

    forcast(data.latitude,data.longitude,(error,data) => {
        if (error) {
            console.log('error',error);
        }
        else {
            console.log('data',data);
        }

    })
});