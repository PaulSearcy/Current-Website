import * as React from "react";
import * as ReactDOM from "react-dom";
import { PageHeader, Row, Col, Image } from "react-bootstrap";

interface MyProps {}
interface MyState {}
let backgroundImage = {backgroundImage: 'url('+'./src/images/coding.jpg'+')',opacity: .8, marginTop: -20};

export class About extends React.Component<MyProps, MyState> {
    render() {
return <div>
        <PageHeader className="intro-header" style={backgroundImage}  >
            <div className="container">
                <Row >
                    <Col lg={8} lgOffset={2} md={10} mdOffset={1} >
                        <div className="site-heading">
                            <h1 style={{color: "#7AA3B8" }}>
                                About Me
                            </h1>
                            <hr className="small" />
                            <span className="subheading">This is what I do</span>
                        </div>
                    </Col>
                </Row>
            </div>
        </PageHeader>

        <div className="container" style={{textAlign: "center"}}>
            <h3>Basic Example </h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestiae debitis nobis, quod sapiente qui voluptatum, placeat magni repudiandae accusantium fugit quas labore non rerum possimus, corrupti enim modi! Et.
            </p>
        </div>
        <hr />

      </div>
    }
}