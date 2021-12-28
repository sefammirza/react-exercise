import React, { useState } from 'react'
import { MainContext, useContext } from '../context'

const Header = () => {

    
    const {theme, logoText} = useContext(MainContext)

    return (
        <div>
            <h3>{logoText}</h3>
            Current Theme = {theme}
        </div>
    )
}

export default Header
