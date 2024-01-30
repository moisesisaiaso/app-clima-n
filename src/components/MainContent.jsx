import mainStyles from "../assets/styles/mainStyles.module.css";
import { iconsExtra } from "../helpers/iconsExtra";

export const MainContent = ({ weatherData }) => {
    const { direccion, humedad, nubosidad, latLon, presion, visibilidad, velocidadV, rafagaV } =
        iconsExtra;
    const { wind, clouds, main, coord, visibility } = weatherData;
    return (
        <>
            <section className={mainStyles.main__content}>
                <article className={mainStyles.content__group}>
                    <ul className={mainStyles.group__list}>
                        <li className={mainStyles.list__data}>
                            <div>
                                <img src={direccion} alt="icon" />
                                <span>{wind.deg}°</span>
                            </div>
                            <p>
                                <p>Dirección Del Viento</p>
                            </p>
                        </li>
                        <li className={mainStyles.list__data}>
                            <div>
                                <img src={nubosidad} alt="icon" />
                                <span>{clouds.all} %</span>
                            </div>
                            <p>
                                <p>Nubosidad</p>
                            </p>
                        </li>
                    </ul>
                    <ul className={mainStyles.group__list}>
                        <li className={mainStyles.list__data}>
                            <div>
                                <img src={humedad} alt="icon" />
                                <span>{main.humidity} %</span>
                            </div>
                            <p>
                                <p>Humedad</p>
                            </p>
                        </li>
                        <li className={mainStyles.list__data}>
                            <div>
                                <img src={latLon} alt="icon" />
                                <span>
                                    {coord.lon} - {coord.lat}
                                </span>
                            </div>
                            <p>
                                <p>Latitud-Longitud</p>
                            </p>
                        </li>
                    </ul>
                </article>

                <article className={mainStyles.content__group}>
                    <ul className={mainStyles.group__list}>
                        <li className={mainStyles.list__data}>
                            <div>
                                <img src={presion} alt="icon" />
                                <span>{main.pressure} hPa</span>
                            </div>
                            <p>Presión Atmosférica</p>
                        </li>
                        <li className={mainStyles.list__data}>
                            <div>
                                <img src={velocidadV} alt="icon" />
                                <span>{wind.speed} m/s</span>
                            </div>
                            <p>Velocidad Del Viento</p>
                        </li>
                    </ul>
                    <ul className={mainStyles.group__list}>
                        <li className={mainStyles.list__data}>
                            <div>
                                <img src={visibilidad} alt="icon" />
                                <span>{visibility} km</span>
                            </div>
                            <p> Visibilidad</p>
                        </li>
                        <li className={mainStyles.list__data}>
                            <div>
                                <img src={rafagaV} alt="icon" />
                                <span>{wind.gust} m/s</span>
                            </div>
                            <p>Ráfaga De Viento</p>
                        </li>
                    </ul>
                </article>
            </section>
        </>
    );
};
