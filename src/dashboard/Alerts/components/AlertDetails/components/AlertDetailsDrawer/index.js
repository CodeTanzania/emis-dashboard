import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';
import AlertNav from './components/AlertNav';
import './styles.css';

function AlertDetailsDrawer({ visible, onCloseDrawer }) {
  return (
    <div>
      <Drawer
        placement="right"
        closable
        maskClosable={false}
        onClose={onCloseDrawer}
        visible={visible}
        width={820}
        className="AlertDetailsDrawer"
      >
        <AlertNav />
      </Drawer>
    </div>
  );
}

export default AlertDetailsDrawer;

AlertDetailsDrawer.propTypes = {
  onCloseDrawer: PropTypes.func,
  visible: PropTypes.bool,
};

AlertDetailsDrawer.defaultProps = {
  onCloseDrawer: () => {},
  visible: false,
};
