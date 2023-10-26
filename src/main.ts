import './style.css'
const apikey:string="22c2d5e6b1d7cd64af48492d38f6b406";
const apiUrl:string="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const defaultCity:string = 'Lagos'; 

const searchBox = document.querySelector(".search input") as HTMLInputElement
const searchBtn = document.querySelector(".search button")as HTMLButtonElement
const weatherIcon = document.querySelector(".weather-icon")as HTMLImageElement

async function checkWeather(city:string): Promise<any> {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

 if(response.status == 404){
    /* document.querySelector(".error").style.display="block" */
    const errorElement: HTMLElement | null = document.querySelector(".error");

if (errorElement) {
  errorElement.style.display = "block";
}

} else{
    const data =await response.json();
    console.log(data)
   /*  document.querySelector(".city").innerHTML = data.name; */
   const cityElement: HTMLElement | null = document.querySelector(".city");

if (cityElement) {
  cityElement.innerHTML = data.name;
}
    /* document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"; */
    const tempElement = document.querySelector(".humidity") as HTMLElement;

if (tempElement) {
  tempElement.innerHTML = Math.round(data.main.temp) + "°C";
}

    /* document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; */
    const humidityElement = document.querySelector(".humidity") as HTMLElement;

if (humidityElement) {
  humidityElement.innerHTML = `${data.main.humidity}` + "%";
}
    /* document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; */
    const windElement = document.querySelector(".wind") as HTMLElement;
if (windElement) {
  windElement.innerHTML = `${data.wind.speed} km/h`;
}
    if(data.weather[0].main =="Clouds"){
      weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png"   
    }
    else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png"   
    }
    else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png"   
    }
    else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png"   
    }
   /*  document.querySelector(".error").style.display="none"  */ 
   const errorElement: HTMLElement | null = document.querySelector(".error");

if (errorElement) {
  errorElement.style.display = "none";
}

}
   
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
checkWeather(defaultCity)

