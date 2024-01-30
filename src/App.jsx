import generalStyles from "./assets/styles/generalStyles.module.css";
import headerStyles from "./assets/styles/headerStyles.module.css";
import mainStyles from "./assets/styles/mainStyles.module.css";
import { useEffect, useState } from "react";
import { getWeatherByGeolocation } from "./helpers/getWeatherByGeolocation";
import { SearchByCity } from "./components/SearchByCity";
import { getWeatherByCity } from "./helpers/getWeatherByCity";
import { HeaderContent } from "./components/HeaderContent";

function App() {
    const [weatherData, setWeatherData] = useState();
    const [city, setCity] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        /* Obtener latitud, longitud */
        const success = async (pos) => {
            const crd = pos.coords;
            const weatherData = await getWeatherByGeolocation(crd);
            setWeatherData(weatherData);
            setIsLoading(false);
        };
        /* Obtener  geolocation desde el navegador */
        navigator.geolocation.getCurrentPosition(success);
        console.log("hola");
    }, []);

    const getWeather = async () => {
        const weatherData = await getWeatherByCity(city);
        if (weatherData) {
            setWeatherData(weatherData);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (city) {
            getWeather();
        }
    }, [city]);

    /* url para el icono */
    // `http://openweathermap.org/img/w/${nombreIcono}.png`;

    console.log(weatherData);

    return (
        <>
            <div className={generalStyles.weatherContainer}>
                {isLoading ? (
                    <div className={generalStyles.carga}>
                        <h1>CARGANDO...</h1>
                    </div>
                ) : (
                    <>
                        <header className={headerStyles.weatherContainer__header}>
                            {/* <h1 className={generalStyles.header__title}>app del clima</h1> */}
                            <SearchByCity setCity={setCity} />

                            <HeaderContent weatherData={weatherData} />
                        </header>
                        <main className={mainStyles.weatherContainer__main}></main>
                        <footer></footer>
                    </>
                )}
            </div>
        </>
    );
}

export default App;

/* olaa */

/* https://www.xnxx.com/search/mayrin+villanueva/3 */
