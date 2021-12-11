import React, {Component, createContext} from 'react'


export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 

        isLightTheme : true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee'},
        dark: {syntax: '#ddd', ui: '#333', bg:'#555'}

    }
    render() {
        return (

            <ThemeContextProvider value={{...this.state}}>
                {this.props.children}
            </ThemeContextProvider>

          );
    }
}

export default ThemeContextProvider;