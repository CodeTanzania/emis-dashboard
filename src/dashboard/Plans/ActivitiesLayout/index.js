import {
  Button,
  Col,
  Drawer,
  Dropdown,
  Icon,
  Input,
  Layout,
  Menu,
  Modal,
  Row,
  Spin,
} from 'antd';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Toolbar from '../../../common/components/Toolbar';
import {
  closePlanActivityForm,
  getPlanActivityProcedures,
  openPlanActivityForm,
  selectPlanActivity,
} from '../actions';
import ActivityDetailsBody from './components/ActivityDetails';
import ActivityDetailsHeader from './components/ActivityDetails/components/ActivityDetailsHeader';
import ActivityForm from './components/ActivityForm';
import Phase from './components/PhaseActivities';
import './styles.css';

/* local constants */
const { Header, Content } = Layout;
const { Filters, Actions } = Toolbar;
const { Search } = Input;
const spinIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const menu = (
  <Menu>
    <Menu.Item key="1">
      <Icon type="file-pdf" />
      PDF
    </Menu.Item>
    <Menu.Item key="2">
      <Icon type="file-excel" />
      Excel
    </Menu.Item>
    <Menu.Item key="3">
      <Icon type="file-text" />
      CSV
    </Menu.Item>
  </Menu>
);

/**
 * Plan Components which arrange plan activities according
 * to their phases
 *
 * @class
 * @name Phases
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class PlanActivitiesLayout extends Component {
  state = {
    showActivityDetails: false,
    initialSelectedPhase: undefined,
    isEditForm: false,
  };

  static propTypes = {
    mitigationActivities: PropTypes.arrayOf(
      PropTypes.shape({
        plan: PropTypes.shape({ description: PropTypes.string }),
        incidentType: PropTypes.shape({ name: PropTypes.string }),
        name: PropTypes.string,
        description: PropTypes.string,
        taskCount: PropTypes.number,
      })
    ).isRequired,
    preparednessActivities: PropTypes.arrayOf(
      PropTypes.shape({
        plan: PropTypes.shape({ description: PropTypes.string }),
        incidentType: PropTypes.shape({ name: PropTypes.string }),
        name: PropTypes.string,
        description: PropTypes.string,
        taskCount: PropTypes.number,
      })
    ).isRequired,
    responseActivities: PropTypes.arrayOf(
      PropTypes.shape({
        plan: PropTypes.shape({ description: PropTypes.string }),
        incidentType: PropTypes.shape({ name: PropTypes.string }),
        name: PropTypes.string,
        description: PropTypes.string,
        taskCount: PropTypes.number,
      })
    ).isRequired,
    recoveryActivities: PropTypes.arrayOf(
      PropTypes.shape({
        plan: PropTypes.shape({ description: PropTypes.string }),
        incidentType: PropTypes.shape({ name: PropTypes.string }),
        name: PropTypes.string,
        description: PropTypes.string,
        taskCount: PropTypes.number,
      })
    ).isRequired,
    plan: PropTypes.shape({
      incidentType: PropTypes.shape({
        name: PropTypes.string,
      }),
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    showActivityForm: PropTypes.bool.isRequired,
    onOpenActivityForm: PropTypes.func.isRequired,
    onCloseActivityForm: PropTypes.func.isRequired,
    onSelectActivity: PropTypes.func.isRequired,
    getActivityProcedures: PropTypes.func.isRequired,
  };

  /**
   * Open Modal window which contains new activity form
   *
   * @function
   * @name handleOpenActivityForm
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleOpenActivityForm = (initialPhase = undefined) => {
    const { onOpenActivityForm } = this.props;
    this.setState({
      initialSelectedPhase: initialPhase,
      isEditForm: false,
    });
    onOpenActivityForm();
  };

  /**
   * Open Modal window which contains edit activity form
   *
   * @function
   * @name handleOpenActivityForm
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleOpenActivityEditForm = activity => {
    const { onOpenActivityForm, onSelectActivity } = this.props;
    onSelectActivity(activity);
    this.setState({
      isEditForm: true,
    });
    onOpenActivityForm();
  };

  /**
   * Close drawer which contains action form
   *
   * @function
   * @name handleCloseActivityForm
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleCloseActivityForm = () => {
    const { onCloseActivityForm } = this.props;
    this.setState({
      initialSelectedPhase: undefined,
    });
    onCloseActivityForm();
  };

  /**
   * Function called when modal window is closed
   *
   * @function
   * @name handleAfterCloseModal
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleAfterCloseModal = () => {
    this.setState({ isEditForm: false });
  };

  /**
   * Handle Open Activity details drawer event
   *
   * @function
   * @name handleOpenActivityDetails
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleOpenActivityDetails = activity => {
    const { onSelectActivity, getActivityProcedures } = this.props;
    onSelectActivity(activity);
    getActivityProcedures();
    this.setState({ showActivityDetails: true });
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
  handleCloseActivityDetails = () => {
    this.setState({ showActivityDetails: false });
  };

  render() {
    const {
      showActivityDetails,
      initialSelectedPhase,
      isEditForm,
    } = this.state;

    const {
      plan,
      mitigationActivities,
      preparednessActivities,
      responseActivities,
      recoveryActivities,
      showActivityForm,
      loading,
    } = this.props;

    let modalTitle = initialSelectedPhase
      ? `Add New Activity in ${initialSelectedPhase} phase`
      : 'Add New Activity';

    if (isEditForm) {
      modalTitle = `Edit Activity`;
    }

    return (
      <Spin
        indicator={spinIcon}
        size="large"
        tip="Loading Activities ..."
        spinning={loading}
        style={{ top: '30%' }}
      >
        <Layout className="PlanActivitiesLayout">
          {/* start primary header */}
          <Header className="header">
            {plan ? (
              <h3>
                {plan ? plan.incidentType.name : 'N/A'}{' '}
                <span className="muted">{`( Dar es Salaam ) by ${
                  plan.owner.name
                }`}</span>
              </h3>
            ) : (
              <h3>Plan</h3>
            )}
          </Header>
          {/* end primary header */}
          {/* Toolbar */}
          <Toolbar>
            <Filters span={18}>
              <Search
                placeholder="Search for Activity here"
                onSearch={value => console.log(value)}
                style={{ width: 400 }}
              />
            </Filters>
            <Actions span={6}>
              <Row type="flex" justify="end">
                <Col span={10}>
                  <Button
                    title="Create New Activity"
                    icon="plus"
                    type="primary"
                    onClick={() => {
                      this.handleOpenActivityForm();
                    }}
                  >
                    New Activity
                  </Button>
                </Col>
                <Col span={10}>
                  <Dropdown overlay={menu}>
                    <Button
                      title="Export Selected Plan"
                      className="exportButton"
                      type="primary"
                    >
                      <Icon type="export" />
                      Export
                      <Icon type="down" />
                    </Button>
                  </Dropdown>
                </Col>
              </Row>
            </Actions>
          </Toolbar>
          {/* end Toolbar */}
          {/* start plan actions */}
          <Content className="content">
            <Row className="sectionLayout">
              <Col span={6} className="section section-b-r">
                <Phase
                  title="Mitigation"
                  count={20}
                  activities={mitigationActivities}
                  onClickCard={this.handleOpenActivityDetails}
                  onClickAddActivity={this.handleOpenActivityForm}
                  onClickEditActivity={this.handleOpenActivityEditForm}
                />
              </Col>
              <Col span={6} className="section section-b-r">
                <Phase
                  title="Preparedness"
                  count={5}
                  activities={preparednessActivities}
                  onClickCard={this.handleOpenActivityDetails}
                  onClickAddActivity={this.handleOpenActivityForm}
                  onClickEditActivity={this.handleOpenActivityEditForm}
                />
              </Col>
              <Col span={6} className="section section-b-r">
                <Phase
                  title="Response"
                  count={30}
                  activities={responseActivities}
                  onClickCard={this.handleOpenActivityDetails}
                  onClickAddActivity={this.handleOpenActivityForm}
                  onClickEditActivity={this.handleOpenActivityEditForm}
                />
              </Col>
              <Col span={6} className="section">
                <Phase
                  title="Recovery"
                  count={40}
                  activities={recoveryActivities}
                  onClickCard={this.handleOpenActivityDetails}
                  onClickAddActivity={this.handleOpenActivityForm}
                  onClickEditActivity={this.handleOpenActivityEditForm}
                />
              </Col>
            </Row>
          </Content>
          {/* end plan actions */}
          {/* Drawer for plan form */}
          <Drawer
            title={<ActivityDetailsHeader />}
            placement="right"
            width="100%"
            onClose={this.handleCloseActivityDetails}
            visible={showActivityDetails}
          >
            <ActivityDetailsBody />
          </Drawer>
          {/* end Drawer for plan form */}
          {/* Activity form modal */}
          <Modal
            visible={showActivityForm}
            title={modalTitle}
            maskClosable={false}
            onCancel={this.handleCloseActivityForm}
            footer={null}
            destroyOnClose
            afterClose={this.handleAfterCloseModal}
          >
            <ActivityForm
              isEditForm={isEditForm}
              onCancel={this.handleCloseActivityForm}
              initialSelectedPhase={initialSelectedPhase}
            />
          </Modal>
          {/* End Activity form modal */}
        </Layout>
      </Spin>
    );
  }
}

const mapStateToProps = state => ({
  plan: state.selectedPlan,
  mitigationActivities: state.planActivities.Mitigation,
  preparednessActivities: state.planActivities.Preparedness,
  responseActivities: state.planActivities.Response,
  recoveryActivities: state.planActivities.Recovery,
  showActivityForm: state.planActivities.showActivityForm,
  loading: state.planActivities.loading,
});

const mapDispatchToProps = dispatch => ({
  onSelectActivity(activity) {
    dispatch(selectPlanActivity(activity));
  },
  getActivityProcedures() {
    dispatch(getPlanActivityProcedures());
  },
  onOpenActivityForm() {
    dispatch(openPlanActivityForm());
  },
  onCloseActivityForm() {
    dispatch(closePlanActivityForm());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanActivitiesLayout);
