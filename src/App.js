import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./component/Header/Header";
import Chapters from "./component/Chapters/Chapters";
import Arcs from "./component/Arcs/Arcs";
import Episodes from './component/Episodes/Episodes';
import Home from "./component/Home/Home";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Home></Home>
        <Routes>
            <Route path="/"></Route>
            <Route path="/episodes" element={<Episodes/>}></Route>
            <Route path="/chapitres" element={<Chapters/>}></Route>
            <Route path={"/arcs"} element={<Arcs/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
