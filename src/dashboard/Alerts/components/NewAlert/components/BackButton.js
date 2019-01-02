import React from 'react';
import { Button, Icon } from 'antd';
import { Link } from 'react-router-dom';

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
