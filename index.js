const API_KEY = "";  //insert here your API key from https://api.openweathermap.org
const card = document.getElementById("card");
const submit = document.getElementById("submit");
const cityInput = document.getElementById("cityInput");
const form = document.querySelector('.needs-validation');

const getWeather = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=cz&units=metric`);

        if (!response.ok) {
            throw new Error("Chyba s načítáním dat: " + response.statusText);
        }

        const data = await response.json();


        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        card.classList.remove("d-none");
        const {clouds, main, name, weather, wind} = data;

        document.getElementById("city").textContent = name;
       document.getElementById("desc").textContent = weather[0].description; 
       document.getElementById("cloudiness").textContent = clouds.all + " %";         
       document.getElementById("humidity").textContent = main.humidity + " %";
       document.getElementById("feels-like").textContent = main.feels_like + " °C";      
       document.getElementById("temp").textContent = main.temp + " °C";       
    } catch (error) {
        console.error("Chyba při načítání dat:", error);
        alert("Město nebylo nalezeno.")
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.checkValidity() === false) {
        form.classList.add('was-validated');
    } else {
        const city = cityInput.value.trim();
        getWeather(city);
    }
})