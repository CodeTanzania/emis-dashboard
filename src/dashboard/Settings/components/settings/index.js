import React from 'react';
import classNames from 'classnames/bind';
import { Button, Col, Layout, Menu, Row, Dropdown, Icon, Input } from 'antd';
import styles from './styles.css';

const cx = classNames.bind(styles);
const { Header, Content } = Layout;
const Search = Input.Search;

const menu = (
    <Menu>
        <Menu.Item key="1">
            <Icon type="file-pdf" />
            PDF
      </Menu.Item>
        <Menu.Item key="2">
            <Icon type="file-excel" />
            Excel
      </Menu.Item>
        <Menu.Item key="3">
            <Icon type="file-text" />
            CSV
      </Menu.Item>
    </Menu>
);

/**
* Search function
* 
**/
const CommonSettings = () => {
    return (
        <Layout
            style={{
                background: '#fff',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',

            }}
        >
            <Header
                style={{
                    paddingLeft: 10,
                    borderBottom: '1px solid #E0E0E0',
                    flexBasis: '50px',
                    background: '#fff',

                }}
            >
                <Row justify="space-around">
                    <Col span={20}>
                        <Row>
                            <Col span={8}>
                                <Search
                                    placeholder="Search "
                                    onSearch={value => console.log(value)}
                                    enterButton
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={4}>
                        <Row>
                            <Col span={12}>
                                <Button
                                    icon="plus"
                                    type="primary"
                                    onClick={this.onOpenDrawer}
                                >
                                    New Settings
                                </Button>
                            </Col>
                            <Col span={12}>
                                <Dropdown overlay={menu}>
                                    <Button style={{ marginLeft: 8 }} type="primary">
                                        <Icon type="export" />
                                        Export
                      <Icon type="down" />
                                    </Button>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Header>
            <Content> 
                <Row>
                    <Col span={4} className={cx('section')}>
                        <h2>System settings</h2>
                    </Col>
                    <Col span={6} className={cx('section')}>
                    </Col>
                    <Col span={14} className={cx('section')}>
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default CommonSettings;