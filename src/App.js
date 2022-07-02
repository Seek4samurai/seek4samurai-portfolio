import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router";
import { ThemeProvider } from "styled-components";
import About from "./components/about";
import Main from "./components/main";
import Morbin from "./components/morbin";
import SayHi from "./components/sayHi";
import Skills from "./components/skills";
import { lightTheme } from "./components/themes";
import Works from "./components/works";
import GlobalStyle from "./globalStyles";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        {/* Routing here */}
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main></Main>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/works" element={<Works></Works>}></Route>
            <Route path="/skills" element={<Skills></Skills>}></Route>
            <Route path="/morbin-time" element={<Morbin></Morbin>}></Route>
            <Route path="/sayHi" element={<SayHi></SayHi>}></Route>
          </Routes>
        </AnimatePresence>
        {/* Routing here */}
      </ThemeProvider>
    </>
  );
}

export default App;
