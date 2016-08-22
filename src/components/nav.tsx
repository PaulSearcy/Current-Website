import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Bootstrap from "bootstrap";
import { Footer } from "./footer";
import { Main } from "./main";
export interface navi { titler: string;  }

export class Navbar extends React.Component<navi, {}> {
    render() {
        return <div> <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
        <title>this.props.titler</title>
                <div className="container-fluid">

                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="index">Paul Searcy</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="index">Home</a></li>
                            <li><a href="about">About</a></li>
                            <li><a href="projects">Projects</a></li>
                            <li><a href="contact">Contact</a></li>
                        </ul>
                    </div>

                </div>
            </nav>
            <Main mm="2"/>
            <Footer />
        </div>
    }
}