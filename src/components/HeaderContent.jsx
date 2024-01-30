import headerStyles from "../assets/styles/headerStyles.module.css";
import { useEffect, useState } from "react";

import { weatherMain } from "../helpers/iconsWeatherMain";

export const HeaderContent = ({ weatherData }) => {
    const { name, weather, main, sys, timezone } = weatherData;

    const [temperature, setTemperature] = useState();

    const [isCelsius, setIsCelsius] = useState(true);
    const temperatureC = Math.round(main.temp);
    const temperatureF = Math.round(temperatureC * 1.8 + 32);

    /* obtener icono del clima */
    const icon = weather[0].main;
    console.log(icon);
    const iconWeather = weatherMain[icon];

    useEffect(() => {
        setTemperature(temperatureC);
    }, [temperatureC]);

    useEffect(() => {
        if (isCelsius === true) {
            setTemperature(temperatureC);
        } else {
            setTemperature(temperatureF);
        }
    }, [isCelsius]);

    const handleButtom = () => {
        setIsCelsius(!isCelsius);
    };

    console.log(weatherData);

    return (
        <>
            <section className={headerStyles.header__content}>
                <h1 className={headerStyles.header__title}>
                    {name} - {sys.country}{" "}
                </h1>

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
