import {
  Button,
  Col,
  Icon,
  Layout,
  List,
  Modal,
  Pagination,
  Row,
  Spin,
} from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getIncidentTypes } from '../../../common/API/api';
import SelectSearchBox from '../../../common/components/SelectSearchBox';
import Toolbar from '../../../common/components/Toolbar';
import {
  closePlanForm,
  getPlanActivities,
  getPlans,
  openPlanForm,
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
function PlansLayout(props) {
  const {
    page,
    plans,
    total,
    loading,
    onSelectPlan,
    onPaginate,
    onFilterByIncidentType,
    showPlanForm,
    onOpenPlanForm,
    onClosePlanForm,
  } = props;

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
                  onClick={onOpenPlanForm}
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
        {/* Plan form modal window */}
        <Modal
          visible={showPlanForm}
          title="Create New Plan"
          maskClosable={false}
          onCancel={onClosePlanForm}
          footer={null}
        >
          {/* plan form */}
          <PlanForm onCancel={onClosePlanForm} />
          {/* end plan form */}
        </Modal>
        {/* End Plan form modal window */}
      </Layout>
    </Spin>
  );
}

/* default props */
PlansLayout.defaultProps = {
  plans: [],
};

/* props validation */
PlansLayout.propTypes = {
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
  showPlanForm: PropTypes.bool.isRequired,
  onOpenPlanForm: PropTypes.func.isRequired,
  onClosePlanForm: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  plans: state.plans.data,
  loading: state.plans.loading,
  page: state.plans.page,
  total: state.plans.total,
  showPlanForm: state.plans.showPlanForm,
});

const mapDispatchToProps = dispatch => ({
  onSelectPlan(plan) {
    dispatch(selectPlan(plan));
    dispatch(getPlanActivities());
  },
  onPaginate(page) {
    dispatch(getPlans({ page }));
  },
  onOpenPlanForm() {
    dispatch(openPlanForm());
  },
  onClosePlanForm() {
    dispatch(closePlanForm());
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
