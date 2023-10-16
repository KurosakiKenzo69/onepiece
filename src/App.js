import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./component/Header/Header";
import Arcs from "./component/Chapters/Chapters";
// import Chapters from "./component/Chapters/Chapters";

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
