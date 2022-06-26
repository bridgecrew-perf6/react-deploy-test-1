import React from 'react'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import ThemeButton from './components/ThemeButton'

const App = () => {

  const [isDark, setIsDark] = React.useState(true)

  const colors = {
      c1: ["rgb(14, 15, 18)", "rgb(230, 240, 255)"],
      c2: ["rgb(25, 24, 30)", "rgb(179, 184, 217)"],
      c3: ["rgb(34, 33, 37)", "rgb(205, 205, 235)"],
      c4: ["rgb(49, 48, 54)", "rgb(235, 235, 255)"]
  }

  document.body.style.background = colors.c1[isDark ? 0 : 1]

  return (
    <div className="App">
      <ThemeButton bgColor={colors.c3[isDark ? 0 : 1]} setter={setIsDark} textColor={isDark ? "white" : "black"}/>
      <Info bgColor={colors.c4[isDark ? 0 : 1]} textColor={isDark ? "white" : "black"} btnColors={isDark ? ["white", "aquamarine"] : ["white", "rgb(145, 155, 227)"]} />
      <About bgColor={colors.c3[isDark ? 0 : 1]} textColor={isDark ? "white" : "black"} />
      <Interests bgColor={colors.c3[isDark ? 0 : 1]} textColor={isDark ? "white" : "black"}/>
      <Footer bgColor={colors.c2[isDark ? 0 : 1]}/>
    </div>
  );
}

export default App;