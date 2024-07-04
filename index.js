const API_KEY = "";  //insert here your API key from https://api.openweathermap.org
const card = document.getElementById("card");
const submit = document.getElementById("submit");
const cityInput = document.getElementById("cityInput");

const getWeather = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=cz&units=metric`);
        const data = await response.json();
        card.classList.remove("d-none");
        const {clouds, main, name, weather, wind} = data;

        console.log(main);

        document.getElementById("city").textContent = name;
       document.getElementById("desc").textContent = weather[0].description; 
       document.getElementById("cloudiness").textContent = clouds.all + " %";         
       document.getElementById("humidity").textContent = main.humidity + " %";
       document.getElementById("feels-like").textContent = main.feels_like + " °C";      
       document.getElementById("temp").textContent = main.temp + " °C";       
    } catch (error) {
        console.log(error);
    }
}

submit.addEventListener("click", () => {
    getWeather(cityInput.value)
})
