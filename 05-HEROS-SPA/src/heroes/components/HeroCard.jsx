import { Link } from "react-router-dom"

export const HeroCard = ({ id, name, slug, images, biography }) => {
    return (
        <>
            <div key={id} className="card animate__animated animate__zoomInRight" style={{ width: '20rem', margin: '10px' }}>
                <img src={images.lg} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{biography.fullName}</p>
                    <p className="card-text">
                        <small className="text-muted">{biography.firstAppearance}</small>
                    </p>
                </div>
                <div className="card-footer">
                    <Link to={`/hero/${name}`}>
                        <small className="text-body-secondary">Mas informacion</small>
                    </Link>
                </div>
            </div>
        </>
    );
};
