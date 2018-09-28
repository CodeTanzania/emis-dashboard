import classNames from 'classnames/bind';
import React, { Fragment } from 'react';
import Header from '../../common/components/Header';

/* load styles */
import styles from './styles.css';
import CommonSettings from './components/settings';

const cx = classNames.bind(styles);
/**
 * Render contacts panel component which have all the the components in relation
 * to contacts
 *
 * @function
 * @name Settings
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const Settings = () => (
  <Fragment >
    <Header title="Settings" />
    <CommonSettings/>
  </Fragment>
);

export default Settings ;
