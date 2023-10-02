export const LoadingMessage = ({ isLoading }) => {
    return (
        isLoading && (
            <div className="d-flex justify-content-center">
                <div className="spinner-grow" style={{ width: "3rem", height: "3rem" }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    );
};
