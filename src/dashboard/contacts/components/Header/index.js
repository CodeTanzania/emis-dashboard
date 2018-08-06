import classnames from 'classnames';
import React from 'react';
// import styles
import styles from './index.css';


// local constants
const cx = classnames.bind(styles);


/**
 * Header component for React section
 * Render children but applies styles based on the
 * nature of the child.
 * @param {Object} children
 */
export default function Header({ children }) {
  return (
    <div className={cx('header')}>
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
