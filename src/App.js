import GlobalStyle from "./globalStyles"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/themes"
import { Route, Switch } from "react-router-dom"

// Componenets imported for routing
import Main from "./components/Main"
import about from "./components/about"
import blog from "./components/blog"
import works from "./components/works"
import skills from "./components/skills"

function App() {
  return <>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>
      {/* Routing here */}
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/about" component={about}></Route>
        <Route exact path="/blog" component={blog}></Route>
        <Route exact path="/works" component={works}></Route>
        <Route exact path="/skills" component={skills}></Route>
      </Switch>
      {/* Routing here */}
    </ThemeProvider>
  </>
}

export default App
