import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';
/* import styles */
import styles from './index.module.css';


/* local constants */
const cx = classNames.bind(styles);


/**
 * Header component for contact sections
 * Render children but applies styles based on the
 * nature of the child. If the child is a mere string will
 * rendered as a header and if it is a react node will be render as a node
 *
 * @param {Object} children
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function Header({ children }) {
  return (
    <div className={cx('container')}>
      {React.isValidElement(children)
        ? (
          <div className={cx('component')}>
            {children}
          </div>
        )
        : (
          <div className={cx('title')}>
            {children}
          </div>
        )
      }
    </div>
  );
}


/* Prop validation */
Header.propTypes = {
  children: PropTypes.node.isRequired,
};
