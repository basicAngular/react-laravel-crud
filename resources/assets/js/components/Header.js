import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
export default class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-default" role="navigation">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">React Laravel</a>
                        </div>
                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </div>
                    </nav>
                    
                    <div>
                    <Route path='/' component ={Home} />
                    <Route path='/about' component ={About} />
                    </div>
                </div>
            </Router>
        );
    }
}

if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}
