import React from 'react';
import { Collapse } from 'antd';
import './styles.css';

const { Panel } = Collapse;

function AlertResources() {
  return (
    <div className="AlertResources">
      <Collapse bordered={false} defaultActiveKey={['1']}>
        <Panel header={<h3>Documents</h3>} key="1" className="Panel">
          <p>Currently there are no documents attached to this Alert!</p>
        </Panel>
      </Collapse>
      <Collapse bordered={false} defaultActiveKey={['1']}>
        <Panel header={<h3>Audio</h3>} key="1" className="Panel">
          <p>Currently there is no audio attached to this Alert!</p>
        </Panel>
      </Collapse>
    </div>
  );
}

export default AlertResources;
