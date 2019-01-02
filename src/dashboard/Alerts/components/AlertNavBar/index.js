import React from 'react';
import { Button, Icon } from 'antd';
import './styles.css';

function AlertNavBar() {
  return (
    <div className="AlertNavBar">
      <Button type="primary">
        <Icon type="plus" style={{ fontSize: 16 }} />
        New Alert
      </Button>
    </div>
  );
}

export default AlertNavBar;
