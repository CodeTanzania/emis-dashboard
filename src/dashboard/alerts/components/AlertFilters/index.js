
import React from 'react';
import { Select, DatePicker } from 'antd';
import moment from 'moment';
import classnames from 'classnames';
import styles from './index.css';

const cx = classnames.bind(styles);
const dateFormat = 'YYYY/MM/DD';
function handleChange(value) {
    console.log(value);
  }
export default function AlertFilters() {
    const Option = Select.Option;
    return(
        <React.Fragment>
            <Select placeholder="Region" size='large' onChange={handleChange}>
            <Option value="daressalaam">Dar es salaam</Option>
            </Select>
            <Select placeholder="Incident Type" size='large' onChange={handleChange}>
                <Option value="flood">Flood</Option>
                <Option value="fire">Fire</Option>
            </Select>
            <DatePicker size='large' defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
            <Select placeholder="Issuerer" size='large' onChange={handleChange}>
                <Option value="tma">TMA</Option>
            </Select>
        </React.Fragment>              
    );
}