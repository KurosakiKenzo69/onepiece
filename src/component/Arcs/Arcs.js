import React, { useEffect, useState } from 'react';
import OnePieceAPI from "../../api/Api";
// import Pagination from "../Pagination";
import 'bulma/css/bulma.min.css';


const Arcs = () => {
    const [arcs, setArcs] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const itemsPerPage = 10; // Par exemple, afficher 10 chapitres par page

    useEffect(() => {
        const fetchArcs = async () => {
            const api = new OnePieceAPI();
            try {
                const arcs = await api.getArcs();
                setArcs(arcs);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchArcs();
    }, []);

    return (
        <div>
            <section className={'section is-fullwidth'}>
                <div>
                    <h1 className="title">Les arcs</h1>
                    <table className="table is-hoverable is-fullwidth is-striped m-auto">
                        <thead style={{ background: '#36304a' }}>
                            <tr>
                                <th className="has-text-white">Titre de l'arc</th>
                                <th className="has-text-white">Description de l'arc</th>
                            </tr>
                        </thead>
                        <tbody>
                        {arcs.map((arc, id ) => (
                            <tr key={id}>
                            <td>{arc.arc_title}</td>
                            <td>{arc.arc_description}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Arcs;