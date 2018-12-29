import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import AlertDetailsSummary from '../AlertDetailsSummary';
import './styles.css';

function AlertSideBar({ selectedAlert }) {
  const renderMenuContents = current => {
    switch (current) {
      case 'filter': {
        return <h1>This is our filter</h1>;
      }
      case 'details': {
        return <AlertDetailsSummary selectedAlert={selectedAlert} />;
      }
      default:
        return false;
    }
  };
  return (
    <div className="AlertSideBar">
      <Menu selectedKeys={['details']} mode="horizontal">
        <Menu.Item key="filter">Filters</Menu.Item>
        {selectedAlert === null ? null : (
          <Menu.Item key="details">Details</Menu.Item>
        )}
      </Menu>
      <div>{renderMenuContents('details')}</div>
    </div>
  );
}
const mapStateToProps = state => ({
  selectedAlert: state.alerts.selected,
});

export default connect(mapStateToProps)(AlertSideBar);

AlertSideBar.propTypes = {
  selectedAlert: PropTypes.shape({
    headline: PropTypes.string,
    reportedAt: PropTypes.string,
    expectedAt: PropTypes.string,
    expiredAt: PropTypes.string,
    instruction: PropTypes.string,
    source: PropTypes.string,
  }),
};

AlertSideBar.defaultProps = {
  selectedAlert: null,
};
