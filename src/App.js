import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import About from "./components/about";
import Main from "./components/main";
import Morbin from "./components/morbin";
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
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Main}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/works" component={Works}></Route>
            <Route exact path="/skills" component={Skills}></Route>
            <Route exact path="/morbin-time" component={Morbin}></Route>
          </Switch>
        </AnimatePresence>
        {/* Routing here */}
      </ThemeProvider>
    </>
  );
}

export default App;
