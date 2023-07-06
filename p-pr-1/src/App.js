import {Brand, CTA, Navbar, ScrollButton } from "./components";
import {Header, Blog, About, Features, Possibility, Footer} from "./containers"

import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <div>
          <Brand/>
          <About/>
          <Features/>
          <Possibility/>
          <CTA/>
          <Blog/>
          <Footer/>
      </div>
      <ScrollButton/>
    </div>
  );
}

export default App;
