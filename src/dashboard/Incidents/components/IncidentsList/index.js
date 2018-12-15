import PropTypes from 'prop-types';
import { Col, List, Row } from 'antd';
import classNames from 'classnames/bind';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles.css';
import { getSelectedIncident } from '../../actions';
import { convertIsoDate } from '../../../../common/lib/mapUtil';
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
    incidentsList: PropTypes.arrayOf(
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
    clickedIncidentList: PropTypes.func,
  };

  static defaultProps = {
    clickedIncidentList: null,
    getIncident: null,
    incidentsList: [],
  };

  onClick = () => {
    const { getIncident, incidentsList, clickedIncidentList } = this.props;
    const { _id: selectedId } = incidentsList;
    getIncident(selectedId);
    clickedIncidentList(incidentsList);
  };

  render() {
    const { incidentsList } = this.props;

    const { name, startedAt, endedAt } = incidentsList;
    return (
      <List.Item className={cx('p-l-20')}>
        <List.Item.Meta
          className="IncidentItemMeta"
          title={
            <Row type="flex">
              <Col xs={20}>
                <span
                  role="link"
                  className={cx('f-600 f-15', 'name')}
                  onClick={this.onClick}
                  onKeyDown={this.onClick}
                  tabIndex="0"
                  title="Click to view more"
                >
                  <h3>{name}</h3>
                </span>
              </Col>
            </Row>
          }
          description={
            <div className="IncidentTypeDescription">
              <p>Created on: {' '} {convertIsoDate(startedAt)}</p>
              <p>Ended on: {' '} {convertIsoDate(endedAt)}</p>
              {/* <p style={{paddingTop:'5px'}}>Description: {description}</p> */}
            </div>
          }
        />
      </List.Item>
    );
  }
}
const mapStateToProps = state => ({
  selected: state.selectedIncident.incident
    ? state.selectedIncident.incident
    : [],
});
const mapDispatchToProps = dispatch => ({
  getIncident: bindActionCreators(getSelectedIncident, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncidentsList);
