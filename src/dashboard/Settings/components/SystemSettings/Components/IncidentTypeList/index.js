import { List } from 'antd';
import React from 'react';
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
    const { triggerGetIncidentstype } = this.props;
    triggerGetIncidentstype();
  }
  render() {
    const { incidentsType } = this.props;

    return (
      <React.Fragment>
        <div >
          <List
            itemLayout="horizontal"
            dataSource={incidentsType}
            renderItem={incidentsType => (
              <IncidentTypeItem incidentSelected={incidentsType} />)}
          />
          <IncidentTypeListFooter />

        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    incidentsType: state.incidentsType.data
  }
}
const mapDispatchToProps = dispatch => {
  return {
    triggerGetIncidentstype: bindActionCreators(triggerGetIncidentstype, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncidentType)

