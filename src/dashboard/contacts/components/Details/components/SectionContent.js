import { Col } from 'antd';
import React from 'react';

export default function SectionContent({ children }) {
  return (
    <Col span={24} style={{ padding: '0 30px' }}>
      {children}
    </Col>
  );
}
