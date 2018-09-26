import { Badge, Button, Col, Layout, List, Popover, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import ActionCard from './components/ActionCard';
import './style.css';

/* local constants */
const { Header, Content } = Layout;
const options = (
  <div>
    <div>
      <Button icon="plus" className="b-0">
        Add new action
      </Button>
    </div>
    <div>
      <Button icon="hdd" className="b-0">
        Archive selected
      </Button>
    </div>
  </div>
);

/**
 * Phase component
 * This renders Phase Header and Phase content which is a list of actions
 * under a particular phase.
 *
 * @function
 * @name Phase
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function Phase({ title, count, actions }) {
  return (
    <Layout
      style={{
        borderRight: '1px solid #e0e0e0',
        height: '100%',
      }}
    >
      {/* start header */}
      <Header
        style={{
          background: '#fff',
          paddingLeft: 10,
          borderBottom: '1px solid #E0E0E0',
        }}
      >
        <Row justify="space-between">
          <Col span={22}>
            {title}
            <Badge
              count={count}
              style={{
                display: 'block-inline',
                marginLeft: '10px',
                backgroundColor: '#fff',
                color: '#999',
                boxShadow: '0 0 0 1px #d9d9d9 inset',
              }}
            />
          </Col>
          <Col span={1}>
            <Popover placement="bottom" trigger="click" content={options}>
              <Button icon="ellipsis" className="f-20 b-0" />
            </Popover>
          </Col>
        </Row>
      </Header>
      {/* end header */}
      {/* start content */}
      <Content
        style={{
          backgroundColor: '#fff',
          paddingTop: '20px',
          height: '100%',
          overflowY: 'auto',
        }}
      >
        {/* Action list */}
        <List
          grid={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
          dataSource={actions}
          bordered={false}
          renderItem={action => (
            <List.Item>
              <ActionCard {...action} />
            </List.Item>
          )}
        />
        {/* end Action list */}
      </Content>
      {/* end content */}
    </Layout>
  );
}

/* default props */
Phase.defaultProps = {
  count: 0,
  actions: [],
};

/* Props validation */
Phase.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      incident: PropTypes.string,
      taskCount: PropTypes.number,
    })
  ),
};
