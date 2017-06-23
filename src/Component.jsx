import React, { PureComponent } from 'react';
import styles from './index.styl';

class Component extends PureComponent {
    static propTypes = {
    };
    static defaultProps = {
    };

    state = {
    };
    actions = {
    };

    render() {
        return (
            <div {...this.props} className={styles.component} />
        );
    }
}

export default Component;
