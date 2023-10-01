import { Card, Col } from "react-bootstrap"

export const GifGrid = ({ category }) => {
    return (
        <Card className="bg-dark text-light mt-4 border border border-secondary">
            <Card.Body>
                <Card.Title className="display-6 fw-bold">{category}</Card.Title>
            </Card.Body>
        </Card>
    )
}
