// import Tab from 'react-bootstrap/Tab'
// import Nav from 'react-bootstrap/Nav';
import {Tab, Row, Col, Nav} from 'react-bootstrap';

import MainLayout from "../Layout/MainLayout";
import Editor from "../Components/Editor";
import Container from "react-bootstrap/Container";

export default function Queries() {
    return <MainLayout>
        <h1>Queries</h1>
        <Container>
            <Row>
                <Col>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        {/*<Sonnet/>*/}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        {/*<Sonnet/>*/}
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Col>
                <Col> <Editor /></Col>
            </Row>
        </Container>
    </MainLayout>

}