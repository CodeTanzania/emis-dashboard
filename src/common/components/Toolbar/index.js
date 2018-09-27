import { Col, Layout, Row } from 'antd';
import React from 'react';

/* local constants */
const { Header } = Layout;

/**
 * Toolbar component renders actions and filters in horizontal orientation
 *
 * @function
 * @name Toolbar
 *
 * @param {Object} props - Antd Col component props
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function Toolbar(props) {
  const { children } = props;
  return (
    <Header {...props}>
      <Row>{children}</Row>
    </Header>
  );
}

/**
 * Toolbar actions
 *
 * @function
 * @name Actions
 *
 * @param {Object} props - Antd Col component props
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function Actions(props) {
  const { children } = props;
  return <Col {...props}>{children}</Col>;
}

/**
 * Toolbar filters
 *
 * @function
 * @name Filters
 *
 * @param {Object} props - Antd Col component props
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function Filters(props) {
  const { children } = props;
  return <Col {...props}>{children}</Col>;
}

Toolbar.Actions = Actions;
Toolbar.Filters = Filters;

/* export Toolbar component */
export default Toolbar;
