import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { List, Input, Row, Col, Layout } from 'antd';
import { connect } from 'react-redux';
import IncidentFilter from '../IncidentFilter';
import IncidentsList from '../IncidentsList';
import IncidentDetails from '../IncidentDetails';

import './styles.css';
import {
  searchIncident,
  getIncidentActions,
  getIncidentsSuccess,
} from '../../actions';
import { incidents } from '../../helpers';
import CreateIncidentButton from '../Map/components/CreateIncidentButton';

const { Header, Content } = Layout;
const { Search } = Input;
/**
 * Map Navigation Layout component
 * this navigations layout shows
 * different Maps actions
 *
 * @class
 * @name MapNav
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class MapNav extends React.Component {
  static propTypes = {
    // incidents: PropTypes.arrayOf(
    //   PropTypes.shape({
    //     name: PropTypes.string,
    //     incidentsTypeData: PropTypes.shape({
    //       name: PropTypes.string,
    //       nature: PropTypes.string.isRequired,
    //       family: PropTypes.string.isRequired,
    //       color: PropTypes.string,
    //       _id: PropTypes.string,
    //     }),
    //     description: PropTypes.string.isRequired,
    //     startedAt: PropTypes.string,
    //     endedAt: PropTypes.string,
    //     _id: PropTypes.string,
    //   }).isRequired
    // ),
    handleSearchIncident: PropTypes.func,
    isSelected: PropTypes.bool.isRequired,
    handleIncidentActions: PropTypes.func,
    handleIncidents: PropTypes.func,
  };

  static defaultProps = {
    // incidents: [],
    handleSearchIncident: () => {},
    handleIncidentActions: () => {},
    handleIncidents: () => {},
  };

  constructor() {
    super();
    this.state = {
      hideNav: false,
    };
  }

  componentDidMount() {
    const { handleIncidents, handleIncidentActions } = this.props;
    handleIncidents();
    handleIncidentActions();
  }

  onSearchIncident = searchData => {
    const { handleSearchIncident } = this.props;
    handleSearchIncident(searchData);
  };

  render() {
    const { hideNav } = this.state;
    const {
      isSelected,
        incidents,
    } = this.props;

    return !hideNav ? (
      <Fragment>
        {!isSelected ? (
          <div>
            <div className="topNav">
              <Row>
                <Col span={16}>
                  <IncidentFilter />
                </Col>
                <Col span={7} offset={1}>
                  <CreateIncidentButton />
                </Col>
              </Row>
            </div>
            <Layout className="MapNav">
              <Header className="MapNavHeader">
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
                    <IncidentsList incidentsList={incident} />
                  )}
                />
              </Content>
            </Layout>
          </div>
        ) : (
          <IncidentDetails />
        )}
      </Fragment>
    ) : null;
  }
}

const mapStateToProps = state => ({
  incidents:
    state.incidents.data && state.incidents.data ? state.incidents.data : {},
  isSelected: state.incidents.isSelected,
});

const mapDispatchToProps = {
  handleSearchIncident: searchIncident,
  handleIncidents: getIncidentsSuccess,
  handleIncidentActions: getIncidentActions,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapNav);
