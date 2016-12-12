import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import styles from './index.styl';

export default class extends Component {
    static propTypes = {
    };
    static defaultProps = {
    };

    state = {
    };
    actions = {
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }
    render() {
        return (
            <div className={styles.componentTitle}>Hello</div>
        );
    }
}
