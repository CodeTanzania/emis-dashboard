import { List } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { triggerGetIncidentstype } from '../../../../actions';
/* import component */
import IncidentTypeListFooter from './FooterList';
import IncidentTypeItem from './ItemList';


const fakeData = [
  {
    name: 'Flood', family: 'Geophysical', description: 'trcs@mail.com', code: {
      "given": "NMA",
      "cap": "Geo"
    }, natural: "Natural", color: '#00a2ae'
  },
  {
    name: 'Earthquick', family: 'Other', description: 'trcs@mail.com', code: {
      "given": "NMA",
      "cap": "Geo"
    }, natural: "Technological/Man-Made", color: '#f56a00'
  },
  {
    name: 'Flog', family: 'Meteorological', description: `Provident provident labore. Qui
   consectetur nihil nulla cumque reiciendis accusamus`, code: {
      "given": "NMA",
      "cap": "Geo"
    }, natural: "Natural", color: '#00a2ae'
  },
  {
    name: 'Volcanic Activity', family: 'Meteorological', description: 'trcs@mail.com', code: {
      "given": "NMA",
      "cap": "Geo"
    }, natural: "Technological/Man-Made", color: '#00a2ae'
  },
  {
    name: 'Landslide', family: 'Meteorological', description: 'trcs@mail.com'
    , code: {
      "given": "NMA",
      "cap": "Geo"
    }, natural: "Natural", color: '#f56a00'
  },
  {
    name: 'Storm', family: 'Meteorological', description: 'trcs@mail.com', code: {
      "given": "NMA",
      "cap": "Geo"
    }, natural: "Technological/Man-Made"
  },
  {
    name: 'Mass movement', family: 'Geophysical', description: 'trcs@mail.com', code: {
      "given": "NMA",
      "cap": "Geo"
    }, natural: "Technological/Man-Made", color: '#00a2ae'
  },
  {
    name: 'Wave action', family: 'Geophysical', description: 'trcs@mail.com', code: {
      "given": "NMA",
      "cap": "Geo"
    }, natural: "Natural", color: '#00a2ae'
  },
  {
    name: 'Storm', family: 'Meteorological', description: 'trcs@mail.com', code: {
      "given": "NMA",
      "cap": "Geo"
    }, natural: "Technological/Man-Made", color: '#f56a00'
  },
  {
    name: 'Mass movement', family: 'Geophysical', description: 'trcs@mail.com', code: {
      "given": "NMA",
      "cap": "Geo"
    }, natural: "Technological/Man-Made", color: '#00a2ae'
  },
  {
    name: 'Wave action', family: 'Geophysical', description: 'trcs@mail.com', code: {
      "given": "NMA",
      "cap": "Geo"
    }, natural: "Natural", color: '#f56a00'
  }
];

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

