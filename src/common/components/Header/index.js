import React from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.css';


/* local constants */
const cx = classNames.bind(styles);

export default ({ title }) => (
  <div className={cx('container')}>
    <span className={cx('title')}>{title}</span>
  </div>
);