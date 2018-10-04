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
  constructor(props){
    super(props)
    this.state= {
      incidentsType : []
    }
  }
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }
componentDidMount(){
const {triggerGetIncidentstype} = this.props;
triggerGetIncidentstype();
}
  render() {
    const { incidents } = this.props;

    return (
      <React.Fragment>
        <div className="content scrollable">
          <List
            itemLayout="horizontal"
            dataSource={incidents}
            renderItem={incidents => (<IncidentTypeItem {...incidents} />)}
          />
        </div>
        <IncidentTypeListFooter />
      </React.Fragment>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    triggerGetIncidentstype: bindActionCreators(triggerGetIncidentstype, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(IncidentType)

