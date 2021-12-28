import React from 'react'
import { MainContext, useContext } from '../context'

const ThemeSwitcher = () => {

    const {theme, setTheme} = useContext(MainContext)

    const switchTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <button onClick={switchTheme}>Swich theme</button>
    )
}

export default ThemeSwitcher
