import React from 'react';
import ReactDOM from 'react-dom';
import Component from '../src';

class App extends React.Component {
    render() {
        return (
            <Component />
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
