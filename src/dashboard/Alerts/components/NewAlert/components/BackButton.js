import React from 'react';
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

/**
 * Custom Button for navigating
 * to Alerts home page
 *
 * @function
 * @name BackButton
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function BackButton() {
  return (
    <Button type="primary">
      <Link to="/alerts">
        <Icon type="left" style={{ fontSize: 16 }} />
        Back
      </Link>
    </Button>
  );
}

export default BackButton;
