import { Button, List, Modal } from 'antd';
import flow from 'lodash/flow';
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';
import shuffleList from '../../../../../../../common/lib/util';
import ActivityTaskForm from '../ActivityProcedureForm';
import ActivityTaskItem from '../ActivityProcedureItem';
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
    showActivityTaskForm: false,
  };

  constructor(props) {
    super(props);
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
   * Shuffle the activity task items in a list after based on preferred order
   * by the user using drag and drop feature
   *
   * @function
   * @name shuffleTaskItem
   *
   * @param {number} fromIndex - Task Item initial(source) index when dragged
   * @param {number} toIndex - Task Item destination(drop) index after being dropped
   * @returns {undefined}
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  shuffleTaskItem = (fromIndex, toIndex) => {
    const { procedures } = this.state;
    this.setState({ procedures: shuffleList(procedures, fromIndex, toIndex) });
  };

  /**
   * Handle click action to open activity task form modal window
   *
   * @function
   * @name handleOpenActivityTaskForm
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleOpenActivityTaskForm = () => {
    this.setState({ showActivityTaskForm: true });
  };

  /**
   * Handle click action to close activity task form modal window
   *
   * @function
   * @name handleCloseActivityTaskForm
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  handleCloseActivityTaskForm = () => {
    this.setState({ showActivityTaskForm: false });
  };

  render() {
    const { procedures, showActivityTaskForm } = this.state;
    return (
      <div className="ActivityProcedureList">
        {/* Activity procedures section header */}
        <h4 className="header">
          Standard Operating Procedures (SOP)
          <Button
            title="Add new Task"
            type="default"
            icon="plus"
            style={{ border: 0 }}
            onClick={this.handleOpenActivityTaskForm}
          />
        </h4>
        {/* end Activity procedures section header */}
        {/* start activity task draggable list */}
        <List
          dataSource={procedures}
          renderItem={(task, index) => (
            <ActivityTaskItem
              index={index}
              {...task}
              shuffleTaskItem={this.shuffleTaskItem}
            />
          )}
        />
        {/* end activity task draggable list */}
        {/* Activity form modal */}
        <Modal
          visible={showActivityTaskForm}
          title="New Standard Operating Procedure (SOP)"
          maskClosable={false}
          onCancel={this.handleCloseActivityTaskForm}
          footer={null}
        >
          <ActivityTaskForm onCancel={this.handleCloseActivityTaskForm} />
        </Modal>
        {/* End Activity form modal */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  procedures: state.planActivityProcedures.data,
});

export default flow(
  DragDropContext(HTML5Backend),
  connect(mapStateToProps)
)(ActivityProcedureList);
