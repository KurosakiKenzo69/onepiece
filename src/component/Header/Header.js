import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import luffy from '../../img/luffy.jpg';
import 'bulma/css/bulma.min.css';


import '../../App.css';
import {faDragon, faHome, faPlayCircle, faBook} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



export default function Header() {
    return (
        <div>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="nav">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            <div id="nav">
            <nav className={'navbar is-flex is-justify-content-center'}>
                <div className="navbar-brand">
                <Link to="/" className={'navbar-item'}>
                    <FontAwesomeIcon icon={faHome} />
                    Accueil
                </Link>
                <Link to="/episodes" className={'navbar-item'}>
                    <FontAwesomeIcon icon={faPlayCircle} />
                    Episodes
                </Link>
                <Link to={'/chapitres'} className={'navbar-item'}>
                    <FontAwesomeIcon icon={faBook}/>
                    Chapitres
                </Link>
                <Link to="/arcs" className={'navbar-item'}>
                    <FontAwesomeIcon icon={faDragon} />
                    Arcs
                </Link>
                </div>
            </nav>
            </div>
            {/*<img src={luffy} alt="luffy"/>*/}
            {/*<p> Bienvenue dans l'univers de Luffy et son équipage</p>*/}
        </div>
    );
}