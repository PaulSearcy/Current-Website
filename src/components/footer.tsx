import * as React from "react";

import * as Bootstrap from "bootstrap";

export interface footi { }

export class Footer extends React.Component<footi, {}> {
    render() {
        return <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <ul className="list-inline text-center">
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
                            <p className="copyright text-muted">Copyright &copy; Website Circa 2016</p>
                        </div>
                    </div>
                </div>
            </footer>
    }
}