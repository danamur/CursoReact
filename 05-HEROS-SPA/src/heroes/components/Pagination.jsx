export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="pagination my-5 justify-content-center">
            <button
                className="btn btn-outline-secondary"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Anterior
            </button>
            <span className="mx-3 my-auto">{currentPage}</span>
            <button
                className="btn btn-outline-secondary"
                onClick={() => onPageChange(currentPage + 1)}
            >
                Siguiente
            </button>
        </div>
    );
};
