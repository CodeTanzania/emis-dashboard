import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button } from 'antd';
import InfoLineItem from './components/InfoLineItem';

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
    phone,
    email,
    fax,
    phases,
    ownership,
    physicalAddress,
    postalAddress,
    website,
  } = stakeholder;
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '100px', marginRight: '20px' }}>
          <Avatar shape="square" size={100} icon="user" />
        </div>
        <div style={{ flex: '1' }}>
          <h2 style={{ marginBottom: '0px' }}>{name}</h2>
          <InfoLineItem label="Ownership" value={ownership} />
          <InfoLineItem label="Phases" value={phases} />
        </div>
        <div>
          <Button icon="edit" onClick={() => onClickEdit()} />
        </div>
      </div>
      <InfoLineItem label="Phone" value={phone} block />
      <InfoLineItem label="Email" value={email} block />
      <InfoLineItem label="Fax" value={fax} block />
      <InfoLineItem label="Address" value={physicalAddress} block />
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
