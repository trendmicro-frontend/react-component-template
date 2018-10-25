import React, { PureComponent } from 'react';

class Component extends PureComponent {
    static propTypes = {
    };

    static defaultProps = {
    };

    render() {
        return (
            <div {...this.props} />
        );
    }
}

export default Component;
