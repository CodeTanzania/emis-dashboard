import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button } from 'antd';
import classNames from 'classnames';
import InfoLineItem from './components/InfoLineItem';
import styles from './styles.css';

const cx = classNames.bind(styles);
/**
 * Contact information component
 * Render basic information about the contact
 *
 * @function
 * @name Information
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function BasicInfo({ stakeholder, onClickEdit }) {
  const {
    name,
    mobile,
    email,
    fax,
    phases,
    role,
    physicalAddress,
    postalAddress,
    website,
  } = stakeholder;
  return (
    <div className={cx('stakeholderBasicInfo')}>
      <div className={cx('summary')}>
        <div className={cx('avatar')}>
          <Avatar shape="square" size={100} icon="user" />
        </div>
        <div className={cx('info')}>
          <h3 className={cx('name')}>{name}</h3>
          <InfoLineItem label="Role" value={role.name} />
          <InfoLineItem label="Phases" value={phases} />
        </div>
        <div>
          <Button icon="edit" onClick={() => onClickEdit()} />
        </div>
      </div>
      <InfoLineItem label="Phone" value={mobile} block />
      <InfoLineItem label="Email" value={email} block />
      <InfoLineItem label="Fax" value={fax} block />
      <InfoLineItem label="Physical Address" value={physicalAddress} block />
      <InfoLineItem label="Postal Address" value={postalAddress} block />
      <InfoLineItem label="Web" value={website} block />
    </div>
  );
}

/* Props validation */
BasicInfo.propTypes = {
  stakeholder: PropTypes.shape({
    phone: PropTypes.string,
    email: PropTypes.string,
    physicalAddress: PropTypes.string,
    fax: PropTypes.string,
  }),
  onClickEdit: PropTypes.func.isRequired,
};

BasicInfo.defaultProps = {
  stakeholder: {},
};
