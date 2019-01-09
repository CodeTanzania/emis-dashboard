import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import MoreDetails from '../MoreDetails';
import AlertResources from '../AlertResources';
import AlertActions from '../AlertActions';
import './styles.css';

/**
 * Alert Navigation  component
 * This component will provide Navigation menu for an Alert
 *
 * @function
 * @name AlertNav
 *
 * @version 0.1.0
 * @since 0.1.0
 */

class AlertNav extends React.Component {
  static propTypes = {
    alert: PropTypes.shape({
      headline: PropTypes.string,
      reportedAt: PropTypes.string,
      expectedAt: PropTypes.string,
      expiredAt: PropTypes.string,
      instruction: PropTypes.string,
      source: PropTypes.string,
    }),
  };

  static defaultProps = {
    alert: {},
  };

  state = {
    current: 'details',
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  renderNavContent = current => {
    const { alert } = this.props;
    switch (current) {
      case 'details': {
        return <MoreDetails alert={alert} />;
      }
      case 'resources': {
        return <AlertResources />;
      }
      case 'actions': {
        return <AlertActions />;
      }
      case 'references': {
        return <div>Referenced Alerts will be placed here</div>;
      }
      case 'incidents': {
        return <div>Associated Incidents will be placed here</div>;
      }
      default:
        return false;
    }
  };

  render() {
    const { current } = this.state;
    return (
      <div className="AlertNav">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="details">Alert Details</Menu.Item>
          <Menu.Item key="resources">Alert Resources</Menu.Item>
          <Menu.Item key="actions">Actions</Menu.Item>
          {/* <Menu.Item key="references">Referenced Alerts</Menu.Item>
          <Menu.Item key="incidents">Associated Incidents</Menu.Item> */}
        </Menu>
        <div className="MenuContents">
          <div className="Container">{this.renderNavContent(current)}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  alert: state.alerts.selected,
});

export default connect(mapStateToProps)(AlertNav);
