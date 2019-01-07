import { Badge, Button, Col, Layout, List, Popover, Row } from 'antd';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  getPlanPhaseActivities,
  openPlanActivityForm,
  selectPlanActivity,
} from '../../../actions';
import ActivityCard from '../ActivityCard';
import './style.css';

/* local constants */
const { Header, Content } = Layout;

function PhaseOptions({ onClickAddActivity }) {
  return (
    <Fragment>
      <div>
        <Button icon="plus" className="b-0" onClick={onClickAddActivity}>
          Add new action
        </Button>
      </div>
      <div>
        <Button icon="reload" className="b-0">
          Refresh
        </Button>
      </div>
      <div>
        <Button icon="sound" className="b-0">
          Disseminate
        </Button>
      </div>
      <div>
        <Button icon="hdd" className="b-0">
          Archive selected
        </Button>
      </div>
    </Fragment>
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
class PhaseActivities extends Component {
  state = { showPopover: false };

  /* default props */
  static defaultProps = {
    count: 0,
    activities: [],
  };

  /* props validation */
  static propTypes = {
    phase: PropTypes.string.isRequired,
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
    onClickEditActivity: PropTypes.func.isRequired,
    onLoadActivities: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { onLoadActivities, phase } = this.props;
    onLoadActivities(phase);
  }

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
    const { onClickAddActivity, phase } = this.props;
    onClickAddActivity(phase);
    this.hidePopover();
  };

  render() {
    const { phase, activities, onClickCard, onClickEditActivity } = this.props;

    const phaseActivities = activities[phase].list;
    const { loading, total } = activities[phase];
    const { showPopover } = this.state;

    return (
      <Layout className="PhaseActivities">
        {/* start phase header */}
        <Header className="header">
          <Row justify="space-between">
            <Col span={22}>
              {phase}
              <Badge
                count={total}
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
                <Button
                  phase={`${phase} Phase Actions`}
                  icon="ellipsis"
                  className="ActionButton"
                />
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
            dataSource={phaseActivities}
            bordered={false}
            loading={loading}
            renderItem={activity => (
              <List.Item>
                <ActivityCard
                  name={activity.name}
                  taskCount={20}
                  onClick={() => {
                    onClickCard(activity);
                  }}
                  onEditActivity={() => {
                    onClickEditActivity(activity);
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

const mapStateToProps = state => ({
  activities: state.planActivities,
});

const mapDispatchToProps = dispatch => ({
  onSelectActivity(activity) {
    dispatch(selectPlanActivity(activity));
    dispatch(openPlanActivityForm());
  },
  onLoadActivities(phase) {
    dispatch(getPlanPhaseActivities(phase));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhaseActivities);
