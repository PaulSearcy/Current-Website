import * as React from "react";
import * as ReactDOM from "react-dom";
import { PageHeader, Row, Col, Image } from "react-bootstrap";

interface MyProps {}
interface MyState {}
let backgroundImage = {backgroundImage: 'url('+'./src/images/bad-architecture.jpg'+')',opacity: .8, marginTop: -20};

export class Projects extends React.Component<MyProps, MyState> {
    render() {
return <div>
        <PageHeader className="intro-header" style={backgroundImage}  >
            <div className="container">
                <Row >
                    <Col lg={8} lgOffset={2} md={10} mdOffset={1} >
                        <div className="site-heading">
                            <h1 style={{color: "#7AA3B8" }}>
                                Architecture
                            </h1>
                        </div>
                    </Col>
                </Row>
            </div>
        </PageHeader>

        <div className="container" style={{textAlign: "center"}}>

        </div>
        <hr />

      </div>
    }
}