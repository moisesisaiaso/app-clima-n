import fondo1 from "../assets/img/fondos/fondo1.jpg";
import fondo2 from "../assets/img/fondos/fondo2.jpg";
import fondo3 from "../assets/img/fondos/fondo3.jpg";
import fondo4 from "../assets/img/fondos/fondo4.jpg";
import fondo5 from "../assets/img/fondos/fondo5.jpg";
import fondo6 from "../assets/img/fondos/fondo6.jpg";
import fondo7 from "../assets/img/fondos/fondo7.jpg";
import fondo8 from "../assets/img/fondos/fondo8.jpg";
import fondo9 from "../assets/img/fondos/fondo9.jpg";
import fondo10 from "../assets/img/fondos/fondo10.jpg";
import fondo11 from "../assets/img/fondos/fondo11.jpg";
import fondo12 from "../assets/img/fondos/fondo12.jpg";
import fondo13 from "../assets/img/fondos/fondo13.jpg";
import fondo14 from "../assets/img/fondos/fondo14.jpg";
import fondo15 from "../assets/img/fondos/fondo15.jpg";
import fondo16 from "../assets/img/fondos/fondo16.jpg";
import fondo17 from "../assets/img/fondos/fondo17.jpg";

const fondos = [
    fondo1,
    fondo2,
    fondo3,
    fondo4,
    fondo5,
    fondo6,
    fondo7,
    fondo8,
    fondo9,
    fondo10,
    fondo11,
    fondo12,
    fondo13,
    fondo14,
    fondo15,
    fondo16,
    fondo17,
];

export const getRandomBackground = () => {
    const indexRandom = Math.floor(Math.random() * fondos.length);

    const fondo = fondos[indexRandom];
    return fondo;
};
