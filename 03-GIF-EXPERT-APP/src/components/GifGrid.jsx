import { Card, Col, Row } from "react-bootstrap"

import { GifItem, LoadingMessage } from "./";
import { useFecthGifs } from "../hooks";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFecthGifs(category)

    return (
        <Card className="bg-dark text-light mt-4 border border border-secondary">
            <Card.Body>
                <Card.Title className="display-6 fw-bold text-center">{category}</Card.Title>
                <LoadingMessage isLoading={isLoading} />
                <Row>
                    {
                        images.map((image) => (
                            <GifItem
                                key={image.id}
                                {...image}
                            />
                        ))
                    }
                </Row>
            </Card.Body>
        </Card>
    )
}