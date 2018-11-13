import {
  Button,
  Col,
  Drawer,
  Icon,
  Layout,
  List,
  Pagination,
  Row,
  Spin,
} from 'antd';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIncidentTypes } from '../../../common/API/api';
import SelectSearchBox from '../../../common/components/SelectSearchBox';
import Toolbar from '../../../common/components/Toolbar';
import {
  getPlanActivities,
  getPlans,
  resetPlanFilters,
  selectPlan,
  updatePlanFilters,
} from '../actions';
import PlanCard from './components/PlanCard';
import PlanForm from './components/PlanForm';
import './styles.css';

/* local constants */
const { Header, Content } = Layout;
const { Filters, Actions, Pagination: ToolbarPagination } = Toolbar;
const spinIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

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

  static propTypes = {
    plans: PropTypes.arrayOf(
      PropTypes.shape({
        incidentType: PropTypes.shape({
          name: PropTypes.string,
          color: PropTypes.string,
        }),
      })
    ),
    page: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    onSelectPlan: PropTypes.func.isRequired,
    onPaginate: PropTypes.func.isRequired,
    onFilterByIncidentType: PropTypes.func.isRequired,
  };

  static defaultProps = {
    plans: [],
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
    const {
      page,
      plans,
      total,
      loading,
      onSelectPlan,
      onPaginate,
      onFilterByIncidentType,
    } = this.props;

    return (
      <Spin
        indicator={spinIcon}
        size="large"
        tip="Loading Plans ..."
        spinning={loading}
        style={{ top: '30%' }}
      >
        <Layout className="PlansLayout">
          {/* start primary header */}
          <Header className="header">
            <h3>Plans</h3>
          </Header>
          {/* end primary header */}
          {/* Toolbar */}
          <Toolbar>
            <Filters span={17}>
              <Row>
                <Col span={5}>
                  <SelectSearchBox
                    onChange={onFilterByIncidentType}
                    onSearch={getIncidentTypes}
                    placeholder="Filter by Incident Type"
                    style={{ width: '250px' }}
                    optionLabel="name"
                    optionValue="_id"
                  />
                </Col>
                <Col span={5}>
                  <SelectSearchBox
                    onChange={() => {}}
                    onSearch={getIncidentTypes}
                    placeholder="Filter by Plan Location"
                    style={{ width: '250px' }}
                    optionLabel="name"
                    optionValue="_id"
                  />
                </Col>
                <Col span={5}>
                  <SelectSearchBox
                    onChange={() => {}}
                    onSearch={getIncidentTypes}
                    placeholder="Filter by Plan Owner"
                    style={{ width: '250px' }}
                    optionLabel="name"
                    optionValue="_id"
                  />
                </Col>
              </Row>
            </Filters>
            <ToolbarPagination span={4}>
              <Pagination
                current={page}
                simple
                defaultCurrent={1}
                total={total}
                className="pagination"
                onChange={onPaginate}
              />
            </ToolbarPagination>
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
                      onClickPlan={() => {
                        onSelectPlan(plan);
                      }}
                    />
                  </List.Item>
                )}
              />
              {/* end plan list */}
            </div>
            {/* end plan list container */}
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
      </Spin>
    );
  }
}

const mapStateToProps = state => ({
  plans: state.plans.data,
  loading: state.plans.loading,
  page: state.plans.page,
  total: state.plans.total,
});

const mapDispatchToProps = dispatch => ({
  onSelectPlan(plan) {
    dispatch(selectPlan(plan));
    dispatch(getPlanActivities());
  },
  onPaginate(page) {
    dispatch(getPlans({ page }));
  },
  onFilterByIncidentType(incidentType) {
    if (incidentType) {
      dispatch(updatePlanFilters({ incidentTypes: [incidentType] }));
      dispatch(getPlans());
    } else {
      dispatch(resetPlanFilters());
      dispatch(getPlans());
    }
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlansLayout);
