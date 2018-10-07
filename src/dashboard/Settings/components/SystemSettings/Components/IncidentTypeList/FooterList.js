import { Button, Col, Row } from 'antd';
import React from 'react';


/* local constants */
const ButtonGroup = Button.Group;


export default function IncidentTypeListFooter(props) {
  const {total} = props
  return (
    <div className="footer p-10">
      <Row type="flex" justify="space-between">
        <Col span={8}>
          <h3>
            Total : &nbsp;
            <span className="f-15">
              {total}
            </span>
          </h3>
        </Col>
        <Col span={10}>
          <ButtonGroup>
            <Button icon="reload" title="Refresh incidents-type" />
            <Button icon="export" title="Export incidents-type" />
            <Button icon="bars" title="Sort incidents-type" />
            <Button icon="left" title="Previous" />
            <Button icon="right" title="Next" />
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
}