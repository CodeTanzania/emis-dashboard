import {
 Checkbox, Col, List, Row 
} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

export default function FiltersGroup({ header, data }) {
  return (
    <div>
      {/* header */}
      <Row>
        <Col span={24} style={{ color: 'blue', padding: '20px' }}>
          <h3>
            {header}
          </h3>
        </Col>
      </Row>
      {/* end header */}
      {/* start content */}
      <List
        dataSource={data}
        renderItem={item => (
          <List.Item style={{ paddingLeft: '20px', border: 'none' }}>
            <List.Item.Meta
              avatar={<Checkbox />}
              title={(
                <Row>
                  <Col xs={24}>
                    <span className="f-600 f-15">
                      {item.name}
                    </span>
                  </Col>
                </Row>
              )}
            />
          </List.Item>
        )}
      />

      {/* end content */}
    </div>
  );
}

FiltersGroup.propTypes = {
  header: PropTypes.string.isRequired,
};
