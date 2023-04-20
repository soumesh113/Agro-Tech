import request from "request"
const forecast = (longitude, latitude, callback)=> {
     const url = 'http://api.weatherstack.com/current?access_key=e9a5f89e555539ee3af4aac44f730824&query=' + latitude +',' + longitude + '&units=f'
     const json = true
     request({url, json}, (error, {body} = {})=> {
    
        if(error)
        {
            callback('Cannot connect to weather service', undefined)
        }
        else if(body.error)
        {
            callback('Cannot find location', undefined)
        }
        else
        {
            data = {temp: body.current.temperature, humid: body.current.humidity}
            callback(undefined, data)}
     })
}
module.exports = forecast