import React from 'react';
import { Link } from 'react-router-dom'; // Utilisez React Router pour gérer les liens vers d'autres pages de votre application
import 'bulma/css/bulma.min.css';

const Home = () => {
    return (
        <div>
            <section className="hero is-fullheight is-primary">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-1">Bienvenue dans l'univers de One Piece</h1>
                        <p className="subtitle is-3">L'aventure épique de Monkey D. Luffy et son équipage</p>
                        <Link to="/arcs" className="button is-info is-large m-3">Découvrir les Arcs</Link>
                        <Link to="/episodes" className="button is-info is-large m-3">Explorer les Épisodes</Link>
                        <Link to="/personnages" className="button is-info is-large m-3">Rencontrer les Personnages</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
