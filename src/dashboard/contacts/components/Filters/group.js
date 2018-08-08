import { Badge, Checkbox, Col, List, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

export default function FiltersGroup({ header, data }) {
  return (
    <div>
      {/* header */}
      <Row>
        <Col span={24} className="p-20">
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
          <List.Item className="p-l-20 b-0">
            <List.Item.Meta
              title={(
                <Row type="flex" justify="space-between">
                  <Col span={16}>
                    <Checkbox>
                      <span className="f-600 f-15">
                        {item.name}
                      </span>

                    </Checkbox>
                  </Col>
                  <Col span={4}>
                    <Badge
                    count={10}
                    style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }}
                    />
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
