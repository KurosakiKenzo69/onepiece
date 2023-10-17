import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./component/Header/Header";
import Chapters from "./component/Chapters/Chapters";
import Arcs from "./component/Arcs/Arcs";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Arcs></Arcs>

        {/*<Routes>*/}
        {/*    <Route path="/"></Route>*/}
        {/*    <Route path="/episodes"></Route>*/}
        {/*    /!*<Route path="arcs" element={<Chapters/>}></Route>*!/*/}
        {/*</Routes>*/}
    </div>
  );
}

export default App;
