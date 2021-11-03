import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.scss";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import Hero from "./pages/Hero/Hero";
import User from "./pages/User/User";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route path="/user" component={User} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
