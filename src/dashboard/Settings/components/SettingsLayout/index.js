import classnames from 'classnames';
import React from 'react';
import SidebarSettings from '../SidebarSettings';
import { Button, Col, Input, Row,Layout } from 'antd';

/* load styles */
import styles from './styles.css';

/* local constants */
const { Header, Content } = Layout;
const { Search } = Input;
const cx = classnames.bind(styles);

/**
* Search function
* 
**/
const SettingsLayout = () => {
    return (
        <Layout
        style={{
            background: '#fff',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid #e6e6e6'

        }}
        >
        <Row>
          <Col span={4} className={cx('section')}>
            <Header className={cx('ContentHeader')}>
            </Header>
            <Content>
            <SidebarSettings  title="System" />
            </Content>
          </Col>
          <Col span={6} className={cx('section')}>
            <Header className={cx('ContentHeader')}>
              <Row type="flex" justify="space-around">
                {/* <Col span={1}>
                  <Checkbox />
                </Col> */}
                <Col span={24}>
                  <Search
                    placeholder="Search here"
                    onSearch={value => console.log(value)}
                    style={{ width: '100%' }}
                    enterButton={<Button icon="search" />}
                  />
                </Col>
              </Row>
            </Header>
          </Col>
          <Col span={14} className={cx('section')}>
            <Header className={cx('ContentHeader')}>
              <h3>
                Basic Information
              </h3>
            </Header>
          </Col>
          
        </Row>
        </Layout>
      );
  }

export default SettingsLayout;