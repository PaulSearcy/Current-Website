import * as React from "react";
import * as ReactDOM from "react-dom";
import { PageHeader, Row } from "react-bootstrap";
interface MyProps {}
interface MyState {}
let backgroundImage = {backgroundImage: 'url('+'./src/images/noding.jpg'+')', marginTop: -20};

export class Main extends React.Component<MyProps, MyState> {
    render() {
return <div> <PageHeader className="intro-header" style={backgroundImage}  >
                <div className="container">
                    <Row >
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <div className="site-heading">
                                <h1>Advanced Exploration</h1>
                                <hr className="small" />
                                <span className="subheading">A site meant to explore the intersection of networking and application development</span>
                            </div>
                        </div>
                    </Row>
                </div>
            </PageHeader>


            <div className="container">
                <h3>What is Node.js? SASS? Handlebars? MonogDB? How do they relate and what is the purpose? </h3>
                <p>  That and many other questions I set out to solve awhile back. I created this website to portray some of the outcomes from that desire to grow and challenge myself as a developer. I hope you enjoy.</p>
                <p> Please click on projects if you would like to know the architecture of this site </p>
            </div>
            <hr />
            </div>
    }
}