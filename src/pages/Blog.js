import React, { Component } from 'react';
import { Container, Col, Row, Card, ListGroup } from "react-bootstrap";

class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <div className="d-flex align-items-center me-5">
                            <div className="flex-shrink-0">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://picsum.photos/id/34/400/400"
                                    alt="photo" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>Blog post</h5>
                                <p>
                                    Lorem
                                </p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center me-5">
                            <div className="flex-shrink-0">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://picsum.photos/id/35/400/400"
                                    alt="photo" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>Blog post</h5>
                                <p>
                                    Lorem
                                </p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center me-5">
                            <div className="flex-shrink-0">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://picsum.photos/id/36/400/400"
                                    alt="photo" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>Blog post</h5>
                                <p>
                                    Lorem
                                </p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center me-5">
                            <div className="flex-shrink-0">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://picsum.photos/id/37/400/400"
                                    alt="photo" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>Blog post</h5>
                                <p>
                                    Lorem
                                </p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center me-5">
                            <div className="flex-shrink-0">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://picsum.photos/id/38/400/400"
                                    alt="photo" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>Blog post</h5>
                                <p>
                                    Lorem
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Категорії</h5>

                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Nature</ListGroup.Item>
                                <ListGroup.Item>Physics</ListGroup.Item>
                                <ListGroup.Item>Adventure</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Card className="mt-3 bg-light">
                        <Card.Body>
                            <Card.Title>Slide widget</Card.Title>
                            <Card.Text>
                                Lorem
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>

            </Container>
        );
    }
}

export default Blog;