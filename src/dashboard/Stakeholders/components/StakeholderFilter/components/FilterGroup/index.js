import { Badge, Checkbox, Col, List, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * FilterTitle component for list item
 *
 * @param {Object} props
 * @param {string} props.name
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function FilterTitle({ name }) {
  return (
    <Row type="flex" justify="space-between">
      <Col span={16}>
        <Checkbox>
          <span className="f-600 f-15">{name}</span>
        </Checkbox>
      </Col>
      <Col span={4}>
        <Badge
          count={10}
          style={{
            backgroundColor: '#fff',
            color: '#999',
            boxShadow: '0 0 0 1px #d9d9d9 inset',
          }}
        />
      </Col>
    </Row>
  );
}

/**
 * Render filters under their respective groups
 *
 * @function
 * @name FilterGroup
 *
 * @param {Object} props - Prop object
 * @param {string} props.name - filter group name
 * @param {Object[]} props.filters - list of filters in a group
 * @param {string} props.filters[].name - name of the filter item
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function FiltersGroup({ name, filters }) {
  return (
    <div>
      {/* header */}
      <Row>
        <Col span={24} className="p-20">
          <h3>{name}</h3>
        </Col>
      </Row>
      {/* end header */}
      {/* start content */}
      <List
        dataSource={filters}
        renderItem={item => (
          <List.Item className="p-l-20 b-0">
            <List.Item.Meta title={<FilterTitle name={item.name} />} />
          </List.Item>
        )}
      />
      {/* end content */}
    </div>
  );
}

/* props validation */
FiltersGroup.propTypes = {
  name: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
    .isRequired,
};

FilterTitle.propTypes = {
  name: PropTypes.string.isRequired,
};
