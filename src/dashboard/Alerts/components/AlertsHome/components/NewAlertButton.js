import React from 'react';
import { Button, Icon } from 'antd';

function NewAlertButton() {
  return (
    <Button type="primary">
      <Icon type="plus" style={{ fontSize: 16 }} />
      New Alert
    </Button>
  );
}

export default NewAlertButton;
