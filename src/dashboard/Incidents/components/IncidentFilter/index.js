import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, DatePicker } from 'antd';
import { bindActionCreators } from 'redux';
import {
  filterIncidentByDate,
  getIncidentsSuccess,
} from '../../actions';
import './styles.css';

// constants
const { RangePicker } = DatePicker;

class IncidentFilter extends React.Component {
  static propTypes = {
    handleDateFilter: PropTypes.func.isRequired,
    handleIncidents: PropTypes.func.isRequired,
    handleTypeFilter: PropTypes.func.isRequired,
    filters: PropTypes.arrayOf({
      incidentFilter: PropTypes.string,
      incidentDateFilter: PropTypes.string,
    }).isRequired,
  };

  static defaulProps = {
    handleDateFilter: null,
    handleIncidents: null,
    handleTypeFilter: null,
  };

  componentDidMount() {
    // const { handleIncidents } = this.props;
    // handleIncidents();
  }

  onDateChangeChange = dateString => {
    const { handleDateFilter, handleIncidents } = this.props;
    const formatedDate = dateString.map(date => date.toISOString());
    handleDateFilter(formatedDate);
    handleIncidents();
  };

  // visibilityFilter = () =>{
  //   console.log("clicked")
  //   const {incidents} = this.props;
  //    incidents.filter(incident =>{ 
  //   const {incidentType} = incident;
  //     if (incidentType.family === 'Biological'){
  //       console.log('get it');
  //       console.log(incident)
  //       return incident
  //     }
  //     else {
  //       return null
  //     }
  //   });
  // }

  render() {
    return (
      <div className="IncidentFilter">
        <div className="p-10">
          <div className="IncidentFilterDates">
            <h3>Dates:</h3>
            <RangePicker
              style={{ width: 'auto' }}
              showTime={{ format: 'HH:mm' }}
              format="YYYY-MM-DD HH:mm"
              placeholder={['Start Time', 'End Time']}
              onChange={this.onDateChangeChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
  filters: state.filter,
  incidents: state.incidents.data ? state.incidents.data : [],
}};

const mapDispatchToProp = dispatch => ({
  handleDateFilter: bindActionCreators(filterIncidentByDate, dispatch),
  handleIncidents: bindActionCreators(getIncidentsSuccess, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Form.create()(IncidentFilter));
