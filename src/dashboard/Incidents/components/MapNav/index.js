import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, List, Input, Row, Col, Layout, } from 'antd';
import { connect } from 'react-redux';
import IncidentFilter from '../IncidentFilter';
import IncidentsList from '../IncidentsList';
import IncidentDetails from '../IncidentDetails';

import './styles.css';
import { bindActionCreators } from 'redux';
import { searchIncident } from '../../actions';

const { Header, Content } = Layout;
const { Search } = Input;
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
    clickedIncident: PropTypes.func,
    onCloseDetail: PropTypes.func,
  };

  static defaultProps = {
    newIncidentButton: null,
    clickedIncident: null,
    incidents: [],
    onCloseDetail: null,
  };

  constructor() {
    super();
    this.state = {
      hideNav: false,
    };
  }

  onSearchIncident = (searchData) => {
    const { handleSearchIncident } = this.props;
    handleSearchIncident(searchData)
  }

  render() {
    const {
      newIncidentButton,
      onCloseDetail,
      IncidentSelected,
      clickedIncident,
      incidents } = this.props;

    const { hideNav } = this.state;

    return !hideNav ? (
      <Fragment>
        {!IncidentSelected ? (
          <div>
            <div className="topNav">
              <Row>
                <Col span={17}>
                  <IncidentFilter />
                </Col>
                <Col span={6} offset={1}>
                  <Button type="primary" onClick={newIncidentButton}>
                    + New Incident
              </Button>
                </Col>
              </Row>
            </div>
            <Layout className="MapNav">
              <Header className='MapNavHeader' >
                <h3> List of Recorded Incidents</h3>
              </Header>
              <Content>
                <Search
                  placeholder="Search incident"
                  onSearch={value => this.onSearchIncident(value)}
                  enterButton
                  className="MapNavSearch"
                />
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
              </Content>
            </Layout>
          </div>
        ) : (
            <IncidentDetails handleCancel={onCloseDetail} />
          )}
      </Fragment>
    ) : null;
  }
}
const mapStateToProps = state => ({
  incidents:
    state.incidents.data && state.incidents.data ? state.incidents.data : [],
  IncidentSelected: state.selectedIncident.incident
    ? state.selectedIncident.incident
    : null,
});

const mapDispatchToProps = dispatch => ({
  handleSearchIncident: bindActionCreators(searchIncident, dispatch)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps)(MapNav);
