import { Button, Col, List, Modal, Row } from 'antd';
import flow from 'lodash/flow';
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import shuffleList from '../../../../../../../common/lib/util';
import {
  closePlanActivityProcedureForm,
  openPlanActivityProcedureForm,
  selectPlanActivityProcedure,
} from '../../../../../actions';
import ActivityProcedureForm from '../ActivityProcedureForm';
import ActivityProcedureItem from '../ActivityProcedureItem';
import './styles.css';

/**
 * ActivityProcedureList
 *
 * @class
 * @name ActivityProcedureList
 *
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class ActivityProcedureList extends Component {
  state = {
    procedures: [],
    isEditForm: false,
  };

  componentDidMount() {
    const { procedures } = this.props;
    this.setState({ procedures });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.procedures !== state.procedures) {
      return {
        procedures: props.procedures,
      };
    }
    return null;
  }

  /**
   * Shuffle the activity procedure items in a list after based on preferred order
   * by the user using drag and drop feature
   *
   * @function
   * @name shuffleProcedureItem
   *
   * @param {number} fromIndex - Task Item initial(source) index when dragged
   * @param {number} toIndex - Task Item destination(drop) index after being dropped
   * @returns {undefined}
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  shuffleProcedureItem = (fromIndex, toIndex) => {
    const { procedures } = this.state;
    this.setState({ procedures: shuffleList(procedures, fromIndex, toIndex) });
  };

  /**
   * Handle click action to open activity procedure form modal window
   *
   * @function
   * @name handleOpenActivityProcedureForm
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleOpenActivityProcedureForm = (edit = false) => {
    const { onOpenProcedureForm } = this.props;
    this.setState({
      isEditForm: edit,
    });
    onOpenProcedureForm();
  };

  /**
   * Handle click action to close activity procedure form modal window
   *
   * @function
   * @name handleCloseActivityProcedureForm
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleCloseActivityProcedureForm = () => {
    const { onCloseProcedureForm } = this.props;
    onCloseProcedureForm();
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
    const { procedures, isEditForm } = this.state;
    const { onSelectProcedure, showActivityProcedureForm } = this.props;
    return (
      <div className="ActivityProcedureList">
        {/* Activity procedures section header */}
        <Row className="header">
          <Col xs={16} md={18} xl={21} xxl={22}>
            <h4 style={{ fontWeight: 600 }}>
              Standard Operating Procedures (SOP)
            </h4>
          </Col>
          <Col xs={18} md={6} xl={3} xxl={2}>
            <Button
              title="Add new SOP"
              type="default"
              icon="plus"
              style={{ border: 0 }}
              onClick={() => {
                this.handleOpenActivityProcedureForm();
              }}
            >
              New SOP
            </Button>
          </Col>
        </Row>
        {/* end Activity procedures section header */}
        {/* start activity procedure draggable list */}
        <List
          dataSource={procedures}
          renderItem={(procedure, index) => (
            <ActivityProcedureItem
              index={index}
              {...procedure}
              shuffleProcedureItem={this.shuffleProcedureItem}
              onEdit={() => {
                onSelectProcedure(procedure);
                this.handleOpenActivityProcedureForm(true);
              }}
            />
          )}
        />
        {/* end activity procedure draggable list */}

        {/* Activity form modal */}
        <Modal
          visible={showActivityProcedureForm}
          title={
            isEditForm
              ? 'Edit Standard Operating Procedure (SOP)'
              : 'New Standard Operating Procedure (SOP)'
          }
          maskClosable={false}
          onCancel={this.handleCloseActivityProcedureForm}
          footer={null}
          destroyOnClose
          afterClose={this.handleAfterCloseModal}
        >
          <ActivityProcedureForm
            isEditForm={isEditForm}
            onCancel={this.handleCloseActivityProcedureForm}
          />
        </Modal>
        {/* End Activity form modal */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  procedures: state.planActivityProcedures.data,
  showActivityProcedureForm: state.planActivityProcedures.showProcedureForm,
});

const mapDispatchToProps = dispatch => ({
  onSelectProcedure(procedure) {
    dispatch(selectPlanActivityProcedure(procedure));
  },
  onOpenProcedureForm() {
    dispatch(openPlanActivityProcedureForm());
  },
  onCloseProcedureForm() {
    dispatch(closePlanActivityProcedureForm());
  },
});

export default flow(
  DragDropContext(HTML5Backend),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ActivityProcedureList);
