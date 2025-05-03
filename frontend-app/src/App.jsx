import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRoutes from './allRoutes/AllRoutes'
import Footer from './components/Footer'
import { themeContext } from './context/ThemeContextProvider'

function App() {
  const context=useContext(themeContext);
  console.log("context",context);

  return (
    <div className="App" style={{ backgroundColor: context?.theme?.backGroundColor || 'white' }}>
      <button onClick={context.toggleTheme} className="toggleTheme-btn">
        {context?.theme?.backGroundColor == "black"
          ? "Enable light mode"
          : "Enable dark mode"}
      </button>
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App
