import { Badge, Button, Col, Layout, List, Popover, Row } from 'antd';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ActionCard from '../ActivityCard';
import './style.css';

/* local constants */
const { Header, Content } = Layout;

function PhaseOptions({ onClickAddActivity }) {
  return (
    <div>
      <div>
        <Button icon="plus" className="b-0" onClick={onClickAddActivity}>
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
}

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
export default class Phase extends Component {
  state = { showPopover: false };

  /**
   * Handle Antd popover visible prop
   *
   * @function
   * @name handlePopoverVisibleChange
   *
   * @param {Boolean} visible
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handlePopoverVisibleChange = visible => {
    this.setState({ showPopover: visible });
  };

  /**
   * Hide Antd popover component
   *
   * @function
   * @name hidePopover
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  hidePopover = () => {
    this.setState({ showPopover: false });
  };

  /**
   * Handle onClickAddActivity popover option
   *
   * @function
   * @name  handleAddNewActivity
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleAddNewActivity = () => {
    const { onClickAddActivity } = this.props;
    onClickAddActivity();
    this.hidePopover();
  };

  render() {
    const { title, count, actions, onClickCard } = this.props;

    const { showPopover } = this.state;
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
              <Popover
                placement="bottom"
                trigger="click"
                content={
                  <PhaseOptions
                    onClickAddActivity={this.handleAddNewActivity}
                  />
                }
                visible={showPopover}
                onVisibleChange={this.handlePopoverVisibleChange}
              >
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
                <ActionCard {...action} onClick={onClickCard} />
              </List.Item>
            )}
          />
          {/* end Action list */}
        </Content>
        {/* end content */}
      </Layout>
    );
  }
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
  onClickCard: PropTypes.func.isRequired,
  onClickAddActivity: PropTypes.func.isRequired,
};

PhaseOptions.propTypes = {
  onClickAddActivity: PropTypes.func.isRequired,
};
