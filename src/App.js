import GlobalStyle from "./globalStyles"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/themes"
import { Route, Switch } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

// Componenets imported for routing
import Main from "./components/Main"
import about from "./components/about"
import blog from "./components/blog"
import works from "./components/works"
import skills from "./components/skills"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"

function App() {
  const location = useLocation();

  return <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      {/* Routing here */}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/about" component={about}></Route>
          <Route exact path="/blog" component={blog}></Route>
          <Route exact path="/works" component={works}></Route>
          <Route exact path="/skills" component={skills}></Route>
        </Switch>
      </AnimatePresence>
      {/* Routing here */}
    </ThemeProvider>
  </>
}

export default App
