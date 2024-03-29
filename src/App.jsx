import { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
// import Works from "./components/works/Works"
import Aboutme from "./components/aboutme/Aboutme"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import "./app.scss"


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <div className="sections">
      <Intro />
      <Aboutme/>
      <Contact />
    </div>
    </div>
  );
}
export default App;