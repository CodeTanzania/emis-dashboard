import React from 'react';
import PropTypes from 'prop-types';
import { Button, Menu } from 'antd';
import { connect } from 'react-redux';
import './styles.css';
import { bindActionCreators } from 'redux';
import IncidentDetails from '../IncidentDetails';
import IncidentLegend from '../IncidentLegend';
import { getNavActive } from '../../actions';

/**
 * Map Navigation  Layout component
 * this navigations layout will show
 * different Map actions
 *
 * @class
 * @name MapNav
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class MapNav extends React.Component {
  static propTypes = {
    newIncidentButton: PropTypes.func,
    currentMenu: PropTypes.string,
    selected: PropTypes.shape({
      name: PropTypes.string,
      incidentsTypeData: PropTypes.shape({
        name: PropTypes.string,
        nature: PropTypes.string.isRequired,
        family: PropTypes.string.isRequired,
        color: PropTypes.string,
        _id: PropTypes.string,
      }),
      description: PropTypes.string,
      startedAt: PropTypes.instanceOf(Date),
      endedAt: PropTypes.instanceOf(Date),
      _id: PropTypes.string,
    }).isRequired,
    selectNav: PropTypes.shape({
      name: PropTypes.string,
      incidentsTypeData: PropTypes.shape({
        name: PropTypes.string,
        nature: PropTypes.string.isRequired,
        family: PropTypes.string.isRequired,
        color: PropTypes.string,
        _id: PropTypes.string,
      }),
      description: PropTypes.string.isRequired,
      startedAt: PropTypes.instanceOf(Date),
      endedAt: PropTypes.instanceOf(Date),
      _id: PropTypes.string,
    }).isRequired,
    activatedNav: PropTypes.func,
  };

  static defaultProps = {
    newIncidentButton: null,
    currentMenu: '',
    activatedNav: null,
  };

  constructor() {
    super();
    this.state = {
      hideNav: false,
    };
  }

  handleClick = data => {
    const { activatedNav } = this.props;
    activatedNav(data.key);
  };

  render() {
    const { newIncidentButton, currentMenu, selectNav } = this.props;
    const { hideNav } = this.state;

    const showNavContent = currentNav => {
      const { selected } = this.props;
      switch (currentNav) {
        case 'legends': {
          return <IncidentLegend />;
        }
        case 'details': {
          return <IncidentDetails incident={selected} />;
        }
        default:
          return false;
      }
    };

    return !hideNav ? (
      <div>
        <div className="MapNav">
          <Button type="primary" onClick={newIncidentButton}>
            + New Incident
          </Button>
        </div>
        <div className="topNav">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[currentMenu]}
            mode="horizontal"
          >
            {/* <Menu.Item key="legend">Legend</Menu.Item> */}
            {selectNav ? <Menu.Item key="details">Details</Menu.Item> : null}
          </Menu>
          <div>{showNavContent(currentMenu)}</div>
        </div>
      </div>
    ) : null;
  }
}
const mapStateToProps = state => ({
  selected: state.selectedIncident.incident
    ? state.selectedIncident.incident
    : {},
  currentMenu: state.activeNav && state.activeNav.activeItem,
  selectNav: state.selectedIncident.incident
    ? state.selectedIncident.incident
    : null,
});

const mapDispachToProps = dispatch => ({
  activatedNav: bindActionCreators(getNavActive, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispachToProps
)(MapNav);
