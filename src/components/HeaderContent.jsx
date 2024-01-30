import headerStyles from "../assets/styles/headerStyles.module.css";
import { useState } from "react";

import { weatherMain } from "../helpers/iconsWeatherMain";

export const HeaderContent = ({ weatherData }) => {
    const { name, weather, main, sys, timezone } = weatherData;
    const temperatureC = Math.round(main.temp);
    const [temperature, setTemperature] = useState(temperatureC);
    const [isCelsius, setIsCelsius] = useState(true);

    const temperatureF = Math.round(temperatureC * 1.8 + 32);

    /* obtener icono del clima */
    const icon = weather[0].main;
    console.log(icon);
    const iconWeather = weatherMain[icon];

    /* // Convertir la hora del amanecer y del atardecer a milisegundos y ajustarlas a la zona horaria de la ciudad
    let sunrise = sys.sunrise * 1000 + timezone * 1000;
    let sunset = sys.sunset * 1000 + timezone * 1000;

    // Obtener la hora actual en milisegundos y ajustarla a la zona horaria de la ciudad
    let now = new Date().getTime() + timezone * 1000 - new Date().getTimezoneOffset() * 60 * 1000;

    if (now >= sunrise && now <= sunset) {
        // Verificar si es de día o de noche
        console.log("Es de día");
    } else {
        console.log("Es de noche");
    }
 */
    const handleButtom = () => {
        setIsCelsius(!isCelsius);

        if (isCelsius === true) {
            setTemperature(temperatureF);
        } else {
            setTemperature(temperatureC);
        }
    };

    console.log(weatherData);

    return (
        <>
            <section className={headerStyles.header__content}>
                <h1 className={headerStyles.header__title}>{name}</h1>

                <article className={headerStyles.header__temperature}>
                    <div className={headerStyles.temperature__group}>
                        <h2 className={headerStyles.temperature__value}>
                            {temperature}
                            {isCelsius ? <span> °C</span> : <span> °F</span>}
                        </h2>

                        <button onClick={handleButtom}>
                            {isCelsius ? <span> °C</span> : <span>°F</span>}
                        </button>
                    </div>

                    <div className={headerStyles.description__group}>
                        <img src={iconWeather} alt="clima" className={headerStyles.icon__img} />

                        <p className={headerStyles.temperature__description}>
                            {weather[0].description.toUpperCase()}
                        </p>
                    </div>
                </article>
            </section>
        </>
    );
};
