import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import Component from '../src';

class App extends React.Component {
    render() {
        const name = 'React Component';
        const url = 'https://github.com/trendmicro-frontend/react-component';

        return (
            <div>
                <Nav name={name} url={url} />
                <div className="container-fluid">
                    <Component />
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
