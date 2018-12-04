import { Breadcrumb, Layout } from 'antd';
import has from 'lodash/has';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

/* local constants */
const { Header } = Layout;

/**
 * This is antd header components which support breadcrumbs and title
 *
 * @function
 * @name LayoutHeader
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function LayoutHeader({ title, breadcrumbs }) {
  return (
    <Header className="LayoutHeader">
      <h3>{title}</h3>
      {!isEmpty(breadcrumbs) && (
        <Breadcrumb className="Breadcrumb" separator=">">
          {breadcrumbs.map(breadcrumb =>
            has(breadcrumb, 'link') ? (
              <Breadcrumb.Item>
                <Link to={breadcrumb.link}>{breadcrumb.name}</Link>
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item>{breadcrumb.name}</Breadcrumb.Item>
            )
          )}
        </Breadcrumb>
      )}
    </Header>
  );
}

/* props validation */
LayoutHeader.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ),
};

LayoutHeader.defaultProps = {
  breadcrumbs: [],
};
