import React, { useEffect, useState } from 'react';
import OnePieceAPI from "../../api/Api";
import 'bulma/css/bulma.min.css';
import Pagination from "../Pagination";

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    useEffect(() => {
        const fetchEpisodes = async () => {
            const api = new OnePieceAPI();
            try {
                const episodes = await api.getEpisodes();
                setEpisodes(episodes);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchEpisodes();
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentEpisodes = episodes.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div>
            <section className={'section is-fullwidth'}>
                <div>
                    <h1 className="title">Les episodes</h1>
                    <table className="table is-hoverable is-fullwidth is-striped m-auto">
                        <thead style={{ background: '#36304a' }}>
                        <tr>
                            <th className="has-text-white">Numéro</th>
                            <th className="has-text-white">Titre</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentEpisodes.map((episode, id) => (
                            <tr key={id}>
                                <td>{episode.number}</td>
                                <td>{episode.title}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="section">
                    <Pagination
                        totalItems={episodes.length}
                        itemsPerPage={itemsPerPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </section>
        </div>
    );
};

export default Episodes;
