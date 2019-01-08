import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Checkbox, Collapse, DatePicker } from 'antd';
import './styles.css';
import {
  setSeverityFilter,
  setExpectedAtFilter,
  getAlerts,
} from '../../../../actions';

const { RangePicker } = DatePicker;
const { Panel } = Collapse;

function AlertFilters({
  updateSeverityFilter,
  updateExpectedAtFilter,
  refreshMap,
}) {
  const onChangeSeverity = severity => {
    updateSeverityFilter(severity);
    refreshMap();
  };

  const onChangeDateFilter = dates => {
    const transFormedToISODates = dates.map(date => date.toISOString());
    updateExpectedAtFilter(transFormedToISODates);
    refreshMap();
  };

  return (
    <div className="AlertFilters">
      <div className="AlertFiltersDates">
        <div>View Alerts Expected Within:</div>
        <RangePicker
          showTime={{ format: 'HH:mm' }}
          format="YYYY-MM-DD HH:mm"
          placeholder={['From', 'To']}
          onChange={onChangeDateFilter}
        />
      </div>
      <div className="AlertFilterSeverity">
        <Collapse
          accordion
          defaultActiveKey={['1']}
          style={{
            backgroundColor: '#fff',
            textAlign: 'center',
          }}
        >
          <Panel header="SEVERITY" key="1">
            <Checkbox.Group onChange={onChangeSeverity}>
              <Checkbox className="Extreme" value="Extreme">
                Extreme
              </Checkbox>
              <Checkbox className="Severe" value="Severe">
                Severe
              </Checkbox>
              <Checkbox className="Moderate" value="Moderate">
                Moderate
              </Checkbox>
              <Checkbox className="Minor" value="Minor">
                Minor
              </Checkbox>
              <Checkbox className="Unknown" value="Unknown">
                Unknown
              </Checkbox>
            </Checkbox.Group>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  updateSeverityFilter(severity) {
    dispatch(setSeverityFilter(severity));
  },
  updateExpectedAtFilter(dates) {
    dispatch(setExpectedAtFilter(dates));
  },
  refreshMap() {
    dispatch(getAlerts());
  },
});

export default connect(
  null,
  mapDispatchToProps
)(AlertFilters);

AlertFilters.propTypes = {
  updateSeverityFilter: PropTypes.func,
  updateExpectedAtFilter: PropTypes.func,
  refreshMap: PropTypes.func,
};

AlertFilters.defaultProps = {
  updateSeverityFilter: () => {},
  updateExpectedAtFilter: () => {},
  refreshMap: () => {},
};
