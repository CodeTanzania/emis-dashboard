import { Checkbox, Col, Icon, Row } from 'antd';
import flow from 'lodash/flow';
import PropTypes from 'prop-types';
import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import './styles.css';

/* local constants */
const ITEM_TYPE = 'ACTIVITY_TASK';

/**
 * Specify the Drag and Drop spec object for the dragged item
 *
 * @see {@link http://react-dnd.github.io/react-dnd/docs-overview.html}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const ActivityTaskItemSource = {
  /**
   * Specify props to be injected to the dragged component
   * when dragging it
   * In other words it is spec object for source target
   *
   * @function
   * @name beginDrag
   *
   * @params {Object} props
   * @returns {Object} injectedProps
   *
   * @version 0.1.0
   * @since 0.1.0
   */
  beginDrag(props) {
    return {
      description: props.description,
      number: props.number,
      index: props.index,
    };
  },
};

/**
 * Specify the Drag and Drop spec object for the dropped item
 * In other words it is spec object for drop target
 *
 * @see {@link http://react-dnd.github.io/react-dnd/docs-overview.html}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const ActivityTaskItemTarget = {
  drop(props, monitor) {
    // Obtain the dragged taskItem
    const taskItem = monitor.getItem();

    const fromIndex = taskItem.index;
    const toIndex = props.index;

    if (fromIndex === toIndex) {
      return;
    }

    props.shuffleTaskItem(taskItem.index, props.index);
  },
};

/**
 * collectSource
 *
 * @function
 * @name collectSource
 *
 * @param connect
 * @param monitor
 * @returns {Object}
 *
 * @see {@link http://react-dnd.github.io/react-dnd/docs-overview.html}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

/**
 * collectTarget
 *
 * @function
 * @name collectTarget
 *
 * @param connect
 * @param monitor
 * @returns {Object}
 *
 * @see {@link http://react-dnd.github.io/react-dnd/docs-overview.html}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function collectTarget(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

/**
 * ActivityTaskItem
 * This item is both drag source and drop target.Allow dragging this item and drop
 * it on another item of the same nature(type)
 *
 * @function
 * @name ActivityTaskItem
 *
 * @returns {ReactComponent}
 *
 * @see {@link http://react-dnd.github.io/react-dnd/docs-overview.html}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function ActivityTaskItem({
  index,
  name,
  isDragging,
  connectDragSource,
  connectDropTarget,
}) {
  return connectDragSource(
    connectDropTarget(
      <div
        className="ActivityTaskItem"
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        <Row>
          <Col span={1} className="checkboxContainer">
            <Checkbox />
          </Col>
          <Col span={22}>{`${index + 1} : ${name}`}</Col>
          <Col span={1}>
            <Icon type="close" title="Remove procedure" theme="outlined" />
          </Col>
        </Row>
      </div>
    )
  );
}

/* Props validation */
ActivityTaskItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
};

export default flow(
  DragSource(ITEM_TYPE, ActivityTaskItemSource, collectSource),
  DropTarget(ITEM_TYPE, ActivityTaskItemTarget, collectTarget)
)(ActivityTaskItem);
