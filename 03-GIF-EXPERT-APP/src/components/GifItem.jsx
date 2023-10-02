import { Card, Col } from 'react-bootstrap'

export const GifItem = ({ title, url }) => {
    return (
        <Col xs={12} sm={6} md={4} lg={3}>
            <div className="d-flex h-100">
                <Card className="bg-dark text-light mt-4 border border border-secondary">
                    <img src={url} alt={title} />
                    <Card.Body className="d-flex flex-column align-items-start">
                        <Card.Title className="mt-auto">
                            {title}
                        </Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}
