import React from "react";
import { Switch, Route} from "react-router-dom";

import Header from "./Components/Header";
import Cart from "./pages/Cart"
import About from "./pages/About"
import Services from "./pages/Services"
import Main from "./Components/Main";
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/about" component={About}/>
          <Route path="/services" component={Services}/>
          <Route path="/cart" component={Cart}/>
      </Switch>

        <Footer/>
    </div>
  );
}

export default App;
