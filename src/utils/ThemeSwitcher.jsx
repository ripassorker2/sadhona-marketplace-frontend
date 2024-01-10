"use client";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {LuSun} from "react-icons/lu";

const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme == "dark" ? (
                <LuSun size={18} />
            ) : (
                <BsFillMoonStarsFill size={18} />
            )}
        </button>
    );
};

export default ThemeSwitcher;
