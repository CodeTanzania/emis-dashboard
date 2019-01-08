import React from 'react';
import PropTypes from 'prop-types';
import { Col, List, Row } from 'antd';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import styles from './styles.css';
import { getSelectedIncident, activeIncidentAction } from '../../actions';
import { convertIsoDate, } from '../../helpers';
/**
 * Render a single contact item component for contacts list
 *
 * @function
 * @name Contact
 * @version 0.1.0
 * @since 0.1.0
 */

const cx = classNames.bind(styles);

class IncidentsList extends React.Component {
  static propTypes = {
    getIncident: PropTypes.func,
    incidentsList: PropTypes.shape({
      name: PropTypes.string,
      incidentsTypeData: PropTypes.shape({
        name: PropTypes.string,
        nature: PropTypes.string.isRequired,
        family: PropTypes.string.isRequired,
        color: PropTypes.string,
        _id: PropTypes.string,
      }),
      description: PropTypes.string.isRequired,
      startedAt: PropTypes.string,
      endedAt: PropTypes.string,
      _id: PropTypes.string,
    }),
    incidentsAction: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string.isRequired,
        phase: PropTypes.string.isRequired,
        incident: PropTypes.shape({
          event: PropTypes.string.isRequired,
          startedAt: PropTypes.string,
          endedAt: PropTypes.string,
          _id: PropTypes.string,
        }),
        incidentType: PropTypes.shape({
          name: PropTypes.string,
          nature: PropTypes.string.isRequired,
          family: PropTypes.string.isRequired,
          color: PropTypes.string,
          _id: PropTypes.string,
        }),
        _id: PropTypes.string,
      })
    ).isRequired,
    setIncidentAction: PropTypes.func,
  };

  static defaultProps = {
    setIncidentAction: () => {},
    getIncident: () => {},
    incidentsList: [],
  };

  onClickIncident = () => {
    const {
      getIncident,
      incidentsList,
      setIncidentAction,
      incidentsAction,
    } = this.props;
    const { _id: selectedId } = incidentsList;
    incidentsAction.filter(incidentAction => {
      const { incident } = incidentAction;
      const { _id: incidentId } = incident;
      if (incidentId === selectedId) {
        const { _id: actionId } = incidentAction;
        return setIncidentAction(actionId);
      }
      return null;
    });
    getIncident(selectedId);
  };

  render() {
    const { incidentsList } = this.props;
    const { event, startedAt, endedAt, areas } = incidentsList;
    return (
      <List.Item className={cx('p-l-20')}>
        <List.Item.Meta
          className="IncidentItemMeta"
          title={
            <Row type="flex">
              <Col xs={20}>
                <span
                  role="link"
                  className={cx('name')}
                  onClick={this.onClickIncident}
                  onKeyDown={this.onClickIncident}
                  tabIndex="0"
                  title="Click to view more"
                >
                  <h3>{event}</h3>
                </span>
              </Col>
            </Row>
          }
          description={
            <div className="IncidentTypeDescription">
              <p>Created on: {convertIsoDate(startedAt)}</p>
              <p>Ended on: {convertIsoDate(endedAt)}</p>
              <p>Location: {areas.map(area => area)}</p>
            </div>
          }
        />
      </List.Item>
    );
  }
}
const mapStateToProps = state => ({
  selected: state.incidents.incident ? state.incidents.incident : [],
  incidentsAction: state.incidents.incidentActionsData
    ? state.incidents.incidentActionsData
    : [],
});

const mapDispatchToProps = {
  getIncident: getSelectedIncident,
  setIncidentAction: activeIncidentAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncidentsList);
