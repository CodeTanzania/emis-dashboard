import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Checkbox, Collapse, DatePicker } from 'antd';
import { bindActionCreators } from 'redux';
import {
  filterByIncidentType,
  filterIncidentByDate,
  getIncidentsSuccess,
} from '../../actions';
import './styles.css';

// constants
const { RangePicker } = DatePicker;
const { Panel } = Collapse;

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

  onChangeSeverity = checkedValues => {
    const { handleTypeFilter } = this.props;
    handleTypeFilter(checkedValues);
  };

  onDateChangeChange = dateString => {
    const { handleDateFilter, handleIncidents } = this.props;
    const formatedDate = dateString.map(date => date.toISOString());
    handleDateFilter(formatedDate);
    handleIncidents();
  };

  render() {
    const { filters } = this.props;
    const { severity } = filters;
    return (
      <div className="AlertFilter">
        <div className="AlertFilterDates">
          <div>Dates:</div>
          <RangePicker
            style={{ width: 'auto' }}
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
            placeholder={['Start Time', 'End Time']}
            onChange={this.onDateChangeChange}
          />
        </div>
        <Collapse
          accordion
          defaultActiveKey={['1']}
          style={{
            backgroundColor: '#fff',
            textAlign: 'center',
            border:'0px'
          }}
        >
            <Checkbox.Group
              onChange={this.onChangeSeverity}
              defaultValue={severity}
              className='p-10'
            >
              <Checkbox value="Family">Family</Checkbox>
              <Checkbox value="Name">Name</Checkbox>
            </Checkbox.Group>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filter,
});

const mapDispatchToProp = dispatch => ({
  handleDateFilter: bindActionCreators(filterIncidentByDate, dispatch),
  handleTypeFilter: bindActionCreators(filterByIncidentType, dispatch),
  handleIncidents: bindActionCreators(getIncidentsSuccess, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Form.create()(IncidentFilter));
