import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import luffy from '../../img/luffy.jpg';

import '../../App.css';
import {faDragon, faHome, faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



export default function Header() {
    return (
        <div className="sidebar">
            <nav>
                <Link to="/">
                    <FontAwesomeIcon icon={faHome} />
                    Accueil
                </Link>
                <Link to="/episodes">
                    <FontAwesomeIcon icon={faPlayCircle} />
                    Episodes
                </Link>
                <Link to={'/chapitres'}></Link>
                <Link to="/arcs">
                    <FontAwesomeIcon icon={faDragon} />
                    Arcs
                </Link>
            </nav>
            {/*<img src={luffy} alt="luffy"/>*/}
            {/*<p> Bienvenue dans l'univers de Luffy et son équipage</p>*/}
        </div>
    );
}