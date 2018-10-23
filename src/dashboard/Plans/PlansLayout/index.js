import { Button, Col, Drawer, Icon, Layout, List, Row, Spin } from 'antd';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from '../../../common/components/Select';
import Toolbar from '../../../common/components/Toolbar';
import PlanCard from './components/PlanCard';
import PlanForm from './components/PlanForm';
import './styles.css';

/* local constants */
const { Header, Content } = Layout;
const { Filters, Actions } = Toolbar;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
// fake data
const options = [
  { label: 'Flood', value: 'flood' },
  { label: 'Fire', value: 'fire' },
  { label: 'Epidemic', value: 'epidemic' },
];

/**
 * Render Initial List of plans based on selected filters
 *
 * @class
 * @name PlansLayout
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class PlansLayout extends Component {
  state = { showForm: false };

  propTypes = {
    plans: PropTypes.arrayOf(
      PropTypes.shape({
        incidentType: PropTypes.shape({
          name: PropTypes.string,
          color: PropTypes.string,
        }),
      })
    ),
    loading: PropTypes.boolean,
  };

  /**
   * Show modal window which have plan form
   *
   * @function
   * @name showPlanForm
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  showPlanForm = () => {
    this.setState({ showForm: true });
  };

  /**
   * Hide modal window which have plan form
   *
   * @function
   * @name hidePlanForm
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  hidePlanForm = () => {
    this.setState({ showForm: false });
  };

  render() {
    const { showForm } = this.state;
    const { plans, loading } = this.props;

    return (
      <Layout className="PlansLayout">
        {/* start primary header */}
        <Header className="header">
          <h3>Plans</h3>
        </Header>
        {/* end primary header */}
        {/* Toolbar */}
        <Toolbar>
          <Filters span={21}>
            <Row>
              <Col span={4}>
                <Select
                  options={options}
                  placeholder="Select Incident type"
                  style={{ width: '250px' }}
                  onChange={() => {}}
                />
              </Col>
            </Row>
          </Filters>
          <Actions span={3}>
            <Row type="flex" justify="center">
              <Col span={12}>
                <Button
                  icon="plus"
                  type="primary"
                  title="Create New Plan"
                  onClick={this.showPlanForm}
                >
                  New Plan
                </Button>
              </Col>
            </Row>
          </Actions>
        </Toolbar>
        {/* end Toolbar */}
        {/* Plan list content */}
        <Content className="content">
          <Spin
            indicator={antIcon}
            size="large"
            tip="Loading Plans ..."
            spinning={loading}
          >
            {/* plan list container */}
            <div className="listCardContainer">
              {/* plan list */}
              <List
                grid={{ gutter: 10, xs: 1, sm: 2, md: 3, lg: 3, xl: 3, xxl: 4 }}
                dataSource={plans}
                renderItem={plan => (
                  <List.Item>
                    <PlanCard
                      incidentType={plan.incidentType.name}
                      jurisdiction="Dar es Salaam"
                      description={plan.description}
                      nature={plan.incidentType.nature}
                      family={plan.incidentType.family}
                      updatedAt={plan.updatedAt}
                      color={plan.incidentType.color}
                      activityCount={20}
                    />
                  </List.Item>
                )}
              />
              {/* end plan list */}
            </div>
            {/* end plan list container */}
          </Spin>
        </Content>
        {/* end Plan list content */}
        {/* drawer for showing plan form */}
        <Drawer
          title="Create New Plan"
          placement="right"
          width="35%"
          onClose={this.hidePlanForm}
          maskClosable={false}
          visible={showForm}
        >
          {/* plan form */}
          <PlanForm onCancel={this.hidePlanForm} />
          {/* end plan form */}
        </Drawer>
        {/* end drawer for showing plan form */}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  plans: state.plans.data,
  loading: state.plans.loading,
});

export default connect(mapStateToProps)(PlansLayout);
