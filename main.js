let auth_key = '6151f5af65d37fb32b129a1007489f23';
let lat, long, city, LocURL, URL;

let input = document.querySelector("input");
let btn = document.querySelector("button");
let curr_temp = document.querySelector(".box .upper .temperature .curr_temp");
let pressure = document.querySelector(".box .upper .other-factors .pressure")
let humidity =  document.querySelector(".box .upper .other-factors .humidity");
let feels_like = document.querySelector(".box .upper .temperature .feelsLike")



btn.addEventListener('click', ()=>{
    city = input.value 
    // LocURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${LocAuth_key}`

    // fetch(LocURL).then((value)=>{
    //     return value.json()
    // }).then((data)=>{
    //     lat = data.lat
    //     long = data.long
    // })


    // URL = `https://api.openweathermap.org/data/3.0/onecall/timemachine?lat=${lat}&lon=${long}&appid=${auth_key}`
    
    URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${auth_key}&units=metric`

    fetch(URL).then((value)=>{
        return value.json()
    }).then((data)=>{
        curr_temp.innerHTML = `<i class="fa-solid fa-cloud"></i> ${Math.round(data.main.temp)}C`
        feels_like.innerHTML = `Feels like ${Math.round(data.main.feels_like)} C`
        pressure.innerHTML = `Pressure: ${data.main.pressure}`
        humidity.innerHTML = `Humidity: ${data.main.humidity}`
        console.log(data)
    })

})










