import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Checkbox, Collapse, DatePicker } from 'antd';
import './styles.css';
import { setSeverityFilter, getAlerts } from '../../../../actions';

const { RangePicker } = DatePicker;
const { Panel } = Collapse;

function AlertFilters({ setFilter, refreshMap }) {
  const onChangeSeverity = severity => {
    setFilter(severity);
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
          onChange={() => {}}
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
  setFilter(severity) {
    dispatch(setSeverityFilter(severity));
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
  setFilter: PropTypes.func,
  refreshMap: PropTypes.func,
};

AlertFilters.defaultProps = {
  setFilter: () => {},
  refreshMap: () => {},
};
