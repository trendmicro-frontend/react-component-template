import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './index.styl';

const tagPropType = PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
    PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
    ]))
]);

class Component extends React.Component {
    static propTypes = {
        tag: tagPropType,
    };

    static defaultProps = {
        tag: 'div',
    };

    render() {
        const {
            className,
            tag: Tag,
            ...props
        } = this.props;

        return (
            <Tag {...props} className={cx(className, styles.component)} />
        );
    }
}

export default Component;
