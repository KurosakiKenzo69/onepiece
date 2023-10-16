import React, { useState, useEffect } from 'react';

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    useEffect(() => {
        onPageChange(currentPage);
    }, [currentPage, onPageChange]);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPageDisplay = 10; // Définir le nombre maximum de pages à afficher
        let startPage = currentPage - Math.floor(maxPageDisplay / 2);
        startPage = Math.max(startPage, 1);
        let endPage = startPage + maxPageDisplay - 1;
        endPage = Math.min(endPage, totalPages);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <li key={i}>
                    <button
                        className={`pagination-link ${i === currentPage ? 'is-current' : ''}`}
                        aria-label={`Page ${i}`}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </button>
                </li>
            );
        }
        return pageNumbers;
    };

    return (
        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
            <ul className="pagination-list">
                <li>
                    <button
                        className="pagination-previous"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Précédent
                    </button>
                </li>
                {renderPageNumbers()}
                <li>
                    <button
                        className="pagination-next"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Suivant
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
