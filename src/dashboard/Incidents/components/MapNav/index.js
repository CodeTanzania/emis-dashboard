import React from 'react';
import PropTypes from 'prop-types';
import { Button, Menu, List } from 'antd';
import { connect } from 'react-redux';
import './styles.css';
import { bindActionCreators } from 'redux';
import { getNavActive } from '../../actions';
import IncidentFilter from '../IncidentFilter';
import IncidentsList from '../IncidentsList';
import IncidentDetails from '../IncidentDetails';

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
    IncidentSelected: PropTypes.shape({
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
    incidents: PropTypes.arrayOf(
      PropTypes.shape({
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
      }).isRequired
    ),
    activatedNav: PropTypes.func,
    clickedIncident: PropTypes.func,
  };

  static defaultProps = {
    newIncidentButton: null,
    currentMenu: '',
    activatedNav: null,
    clickedIncident: null,
    incidents: [],
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
    const { newIncidentButton, currentMenu, IncidentSelected } = this.props;
    const { hideNav } = this.state;

    const showNavContent = currentNav => {
      const { clickedIncident, incidents } = this.props;
      switch (currentNav) {
        case 'list': {
          return (
            <div>
              <IncidentFilter />
              <List
                className="IncidentList"
                itemLayout="horizontal"
                dataSource={incidents}
                renderItem={incident => (
                  <IncidentsList
                    clickedIncidentList={clickedIncident}
                    incidentsList={incident}
                  />
                )}
              />
            </div>
          );
        }
        default:
          return false;
      }
    };

    return !hideNav ? (
      <div>
        <div className="topNav">
          {!IncidentSelected ? (
            <div>
              {' '}
              <div className="MapNav">
                <Button type="primary" onClick={newIncidentButton}>
                  + New Incident
                </Button>
              </div>
              <Menu
                onClick={this.handleClick}
                selectedKeys={[currentMenu]}
                mode="horizontal"
              >
                <Menu.Item key="list">Incidents</Menu.Item>
              </Menu>
              <div>{showNavContent(currentMenu)}</div>
            </div>
          ) : (
            <IncidentDetails />
          )}
        </div>
      </div>
    ) : null;
  }
}
const mapStateToProps = state => ({
  incidents:
    state.incidents.data && state.incidents.data ? state.incidents.data : [],
  currentMenu: state.activeNav && state.activeNav.activeItem,
  IncidentSelected: state.selectedIncident.incident
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
