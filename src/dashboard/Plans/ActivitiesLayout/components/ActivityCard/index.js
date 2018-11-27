import { Badge, Button, Card, Col, Icon, Popover, Row } from 'antd';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import './styles.css';

/**
 * Activity Options
 *
 * @param {Object} props
 * @param {function} props.onEditActivity
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function ActivityOptions({ onEditActivity }) {
  return (
    <Fragment>
      <div>
        <Button icon="poweroff" className="b-0">
          Activate
        </Button>
      </div>
      <div>
        <Button icon="sound" className="b-0">
          Disseminate
        </Button>
      </div>
      <div>
        <Button icon="edit" className="b-0" onClick={onEditActivity}>
          Edit Activity
        </Button>
      </div>
      <div>
        <Button icon="hdd" className="b-0">
          Archive Activity
        </Button>
      </div>
    </Fragment>
  );
}

/**
 * Action card component
 *
 * @function
 * @name Action
 *
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.incident
 * @param {number} props.taskCount
 *
 * @version 0.1.0
 * @since 0.1.0
 */

export default class ActivityCard extends Component {
  state = {
    showPopover: false,
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    taskCount: PropTypes.number,
    onClick: PropTypes.func.isRequired,
    onEditActivity: PropTypes.func.isRequired,
  };

  static defaultProps = {
    taskCount: 0,
  };

  /**
   * Handle popover visibility change
   *
   * @function
   * @name handlePopoverVisibilityChange
   *
   * @param {boolean} isVisible
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handlePopoverVisibilityChange = isVisible => {
    this.setState({ showPopover: isVisible });
  };

  /**
   * Handle hide popover component
   *
   * @function
   * @name handleHidePopover
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleHidePopover = () => {
    this.setState({ showPopover: false });
  };

  /**
   * Handle edit plan action
   *
   * @function
   * @name handleEditPlan
   *
   * @param {Event} e - Event triggered object
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleEditActivity = e => {
    const { onEditActivity } = this.props;
    e.preventDefault();
    onEditActivity();
    this.handleHidePopover();
  };

  render() {
    const { showPopover } = this.state;
    const { name, taskCount, onClick } = this.props;

    return (
      <Card className="ActivityCard">
        <Row type="flex" justify="space-around" onClick={onClick}>
          <Col span={20}>
            <h4 title={name} className="name">
              {name}
            </h4>
            <Row>
              <Col span={8} title="Participant Stakeholders">
                <Icon type="team" /> {` : 10`}
              </Col>
              <Col span={8} title="Resource Count">
                <Icon type="gold" /> {` : 10`}
              </Col>
            </Row>
          </Col>
          <Col title="SOP count" span={2} className="tasksBadge">
            <Badge
              count={taskCount}
              style={{
                backgroundColor: '#fff',
                color: '#999',
                boxShadow: '0 0 0 1px #d9d9d9 inset',
              }}
            />
            <p className="tasksBadgeTitle">SOP(s)</p>
          </Col>
        </Row>
        <Popover
          content={<ActivityOptions onEditActivity={this.handleEditActivity} />}
          trigger="hover"
          placement="bottomRight"
          visible={showPopover}
          onVisibleChange={this.handlePopoverVisibilityChange}
        >
          <Button
            icon="ellipsis"
            className="ActionButton"
            onClick={e => e.preventDefault()}
          />
        </Popover>
      </Card>
    );
  }
}

/* props validation */
ActivityOptions.propTypes = {
  onEditActivity: PropTypes.func.isRequired,
};
