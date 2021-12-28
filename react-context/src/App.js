import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

import {MainContext} from "./context"



function App() {

  const [logoText, setLogoText] = useState("erbilen.net")
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const data = {
    theme,
    setTheme,
    logoText,
    setLogoText
  }


  return (
    <MainContext.Provider value={data}>
      <Header/>
      <Footer/>
    </MainContext.Provider>
  );
}

export default App;
