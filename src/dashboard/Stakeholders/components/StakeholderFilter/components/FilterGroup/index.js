import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Checkbox, Col, List, Row } from 'antd';
import { connect } from 'react-redux';
import { toggleStakeholderFilter } from '../../../../actions';

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
const FiltersGroup = ({
  groupName,
  filters,
  handleToggleStakeholderFilter,
}) => {
  const onChange = (filter, selected) => {
    handleToggleStakeholderFilter(groupName, filter.name, selected);
  };

  return (
    <div>
      {/* header */}
      <Row>
        <Col span={24} className="p-20">
          <h3>{groupName}</h3>
        </Col>
      </Row>
      {/* end header */}
      {/* start content */}
      <List
        dataSource={filters}
        renderItem={item => (
          <List.Item className="p-l-20 b-0">
            <List.Item.Meta
              title={
                <Row type="flex" justify="space-between">
                  <Col span={16}>
                    <Checkbox
                      onChange={event => onChange(item, event.target.checked)}
                      checked={item.selected}
                    >
                      <span className="f-600 f-15">{item.name}</span>
                    </Checkbox>
                  </Col>
                  <Col span={4}>
                    <Badge
                      count={item.count}
                      style={{
                        backgroundColor: '#fff',
                        color: '#999',
                        boxShadow: '0 0 0 1px #d9d9d9 inset',
                      }}
                    />
                  </Col>
                </Row>
              }
            />
          </List.Item>
        )}
      />
      {/* end content */}
    </div>
  );
};

/* props validation */
FiltersGroup.propTypes = {
  groupName: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
    .isRequired,
  handleToggleStakeholderFilter: PropTypes.func.isRequired,
};

export default connect(
  null,
  { handleToggleStakeholderFilter: toggleStakeholderFilter }
)(FiltersGroup);
