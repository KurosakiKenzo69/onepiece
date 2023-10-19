import React, { useEffect, useState } from 'react';
import OnePieceAPI from "../../api/Api";
import 'bulma/css/bulma.min.css';
import Pagination from "../Pagination";

const Arcs = () => {
    const [arcs, setArcs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

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

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const toggleDescription = (arc) => {
        arc.showFullDescription = !arc.showFullDescription;
        setArcs([...arcs]); // Met à jour l'état pour déclencher un rendu
    };

    // Filtrer les arcs avec des descriptions non vides
    const filteredArcs = arcs.filter((arc) => arc.arc_description.trim() !== '');

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentArcs = filteredArcs.slice(indexOfFirstItem, indexOfLastItem);

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
                        {currentArcs.map((arc, id) => (
                            <tr key={id}>
                                <td>{arc.arc_title}</td>
                                <td>
                                    {arc.showFullDescription ? arc.arc_description : `${arc.arc_description.slice(0, 100)}...`}
                                    {arc.arc_description.length > 100 && (
                                        <button
                                            onClick={() => toggleDescription(arc)}
                                            className="button is-text"
                                        >
                                            {arc.showFullDescription ? "Voir moins" : "Voir plus"}
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="section">
                    <Pagination
                        totalItems={filteredArcs.length}
                        itemsPerPage={itemsPerPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </section>
        </div>
    );
};

export default Arcs;
