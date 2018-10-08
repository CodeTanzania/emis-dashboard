import { Button, List } from 'antd';
import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import shuffleList from '../../../../../../../../common/lib/util';
import ActivityTaskItem from '../ActivityTaskItem';

/**
 * ActivityTaskList
 *
 * @class
 * @name ActivityTaskList
 *
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class ActivityTaskList extends Component {
  state = {
    tasks: [
      {
        description: 'Notify respective stakeholders on the upcoming cleanup',
        number: 1,
      },
      {
        description: 'Make sure contractors are well organized and prepared',
        number: 2,
      },
      {
        description: 'Notify Ward leaders about upcoming cleanup',
        number: 3,
      },
      {
        description: 'Make sure the Municipal responsible is notified',
        number: 4,
      },
    ],
  };

  /**
   * Shuffle the activity task items in a list after based on preffered order
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
    const { tasks } = this.state;
    this.setState({ tasks: shuffleList(tasks, fromIndex, toIndex) });
  };

  render() {
    const { tasks } = this.state;
    return (
      <div style={{ marginTop: 20 }}>
        {/* Activity tasks section header */}
        <h4 style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: 10 }}>
          Tasks (SOP)
          <Button
            title="Add new Task"
            type="default"
            icon="plus"
            style={{ border: 0 }}
          />
        </h4>
        {/* end Activity tasks section header */}
        {/* start activity task draggable list */}
        <List
          dataSource={tasks}
          renderItem={(task, index) => (
            <ActivityTaskItem
              index={index}
              description={task.description}
              shuffleTaskItem={this.shuffleTaskItem}
            />
          )}
        />
        {/* end activity task draggable list */}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(ActivityTaskList);
