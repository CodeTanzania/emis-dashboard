
import React from 'react';
import { Select, DatePicker } from 'antd';
import moment from 'moment';
import classnames from 'classnames';
import styles from './index.css';

const cx = classnames.bind(styles);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const filterSelectStyles = { width: '8vw', marginRight: '0.8vw' };
function handleChange(value) {
    console.log(value);
  }
export default function AlertFilters() {
    const Option = Select.Option;
    return(
        <React.Fragment>
            <Select placeholder="Region" style={filterSelectStyles} size='large' onChange={handleChange}>
            <Option value="daressalaam">Dar es salaam</Option>
            </Select>
            <Select placeholder="Incident Type" style={filterSelectStyles} size='large' onChange={handleChange}>
                <Option value="flood">Flood</Option>
                <Option value="fire">Fire</Option>
            </Select>
            <RangePicker
            defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
            format={dateFormat} style={{ width: '16vw', marginRight: '0.8vw' }} size='large'
            />
            <Select placeholder="Issuerer" style={filterSelectStyles}  size='large' onChange={handleChange}>
                <Option value="tma">TMA</Option>
            </Select>
        </React.Fragment>              
    );
}