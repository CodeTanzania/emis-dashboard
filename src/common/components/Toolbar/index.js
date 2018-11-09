import { Col, Layout, Row } from 'antd';
import React from 'react';
import './styles.css';

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
    <Header {...props} className="Toolbar">
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

/**
 * Toolbar Pagination
 *
 * @function
 * @name Pagination
 *
 * @param {Object} props - Antd Col component props
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function Pagination(props) {
  const { children } = props;
  return <Col {...props}>{children}</Col>;
}

Toolbar.Actions = Actions;
Toolbar.Filters = Filters;
Toolbar.Pagination = Pagination;

/* export Toolbar component */
export default Toolbar;
