import * as React from "react";
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import { NavbarB } from "./components/navbar";
import { Main } from "./components/main";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Projects } from "./components/projects";
import { Footer } from "./components/footer";

class Page extends React.Component<any,void> {
    render() {
        const {main} = this.props;
        return (
            <div>
                <NavbarB />
                {main}
                <Footer />
            </div>
        );
    }
}

render((
    <Router history={browserHistory} >
        <Route path="/" component={Page}>
            <IndexRoute components={{main: Main}} />
            <Route path="about" components={{main: About}} />
            <Route path="contact" components={{main: Contact}} />
            <Route path="projects" components={{main: Projects}} />
        </Route>
    </Router>
), document.getElementById("example") )
