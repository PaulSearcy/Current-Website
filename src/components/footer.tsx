import * as React from "react";

import * as Bootstrap from "bootstrap";
import { PageHeader, Row, Col } from "react-bootstrap";

export class Footer extends React.Component<any, any> {
    render() {
        return <footer>

                <div className="container">
                    <Row >
                        <Col lg={8} lgOffset={2} md={10} mdOffset={1}>
                            <ul className="list-inline text-center">
                                <li>
                                    <a href="https://www.linkedin.com/in/psearcy" target="_blank">
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/psearcy1" target="_blank">
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/tridon777" target="_blank">
                                        <span className="fa-stack fa-lg">
                                            <i className="fa fa-circle fa-stack-2x"></i>
                                            <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <p className="copyright text-muted">Copyright &copy; Paul Searcy  2015-2016</p>
                        </Col>
                    </Row>
                </div>

            </footer>
    }
}