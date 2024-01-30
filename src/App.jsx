import { dataFake } from "./helpers/fake";

import generalStyles from "./assets/styles/generalStyles.module.css";
import headerStyles from "./assets/styles/headerStyles.module.css";
import mainStyles from "./assets/styles/mainStyles.module.css";
import footerStyles from "./assets/styles/footerStyles.module.css";

import { useEffect, useState } from "react";
import { getWeatherByGeolocation } from "./helpers/getWeatherByGeolocation";
import { SearchByCity } from "./components/SearchByCity";
import { getWeatherByCity } from "./helpers/getWeatherByCity";
import { HeaderContent } from "./components/HeaderContent";
import { MainContent } from "./components/MainContent";
import { FooterContent } from "./components/FooterContent";
import { getRandomBackground } from "./helpers/randomIndex";

function App() {
    const [weatherData, setWeatherData] = useState();
    const [city, setCity] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [fondo, setFondo] = useState();

    useEffect(() => {
        /* imagen random */
        const getFondo = getRandomBackground();
        setFondo(getFondo);

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
            /* imagen random */
            const getFondo = getRandomBackground();
            setFondo(getFondo);

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
            <img src={fondo} alt="fondoAleatorio" className={generalStyles.fondo} />
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
                        <main className={mainStyles.weatherContainer__main}>
                            <MainContent weatherData={weatherData} />
                        </main>
                        <footer className={footerStyles.weatherContainer__footer}>
                            <FooterContent />
                        </footer>
                    </>
                )}
            </div>
        </>
    );
}

export default App;

/* olaa */

/* https://www.xnxx.com/search/mayrin+villanueva/3 */
