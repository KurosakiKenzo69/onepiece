import React, { useEffect, useState } from 'react';
import axios from "axios";
import '../../App.css'
import 'bulma/css/bulma.min.css';
import OnePieceAPI from "../../api/Api";

const Chapters = () => {
    const [chapters, setChapters] = useState([]);

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

    return (
        <div>
            <h1 className={'title'}>Les chapitres</h1>
            <div className="table container">
            <table class={'table is-hoverable is-striped is-fullwidth m-auto'}>
            <thead style={{background: '#36304a'}}>
                    <th className={'has-text-white'}>Numéro du chapitre</th>
                    <th className={'has-text-white'}>Titre du chapitre</th>
            </thead>
            <tbody>
            {chapters.map((chapter, id) => (
                <tr key={id}>
                    <td>{chapter.chapter_number}</td>
                    <td>{chapter.chapter_title}</td>
                </tr>
            ))}
            </tbody>
            </table>
            </div>
        </div>
    );
};

export default Chapters;
