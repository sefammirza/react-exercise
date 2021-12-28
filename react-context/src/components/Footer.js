import React from 'react'

const Footer = ({theme, setTheme}) => {

    const switchTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <div>
            footer component<br/>
            <button onClick={switchTheme}>Swich theme</button>
        </div>
    )
}

export default Footer
