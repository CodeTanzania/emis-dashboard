import { Badge, Button, Col, Layout, List, Popover, Row } from 'antd';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ActivityCard from '../ActivityCard';
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
 * Phase Activities component
 * This renders Phase Header and Phase content which is a list of activities
 * under a particular phase.
 *
 * @function
 * @name Phase
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default class PhaseActivities extends Component {
  state = { showPopover: false };

  /* default props */
  static defaultProps = {
    count: 0,
    activities: [],
  };

  /* props validation */
  static propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number,
    activities: PropTypes.arrayOf(
      PropTypes.shape({
        plan: PropTypes.shape({ description: PropTypes.string }),
        incidentType: PropTypes.shape({ name: PropTypes.string }),
        name: PropTypes.string,
        description: PropTypes.string,
        taskCount: PropTypes.number,
      })
    ),
    onClickCard: PropTypes.func.isRequired,
    onClickAddActivity: PropTypes.func.isRequired,
  };

  /**
   * Handle popover visible prop
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
   * Hide popover component
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
    const { onClickAddActivity, title } = this.props;
    onClickAddActivity(title);
    this.hidePopover();
  };

  render() {
    const { title, count, activities, onClickCard } = this.props;

    const { showPopover } = this.state;
    return (
      <Layout className="PhaseActivities">
        {/* start phase header */}
        <Header className="header">
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
        {/* end phase header */}
        {/* start phase content */}
        <Content className="content">
          {/* Activity list */}
          <List
            grid={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
            dataSource={activities}
            bordered={false}
            renderItem={activity => (
              <List.Item>
                <ActivityCard
                  name={activity.name}
                  taskCount={20}
                  onClick={() => {
                    onClickCard(activity);
                  }}
                />
              </List.Item>
            )}
          />
          {/* end Activity list */}
        </Content>
        {/* end phase content */}
      </Layout>
    );
  }
}

/* Props validation */
PhaseOptions.propTypes = {
  onClickAddActivity: PropTypes.func.isRequired,
};
