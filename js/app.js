const loadData = () => {
    const searchInput = document.getElementById("search-input");
    const searchText = searchInput.value;

    searchInput.value = "";
    const myAPIKey = "03631ce7e3945a563f59577c29cd7090";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${myAPIKey}&units=metric`
    // load data 
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))

}
// function to set inner text in html

const setInnerText = (id, value) => {
    document.getElementById(id).innerText = value;

}

const displayTemperature = (temperature) => {
    console.log(temperature);
    setInnerText("city-name", temperature.name);
    setInnerText("temp", temperature.main.temp);
    setInnerText('description', temperature.weather[0].description);

    // set image
    const imageId = temperature.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${imageId}@2x.png`;
    console.log(iconUrl);

    const img = document.getElementById('icon-image');
    img.setAttribute('src', iconUrl);


}