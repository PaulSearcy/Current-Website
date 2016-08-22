import * as React from "react";
import * as ReactDOM from "react-dom";
import { PageHeader, Row, Col } from "react-bootstrap";

interface MyProps {}
interface MyState {}
let backgroundImage = {backgroundImage: 'url('+'./src/images/noding.jpg'+')',opacity: .8, marginTop: -20};

export class Main extends React.Component<MyProps, MyState> {
    render() {
return <div>

        <PageHeader className="intro-header" style={backgroundImage}  >
            <div className="container">
                <Row >
                    <Col lg={8} lgOffset={2} md={10} mdOffset={1} >
                        <div className="site-heading">
                            <h1 style={{color: "#7AA3B8" }}>
                                <img src= "./src/images/nodeJSDark.png" className= "img-circle" />
                                &nbsp;
                                <img src= "./src/images/128TypeScript.png" className= "img-circle" />
                                &nbsp;
                                <img src= "./src/images/128React.png" className= "img-circle" />
                            </h1>
                            <hr className="small" />
                            <span className="subheading">Node + TypeScript + React</span>
                        </div>
                    </Col>
                </Row>
            </div>
        </PageHeader>

        <div className="container">
            <h3>What is Node.js? SASS? Handlebars? MonogDB? How do they relate and what is the purpose? </h3>
            <p>  That and many other questions I set out to solve awhile back. I created this website to portray some of the outcomes from that desire to grow and challenge myself as a developer. I hope you enjoy.</p>
            <p> Please click on projects if you would like to know the architecture of this site </p>
        </div>

      </div>
    }
}