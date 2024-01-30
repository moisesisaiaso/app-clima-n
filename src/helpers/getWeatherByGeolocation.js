import axios from "axios";

export const getWeatherByGeolocation = async (coords) => {
    const apiKey = "f5933f752d0fa11a26c9294ed2447805";
    const lang = "sp";
    const { latitude: lat, longitude: lon } = coords;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=${lang}`;

    const resp = await axios
        .get(url)
        .then(({ data }) => data)
        .catch((err) => console.log(err));

    const { name, coord, sys, weather, wind, clouds, rain, main, timezone } = resp;

    console.log(resp);

    return { name, coord, sys, weather, wind, clouds, rain, main, timezone };

    // const WeatherData =  { name, sys, weather, wind, clouds, main }
};
