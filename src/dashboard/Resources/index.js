/* eslint react/prefer-stateless-function: 0 */
import React, { Component, Fragment } from 'react';
import { Layout, Tabs } from 'antd';
import classNames from 'classnames';
import StocksTable from './components/StocksTable';
import ItemsTable from './components/ItemTable';
import styles from './styles.css';

const cx = classNames.bind(styles);
const { Header } = Layout;
const { TabPane } = Tabs;

class Resource extends Component {
  static propTypes = {};

  render() {
    return (
      <Fragment>
        <Layout className={cx('Resources')}>
          <Header className={cx('header')}>
            <h3>Resources</h3>
          </Header>
          {/* <Header className={cx('header', 'actions')}>
                        <div className={cx('filters')}>mama</div>
                        <div className={cx('buttons')}>baba</div>
                    </Header> */}
          <Tabs defaultActiveKey="1">
            <TabPane tab="Stocks" key="2" className={cx('content')}>
              <StocksTable />
            </TabPane>
            <TabPane tab="Items" key="1" className={cx('content')}>
              <ItemsTable />
            </TabPane>
          </Tabs>
          <div />
        </Layout>
      </Fragment>
    );
  }
}

export default Resource;
