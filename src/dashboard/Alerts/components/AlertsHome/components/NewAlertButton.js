import React from 'react';
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

/**
 * Custom Button for navigating to create new
 * alert page
 *
 * @function
 * @name NewAlertButton
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function NewAlertButton() {
  return (
    <Button type="primary">
      <Link to="/alerts/new">
        <Icon type="plus" style={{ fontSize: 16 }} />
        New Alert
      </Link>
    </Button>
  );
}

export default NewAlertButton;
