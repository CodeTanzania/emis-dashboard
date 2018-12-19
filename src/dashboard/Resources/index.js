/* eslint react/prefer-stateless-function: 0 */
import React, { Component, Fragment } from 'react';
import { Layout, Tabs } from 'antd';
import classNames from 'classnames';
import AdjustStockForm from './components/AdjustStockForm';
import WarehouseForm from './components/WarehouseForm';
import StocksTable from './components/StocksTable';
import ItemsTable from './components/ItemTable';
import WarehouseTable from './components/WarehouseTable';
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
          <Tabs defaultActiveKey="1">
            <TabPane tab="Stocks" key="1" className={cx('content')}>
              <StocksTable />
            </TabPane>
            <TabPane tab="Items" key="2" className={cx('content')}>
              <ItemsTable />
            </TabPane>
            <TabPane tab="Warehouses" key="3" className={cx('content')}>
              <WarehouseTable />
            </TabPane>
          </Tabs>
          <div />
        </Layout>
        <AdjustStockForm />
        <WarehouseForm />
      </Fragment>
    );
  }
}

export default Resource;
