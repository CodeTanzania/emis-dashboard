import { List } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchIncidentstype } from '../../../../../../actions';
/* import component */
import IncidentTypeListFooter from './components/IncidentTypeListFooter';
import IncidentTypeItem from './components/IncidentTypeItemList';

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
  static propTypes = {
    getIncidentstypeTrigger: PropTypes.func,
    incidentsType: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        nature: PropTypes.string.isRequired,
        family: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
        cap: PropTypes.string.isRequired,
        description: PropTypes.string,
        color: PropTypes.string,
        _id: PropTypes.string,
      }).isRequired
    ),
  };

  static defaultProps = {
    getIncidentstypeTrigger: () => {},
    incidentsType: [],
  };

  componentDidMount() {
    const { getIncidentstypeTrigger } = this.props;
    getIncidentstypeTrigger();
  }

  render() {
    const { incidentsType } = this.props;

    return (
      <div className="content scrollable">
        <List
          itemLayout="horizontal"
          dataSource={incidentsType}
          renderItem={incidentType => (
            <IncidentTypeItem incidentSelected={incidentType} />
          )}
        />
        <IncidentTypeListFooter />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  incidentsType: state.incidentsType.data,
});

const mapDispatchToProps = dispatch => ({
  getIncidentstypeTrigger: bindActionCreators(fetchIncidentstype, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncidentType);
