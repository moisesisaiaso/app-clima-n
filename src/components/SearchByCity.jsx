import { useRef } from "react";
import headerStyles from "../assets/styles/headerStyles.module.css";
import searchIcon from "../assets/img/search.png";

export const SearchByCity = ({ setCity }) => {
    const inputText = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const inputValue = inputText.current.value;
        const city = inputValue.trim();
        setCity(city);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={headerStyles.header__form}>
                <input
                    type="text"
                    ref={inputText}
                    placeholder="Ingresa ciudad o país"
                    className={headerStyles.header__search}
                />
                <img src={searchIcon} alt="searchIcon" className={headerStyles.header__icon} />
            </form>
        </>
    );
};
