import {useEffect, useState} from "react";
export const useDarkTheme = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    useEffect(() => {
        const isDarkTheme = localStorage.getItem("darkTheme");
        if (isDarkTheme === null) {
            const color = document.documentElement.style.getPropertyValue(
                "--background-color"
            );
            if (color === "#262626") setDarkTheme(true);
            return;
        }
        setDarkTheme(JSON.parse(isDarkTheme));
    }, []);
    const themeToggleHandler = () => {
        setDarkTheme(!darkTheme);
    };
    useEffect(() => {
        if (darkTheme) {
            document.documentElement.style.setProperty("--text-color", "white");
            document.documentElement.style.setProperty(
                "--background-color",
                "#262626"
            );
            document.documentElement.style.setProperty("--input-color", "#262626");
        } else {
            document.documentElement.style.setProperty("--text-color", "#262626");
            document.documentElement.style.setProperty("--background-color", "white");
            document.documentElement.style.setProperty("--input-color", "white");
        }
        localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
    }, [darkTheme]);
    return {darkTheme, themeToggleHandler}
}