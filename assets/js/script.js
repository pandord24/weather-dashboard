const apikey="6cb5d20bf68d634f038d25acd4ee98b3"

function handleSubmit (){
    const searchEl=document.querySelector("#search")
    const city=searchEl.value.trim()
    if(!city)return
    fetchWeather(city)
    searchEl.value=""
}

function fetchWeather(city){
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?appid=${apikey}&q=${city}&units=imperial`;
    fetch(apiUrl).then(responds=>responds.json()).then(data=>{
        console.log (data)
        const {lat,lon}=data.coord
        const apiForcastUrl=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apikey}`;
        fetch(apiForcastUrl).then(responds=>responds.json()).then(data=>{
            console.log (data)
        })
    })
}


document.querySelector("#searchbtn").addEventListener("click",handleSubmit)