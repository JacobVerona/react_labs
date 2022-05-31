import React, { Component, useState } from 'react';
import { Container, Col, Row, Card, ListGroup } from "react-bootstrap";
import PostList from "../components/UI/input/PostList";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

export default function Blog() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript', body: 'Description' },
        { id: 2, title: 'JavaScript', body: 'Description' },
        { id: 3, title: 'JavaScript', body: 'Description' },
    ])

    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([...posts, { ...post, id: Date.now() }])
        setPost({ title: '', body: '' })
    }

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

            <PostList posts={posts} title='Пости про природу' />
            <div className="App">
                <form>
                    {/*Керований компонент*/}
                    <MyInput
                        value={post.title}
                        onChange={e => setPost({ ...post, title: e.target.value })}
                        type="text"
                        placeholder="Назва поста" />
                    <MyInput
                        value={post.body}
                        onChange={e => setPost({ ...post, body: e.target.value })}
                        type="text"
                        placeholder="Опис поста" />
                    <MyButton onClick={addNewPost}>Створити пост</MyButton>
                </form>
            </div>
        </Container>
    );
}