import "./App.css";
import { Container } from "react-bootstrap";
import MainNavbar from "./components/MainNavbar";
import { HomePage, WorkPage, ContactPage } from "./screens";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Container fluid>
      <MainNavbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/work" component={WorkPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
}

export default App;
