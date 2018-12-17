import { Table, Row, Col } from 'antd';
import React, { Fragment } from 'react';
import './styles.css';

export default function IncidentAssessiment() {
  const columns = [
    {
      title: 'Variable',
      dataIndex: 'variable',
      render: text => <span>{text}</span>,
    },
    {
      title: 'Number',
      dataIndex: 'number',
    },
  ];
  const data = [
    {
      key: '1',
      variable: 'Deaths',
      number: 32,
    },
    {
      key: '2',
      variable: 'Injuried',
      number: 42,
    },
    {
      key: '3',
      variable: 'Missing',
      number: 2,
    },
    {
      key: '4',
      variable: 'Relocated',
      number: 9,
    },
  ];

  return (
    <Fragment>
      <h3 style={{ borderBottom: '1px solid #e8e8e8', padding: '9px' }}>
        Effect Assessiment
      </h3>
      <Row className="p-20">
        <Col span={7}>
          <h3>People</h3>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Col>
        <Col span={7} offset={6}>
          <h3>Houses</h3>
          <Table columns={columns} dataSource={data} pagination={false} />
        </Col>
      </Row>
      <Row className="p-20">
        <Col span={7}>
          <h3>Infrastructure</h3>
          <Table columns={columns} dataSource={data} />
        </Col>
        <Col span={7} offset={6}>
          <h3>Social services</h3>
          <Table columns={columns} dataSource={data} />
        </Col>
      </Row>
    </Fragment>
  );
}
