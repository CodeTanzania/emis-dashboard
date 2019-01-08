import React from 'react';
import { Collapse, Timeline } from 'antd';
import './styles.css';

const { Panel } = Collapse;

function AlertActions() {
  return (
    <div className="AlertActions">
      <Collapse bordered={false} defaultActiveKey={['1']}>
        <Panel header={<h3>Notifications</h3>} key="1" className="Panel">
          <Timeline>
            <Timeline.Item> 10 committees notified</Timeline.Item>
            <Timeline.Item>4 teams notified </Timeline.Item>
            <Timeline.Item>3 departmentrs notified </Timeline.Item>
            <Timeline.Item>103 individuals notified</Timeline.Item>
          </Timeline>
        </Panel>
      </Collapse>
    </div>
  );
}

export default AlertActions;
