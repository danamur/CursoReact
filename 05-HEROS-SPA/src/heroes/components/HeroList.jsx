import React, { useEffect, useState } from "react";
import { HeroCard } from "./HeroCard";
import { Pagination } from "./Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getHeroesByPublisher } from "../helpers";

const heroesPerPage = 20;

export const HeroList = ({ publisher }) => {
    const [loading, setLoading] = useState(true);
    const [heroes, setHeroes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedHeroes = getHeroesByPublisher(publisher, currentPage, heroesPerPage);
                setHeroes(fetchedHeroes);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            // Limpia cualquier recurso necesario al desmontar el componente
        };
    }, [publisher, currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        setLoading(true);
    };

    return (
        <>
            {loading ? (
                <div className="text-center mt-5">
                    <h2>
                        <FontAwesomeIcon icon={faSpinner} spin className="mr-2" /> Cargando...
                    </h2>
                </div>
            ) : (
                <>
                    <div className="d-flex justify-content-between flex-wrap slide-in">
                        {heroes.map((heroe) => (
                            <HeroCard key={heroe.id} {...heroe} />
                        ))}
                    </div>

                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(heroes.length / heroesPerPage)}
                        onPageChange={handlePageChange}
                    />
                </>
            )}
        </>
    );
};