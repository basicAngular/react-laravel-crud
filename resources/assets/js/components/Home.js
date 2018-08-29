import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1>Welcome Home</h1>
            </div>
        );
    }
}

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
