import React from 'react';
import { Col, Row, Select, DatePicker, Button } from 'antd';
import moment from 'moment';
import className from 'classnames/bind'
import styles from './styles.css'

const cx = className.bind(styles);
const Option = Select.Option;
    
    const { RangePicker } = DatePicker;
    const dateFormat = 'YYYY/MM/DD';

export default class IncidentFilter extends React.Component {

  render() {

   function handleChange(value) {
      console.log(`selected ${value}`);
    }

    return (
      <Row className="filter" >
        <Col span={12} >
          <div>
            <Select defaultValue="Dar es Salaam" style={{ width: 180 }} onChange={handleChange} className={'selector_content'}>
              <Option value="Dar es Salaam">Dar es Salaam</Option>
              <Option value="Mwanza">Mwanza</Option>
              <Option value="Morogoro">Morogoro</Option>
            </Select>
            <Select defaultValue="Flood" style={{ width: 180 }} className={cx('selector_content')}>
              <Option value="Flood">Flood</Option>
              <Option value="Fire">Fire</Option>
              <Option value="Earthquick">Earthquick</Option>
            </Select>
            <RangePicker className={cx('selector_content')}
              defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
              format={dateFormat}
            />
          </div>
        </Col>
        <Col span={4} offset={8}>
        <Button type="primary" icon="plus" className={cx('primary')}>New Incident</Button>
        <Button type="primary" icon="export">Export</Button>
        </Col>
      </Row>
    )
  }
}
