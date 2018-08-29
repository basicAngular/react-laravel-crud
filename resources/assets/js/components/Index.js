import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <h1>Details Goes here and value goes here.</h1>
                <Footer/>
            </div>
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
