import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, DatePicker } from 'antd';
import { filterIncidentByDate, getIncidentsSuccess } from '../../actions';
import './styles.css';

// constants
const { RangePicker } = DatePicker;

/**
 * IncidentFilter component
 *
 * @class
 * @name IncidentFilter
 *
 * @version 0.1.0
 * @since 0.1.0
 */

class IncidentFilter extends React.Component {
  static propTypes = {
    handleDateFilter: PropTypes.func.isRequired,
    handleIncidents: PropTypes.func.isRequired,
  };

  static defaulProps = {
    handleDateFilter: null,
    handleIncidents: null,
  };

  onDateChangeChange = dateString => {
    const { handleDateFilter, handleIncidents } = this.props;
    const formatedDate = dateString.map(date => date.toISOString());
    handleDateFilter(formatedDate);
    handleIncidents();
  };

  render() {
    return (
      <div className="IncidentFilter">
        <div className="p-l-20">
          <div className="IncidentFilterDates">
            <h3>Filter incident by date:</h3>
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

const mapStateToProps = state => ({
  incidents: state.incidents.data ? state.incidents.data : [],
});

const mapDispatchToProp = {
  handleDateFilter: filterIncidentByDate,
  handleIncidents: getIncidentsSuccess,
};

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Form.create()(IncidentFilter));
