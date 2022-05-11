import React, { Component } from 'react';
import { Container, Tab } from 'react-bootstrap'
import { Col, Row, Nav } from 'react-bootstrap'

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Program</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img className="d-block w-100" src="https://www.linkedjetpack.com/wp-content/uploads/2021/08/buy-linkedin-skill-endorsements.jpg" alt="picture one" />
                                    <p>
                                        Lorem
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img className="d-block w-100" src="https://www.good-name.org/wp-content/uploads/2020/07/Random-business-1200x900.webp" alt="picture two" />
                                    <p>
                                        Lorem
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img className="d-block w-100" src="https://s3-alpha.figma.com/hub/file/858291939/14dda654-9bf1-47a5-ba66-904aa3003c6e-cover.png" alt="picture three" />
                                    <p>
                                        Lorem
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;