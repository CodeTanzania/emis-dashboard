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
import upperFirst from 'lodash/upperFirst';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getFeatures,
  getIncidentTypes,
  getStakeholders,
} from '../../../common/API/api';
import LayoutHeader from '../../../common/components/LayoutHeader';
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
const { Content } = Layout;
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
    onEditPlan: PropTypes.func.isRequired,
    onPaginate: PropTypes.func.isRequired,
    onFilterByIncidentType: PropTypes.func.isRequired,
    onFilterByOwner: PropTypes.func.isRequired,
    onFilterByBoundary: PropTypes.func.isRequired,
    showPlanForm: PropTypes.bool.isRequired,
    onOpenPlanForm: PropTypes.func.isRequired,
    onClosePlanForm: PropTypes.func.isRequired,
    onGetPlanActivities: PropTypes.func.isRequired,
  };

  static defaultProps = {
    plans: [],
  };

  state = {
    isEditForm: false,
  };

  handleOpenPlanEditForm = plan => {
    const { onEditPlan } = this.props;
    this.setState({ isEditForm: true });
    onEditPlan(plan);
  };

  handleClosePlanForm = () => {
    const { onClosePlanForm } = this.props;
    this.setState({ isEditForm: false });
    onClosePlanForm();
  };

  /**
   * Handle Close Activity details drawer event
   *
   * @function
   * @name handleCloseActivityDetails
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleAfterCloseModal = () => {
    this.setState({ isEditForm: false });
  };

  render() {
    const {
      page,
      plans,
      total,
      loading,
      onGetPlanActivities,
      onPaginate,
      onFilterByIncidentType,
      onFilterByOwner,
      onFilterByBoundary,
      showPlanForm,
      onOpenPlanForm,
    } = this.props;

    const { isEditForm } = this.state;

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
          <LayoutHeader
            title="Emergency Plans"
            breadcrumbs={[{ name: 'EMIS' }, { name: 'Emergency Plans' }]}
          />
          {/* end primary header */}
          {/* Toolbar */}
          <Toolbar>
            <Filters span={17}>
              <Row>
                <Col md={7} xl={7} xxl={5}>
                  <SelectSearchBox
                    isFilter
                    onChange={onFilterByIncidentType}
                    onSearch={getIncidentTypes}
                    placeholder="Filter by Incident Type"
                    style={{ width: '250px' }}
                    optionLabel="name"
                    optionValue="_id"
                  />
                </Col>
                <Col md={7} xl={7} xxl={5}>
                  <SelectSearchBox
                    isFilter
                    onChange={onFilterByBoundary}
                    onSearch={getFeatures}
                    placeholder="Filter by Plan Applicable Area"
                    style={{ width: '250px' }}
                    optionLabel={feature =>
                      `${feature.name} (${upperFirst(feature.level)})`
                    }
                    optionValue="_id"
                  />
                </Col>
                <Col md={7} xl={7} xxl={5}>
                  <SelectSearchBox
                    isFilter
                    onChange={onFilterByOwner}
                    onSearch={getStakeholders}
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
                      jurisdiction={plan.boundary.name}
                      level={plan.boundary.level}
                      owner={plan.owner.name}
                      description={plan.description}
                      nature={plan.incidentType.nature}
                      family={plan.incidentType.family}
                      updatedAt={plan.updatedAt}
                      color={plan.incidentType.color}
                      activityCount={20}
                      onClickPlan={() => {
                        onGetPlanActivities(plan);
                      }}
                      onEditPlan={() => {
                        this.handleOpenPlanEditForm(plan);
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
            title={isEditForm ? 'Edit Plan' : 'Create New Plan'}
            maskClosable={false}
            onCancel={this.handleClosePlanForm}
            footer={null}
            destroyOnClose
            afterClose={this.handleAfterCloseModal}
          >
            {/* plan form */}
            <PlanForm
              isEditForm={isEditForm}
              onCancel={this.handleClosePlanForm}
            />
            {/* end plan form */}
          </Modal>
          {/* End Plan form modal window */}
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
  showPlanForm: state.plans.showPlanForm,
});

const mapDispatchToProps = dispatch => ({
  onGetPlanActivities(plan) {
    dispatch(selectPlan(plan));
    dispatch(getPlanActivities());
  },
  onEditPlan(plan) {
    dispatch(selectPlan(plan));
    dispatch(openPlanForm());
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
    } else {
      dispatch(resetPlanFilters('incidentTypes'));
    }
    dispatch(getPlans());
  },
  onFilterByBoundary(boundary) {
    if (boundary) {
      dispatch(updatePlanFilters({ boundaries: [boundary] }));
    } else {
      dispatch(resetPlanFilters('boundaries'));
    }
    dispatch(getPlans());
  },
  onFilterByOwner(owner) {
    if (owner) {
      dispatch(updatePlanFilters({ owners: [owner] }));
    } else {
      dispatch(resetPlanFilters('owners'));
    }
    dispatch(getPlans());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlansLayout);
