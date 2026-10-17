async function getWeatherData() {
    var weatherApikey='126f9b2a61244389b05185423262909'
    var weatherApiCity='Asyut'
    var weatherApiUrl=`http://api.weatherapi.com/v1/current.json?key=${weatherApikey}&q=${weatherApiCity}`
   var response=await fetch(weatherApiUrl)
   var data= await response.json()
   
 document.querySelector('#temp img').setAttribute('src', `https:${data.current.condition.icon}`)
document.querySelector('#temp img').setAttribute('title', data.current.condition.text)
document.querySelector('#temp h2').innerHTML = `${data.current.temp_c}&deg; C`
document.querySelector('#temp h3').innerText = data.location.name
}