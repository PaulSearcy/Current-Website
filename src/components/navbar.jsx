import * as React from "react";
import { Link } from 'react-router';
import { Footer } from "./footer";
import { Main } from "./main";

let correction = { marginBottom: 0, borderRadius: 0 }
export const NavbarB = () => {

    return <nav className="navbar navbar-inverse" style={correction}>
        <div className="container-fluid">
            <div className="navbar-header">

                <Link className="navbar-brand" to="/">Paul Searcy</Link>

                <button type="button" className="navbar-toggle collapsed">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>

            </div>

            <div className="navbar-collapse collapse">

                <ul className="nav navbar-nav navbar-right">
                    <li role="presentation" >
                        <a action="push" href="/">Home</a>
                        </li>
                    <li role="presentation" ><Link action="push" href="/about">About</Link></li>
                    <li role="presentation" ><Link action="push" href="/projects">Projects</Link></li>
                    <li role="presentation" ><Link action="push" href="/contact">Contact</Link></li>
                </ul>

            </div>
        </div>
    </nav>
}
