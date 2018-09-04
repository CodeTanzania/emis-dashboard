
import React from 'react';
import { Select } from 'antd';

function handleChange(value) {
    console.log(value);
  }
export default function AlertFilters() {
    const Option = Select.Option;
    return(
        <React.Fragment>
            <Select labelInValue defaultValue={{ key: 'lucy' }} style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack (100)</Option>
                <Option value="lucy">Lucy (101)</Option>
            </Select>
            <Select labelInValue defaultValue={{ key: 'lucy' }} style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack (100)</Option>
                <Option value="lucy">Lucy (101)</Option>
            </Select>
            <Select labelInValue defaultValue={{ key: 'lucy' }} style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack (100)</Option>
                <Option value="lucy">Lucy (101)</Option>
            </Select>
            <Select labelInValue defaultValue={{ key: 'lucy' }} style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack (100)</Option>
                <Option value="lucy">Lucy (101)</Option>
            </Select>
        </React.Fragment>              
    );
}