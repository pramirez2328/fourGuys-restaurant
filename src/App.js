import Main from "./components/Main";
import Footer from "./components/Footer";
import Hamburgers from "./components/Hamburgers";
import HotDogs from "./components/HotDogs";
import Dessert from "./components/Dessert";
import Drinks from "./components/Drinks";
import "./style/app.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <>
          <div id="app">
            <Route path="/" component={Main} exact />
            <Route path="/hamburgers" component={Hamburgers} />
            <Route path="/hotdogs" component={HotDogs} />
            <Route path="/dessert" component={Dessert} />
            <Route path="/drinks" component={Drinks} />
          </div>
        </>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
