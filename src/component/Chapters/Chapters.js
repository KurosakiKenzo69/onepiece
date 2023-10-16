import React, { useEffect, useState } from 'react';
import OnePieceAPI from "../../api/Api";
import Pagination from "../Pagination";
import 'bulma/css/bulma.min.css';


const Chapters = () => {
    const [chapters, setChapters] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Par exemple, afficher 10 chapitres par page

    useEffect(() => {
        const fetchChapters = async () => {
            const api = new OnePieceAPI();
            try {
                const chapters = await api.getChapters();
                setChapters(chapters);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchChapters();
    }, []);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentChapters = chapters.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <section className={'section is-fullwidth'}>
        <div>
            <h1 className="title">Les chapitres</h1>
            <div>
            <table className="table is-hoverable is-fullwidth is-striped m-auto">
                <thead style={{ background: '#36304a' }}>
                <tr>
                    <th className="has-text-white">Numéro du chapitre</th>
                    <th className="has-text-white">Titre du chapitre</th>
                </tr>
                </thead>
                <tbody>
                {currentChapters.map((chapter, id) => (
                    <tr key={id}>
                        <td>{chapter.chapter_number}</td>
                        <td>{chapter.chapter_title}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
            <div className={'section'}>
            <Pagination
                totalItems={chapters.length}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
            />
            </div>
        </div>
        </section>
    );
};

export default Chapters;
