import { Layout } from 'antd';
import React from 'react';

/* local constant */
const { Header, Content } = Layout;

export default function Action() {
  return (
    <Layout>
      <Header style={{ backgroundColor: '#fff', paddingLeft: 10 }}>
        <h3>Action Name</h3>
      </Header>
      <Content>This is content</Content>
    </Layout>
  );
}
