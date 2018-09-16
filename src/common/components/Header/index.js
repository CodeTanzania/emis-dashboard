import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './index.module.css';

/* local constants */
const cx = classNames.bind(styles);

export default function Header({ title }) {
  return (
    <div className={cx('container')}>
      <span className={cx('title')}>{title}</span>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
