import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class About extends Component {
    render() {
        return (
            <div className="container">
                <h1>About Component</h1>
            </div>
        );
    }
}

if (document.getElementById('about')) {
    ReactDOM.render(<About />, document.getElementById('about'));
}
