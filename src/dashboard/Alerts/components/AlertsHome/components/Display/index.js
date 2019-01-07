import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Select } from 'antd';
import moment from 'moment';
import { humanTimeToday } from '../../../../helpers';
import { getAlerts, setExpectedAtFilter } from '../../../../actions';
import './styles.css';

const { Option } = Select;

function Display({ getTodayAlerts, setCurrentDate }) {
  const handleChange = ({ key }) => {
    if (key === 'all') {
      setCurrentDate(null);
    }

    if (key === 'current') {
      const today = moment().toISOString();
      const future = moment()
        .add(1, 'year')
        .toISOString();
      const dateRange = [today, future];
      setCurrentDate(dateRange);
    }

    getTodayAlerts();
  };

  return (
    <div className="Display">
      <Select
        labelInValue
        defaultValue={{ key: 'current' }}
        onChange={handleChange}
      >
        <Option value="all">Display: All Alerts</Option>
        <Option value="current">{`Display: Today (${humanTimeToday()}) and onwards`}</Option>
      </Select>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  getTodayAlerts() {
    dispatch(getAlerts());
  },
  setCurrentDate(dateRange) {
    dispatch(setExpectedAtFilter(dateRange));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(Display);

Display.propTypes = {
  getTodayAlerts: PropTypes.func,
  setCurrentDate: PropTypes.func,
};

Display.defaultProps = {
  getTodayAlerts: () => {},
  setCurrentDate: () => {},
};
