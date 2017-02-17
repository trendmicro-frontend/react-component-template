import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Section from './Section';
import Component from '../src';
import styles from './index.styl';

class App extends React.Component {
    render() {
        const name = 'React Component';
        const url = 'https://github.com/trendmicro-frontend/react-component';

        return (
            <div>
                <Nav name={name} url={url} />
                <div className={styles.container}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <Section className="row-md-6">
                                    <h2>Title #1</h2>
                                    <Component>
                                        Content #1
                                    </Component>
                                </Section>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Section className="row-md-3">
                                    <h2>Title #2</h2>
                                    <Component>
                                        Content #2
                                    </Component>
                                </Section>
                            </div>
                            <div className="col-md-6">
                                <Section className="row-md-3">
                                    <h2>Title #3</h2>
                                    <Component>
                                        Content #3
                                    </Component>
                                </Section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
