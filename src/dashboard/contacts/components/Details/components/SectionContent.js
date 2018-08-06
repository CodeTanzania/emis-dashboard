import { Col } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

export default function SectionContent({ children }) {
  return (
    <Col span={24} className="p-r-l-30">
      {children}
    </Col>
  );
}

SectionContent.propTypes = {
  children: PropTypes.element.isRequired,
};
