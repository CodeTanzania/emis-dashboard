import React from 'react';
import { Select } from 'antd';
import './styles.css';

const { Option } = Select;

function Display() {
  return (
    <div className="Display">
      <Select
        labelInValue
        defaultValue={{ key: 'current' }}
        onChange={() => {}}
      >
        <Option value="all">Display: All Alerts</Option>
        <Option value="current">Display: Today and on wards</Option>
      </Select>
    </div>
  );
}

export default Display;
