import { List } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { triggerGetIncidentstype } from '../../../../actions';
/* import component */
import IncidentTypeListFooter from './FooterList';
import IncidentTypeItem from './ItemList';

/**
 * IncidentType list component
 *
 * @class
 * @name IncidentType
 *
 * @version 0.1.0
 * @since 0.1.0
 */

class IncidentType extends React.Component {
  componentDidMount() {
    const { getIncidentstypeTrigger } = this.props;
    getIncidentstypeTrigger();
  }

  render() {
    const { incidentsType } = this.props;

    return (
      <React.Fragment>
        <div>
          <List
            itemLayout="horizontal"
            dataSource={incidentsType}
            renderItem={incidentType => (
              <IncidentTypeItem incidentSelected={incidentType} />
            )}
          />
          <IncidentTypeListFooter />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  incidentsType: state.incidentsType.data,
});
const mapDispatchToProps = dispatch => ({
  getIncidentstypeTrigger: bindActionCreators(
    triggerGetIncidentstype,
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncidentType);

const incidentsTypePropTypes = PropTypes.shape({
  name: PropTypes.string,
  nature: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
  code: PropTypes.shape({
    given: PropTypes.string,
    cap: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string,
  color: PropTypes.string,
  _id: PropTypes.string,
}).isRequired;

IncidentType.propTypes = {
  getIncidentstypeTrigger: PropTypes.func,
  incidentsType: PropTypes.arrayOf(incidentsTypePropTypes),
};

IncidentType.defaultProps = {
  getIncidentstypeTrigger: () => {},
  incidentsType: [],
};
