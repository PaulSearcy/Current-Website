import * as React from "react";
import * as ReactDOM from "react-dom";
import { PageHeader, Row, Col, Image } from "react-bootstrap";

let backgroundImage = {backgroundImage: 'url('+'./src/images/noding.jpg'+')',opacity: .8, marginTop: -20};

export class Main extends React.Component<any, any> {
    render() {
return <div>
        <PageHeader className="intro-header" style={backgroundImage}  >
            <div className="container">
                <Row >
                    <Col lg={8} lgOffset={2} md={10} mdOffset={1} >
                        <div className="site-heading">
                            <h1 style={{color: "#7AA3B8" }}>
                                <Image src= "./src/images/nodeJSDark.png" circle />
                                &nbsp;
                                <Image src= "./src/images/128TypeScript.png" circle />
                                &nbsp;
                                <Image src= "./src/images/128React.png" circle />
                            </h1>
                            <hr className="small" />
                            <span className="subheading">Node + TypeScript + React</span>
                        </div>
                    </Col>
                </Row>
            </div>
        </PageHeader>

        <div className="container" style={{textAlign: "center"}}>
            <h3>Basic Example </h3>
            <p> I've put together this website to demonstrate the above technologies. </p>
        </div>
        <hr />

      </div>
    }
}
