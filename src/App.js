import { AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import About from "./components/about"
import Blog from "./components/blog"
// Componenets imported for routing
import Main from "./components/main"
import Skills from "./components/skills"
import { lightTheme } from "./components/themes"
import Works from "./components/works"
import GlobalStyle from "./globalStyles"

function App() {
  const location = useLocation();

  return <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      {/* Routing here */}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/blog" component={Blog}></Route>
          <Route exact path="/works" component={Works}></Route>
          <Route exact path="/skills" component={Skills}></Route>
        </Switch>
      </AnimatePresence>
      {/* Routing here */}
    </ThemeProvider>
  </>
}

export default App
