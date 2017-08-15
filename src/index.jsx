import * as React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import { NavbarB } from './components/navbar';
import { Main } from './components/main';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Projects } from './components/projects';
import { Footer } from './components/footer';

const Page = props => {
        return (
            <div>
                <NavbarB />
                {props.children}
                <Footer />
            </div>
        )
}

render(
    <Router history={browserHistory} >
        <Route path='/' component={Page}>
            <IndexRoute component= {Main} />
            <Route path='about' component= {About}/>
            <Route path='contact' component= {Contact}/>
            <Route path='projects' component= {Projects} />
        </Route>
    </Router>
, document.getElementById('react') )