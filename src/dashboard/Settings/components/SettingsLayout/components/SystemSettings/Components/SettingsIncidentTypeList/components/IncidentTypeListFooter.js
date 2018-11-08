import { Button, Col, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

/* local constants */
const ButtonGroup = Button.Group;

function IncidentTypeListFooter({ total }) {
  return (
    <div className="footer p-10">
      <Row type="flex" justify="space-between">
        <Col span={10}>
          <h3>
            Total : &nbsp;
            <span className="f-15">{total}</span>
          </h3>
        </Col>
        <Col span={8}>
          <ButtonGroup>
            <Button icon="left" title="Previous" />
            <Button icon="right" title="Next" />
          </ButtonGroup>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = state => ({
  total: state.incidentsType.total,
});

export default connect(mapStateToProps)(IncidentTypeListFooter);

IncidentTypeListFooter.propTypes = {
  total: PropTypes.number,
};

IncidentTypeListFooter.defaultProps = {
  total: 0,
};
