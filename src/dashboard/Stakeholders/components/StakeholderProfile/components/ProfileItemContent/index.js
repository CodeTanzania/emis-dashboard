import { Col } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';


/**
 * Renders contents of contact details sections
 *
 * @function
 * @name SectionContent
 *
 * @param {Object} children - React node for children to render
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function SectionContent({ children }) {
  return (
    <Col span={24} className="p-r-l-30">
      {children}
    </Col>
  );
}


/* props validations */
SectionContent.propTypes = {
  children: PropTypes.element.isRequired,
};
