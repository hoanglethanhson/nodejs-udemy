const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=dc78032079a8f32f18d3172514542039&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.current.weather_descriptions + '. It is currently ' + response.body.current.temperature + ' degrees now. It feels like '
        + response.body.current.feelslike + ' degrees.');
})