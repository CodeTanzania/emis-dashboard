/* eslint react/prefer-stateless-function: 0, no-underscore-dangle: 0 */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Table, Select, Spin, Form, Button } from 'antd';
import styles from './styles.css';
import { findStakeholders, findResourceItems } from '../../../../common/API';

const cx = classNames.bind(styles);
const { Option } = Select;
const FormItem = Form.Item;

const getColumns = handleAdjustClick => [
  {
    title: 'Stock',
    dataIndex: 'item.name',
    width: '25%',
    sorter: (a, b) => a.item.name.length - b.item.name.length,
  },
  {
    title: 'Owner',
    dataIndex: 'owner.name',
    width: '20%',
    sorter: (a, b) => a.owner.name.length - b.owner.name.length,
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    width: '15%',
    sorter: (a, b) => a.quantity - b.quantity,
  },
  {
    title: 'Minimum',
    dataIndex: 'minAllowed',
    width: '15%',
    sorter: (a, b) => a.minAllowed - b.minAllowed,
  },
  {
    title: 'Maximum',
    dataIndex: 'maxAllowed',
    width: '15%',
    sorter: (a, b) => a.maxAllowed - b.maxAllowed,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (text, record) => (
      <span>
        <button
          type="button"
          className="link"
          onClick={() => handleAdjustClick(record)}
        >
          Adjust
        </button>
      </span>
    ),
  },
];

class ResourceTable extends Component {
  static propTypes = {
    getResourceStocks: PropTypes.func.isRequired,
    showStockAdjustmentForm: PropTypes.func.isRequired,
    stocks: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    loadingStocks: PropTypes.bool.isRequired,
  };

  state = {
    owners: [], // owners in select onwer filter
    searchingOwners: false, // searching owners state
    items: [], // items in select item filter
    searchingItems: false, // search items state
    filters: {}, // selected filters
  };

  componentDidMount() {
    this.props.getResourceStocks();
  }

  handleSelectItem = value => {
    this.setState(
      prevState => ({ filters: { ...prevState.filters, item: value } }),
      () => {
        // We access changed state in set state callback
        // to ensure we get the changed state version and
        // not the previous state.
        // see https://stackoverflow.com/questions/41278385/setstate-doesnt-update-the-state-immediately/41278440
        this.props.getResourceStocks(this.state.filters);
      }
    );
  };

  handleSearchItem = searchText => {
    setTimeout(() => {
      this.setState({ searchingItems: true });
      findResourceItems({ q: searchText })
        .then(result => {
          this.setState({ items: result.data, searchingItems: false });
        })
        .catch(() => {
          this.setState({ searchingItems: false });
        });
    }, 500);
  };

  handleSearchOwner = searchText => {
    setTimeout(() => {
      this.setState({ searchingOwners: true });
      findStakeholders({ q: searchText })
        .then(result => {
          this.setState({ owners: result.data, searchingOwners: false });
        })
        .catch(() => {
          this.setState({ searchingOwners: false });
        });
    }, 500);
  };

  handleSelectOwner = value => {
    this.setState(
      prevState => ({ filters: { ...prevState.filters, owner: value } }),
      () => {
        // We access changed state in set state callback
        // to ensure we get the changed state version and
        // not the previous state.
        // see https://stackoverflow.com/questions/41278385/setstate-doesnt-update-the-state-immediately/41278440
        this.props.getResourceStocks(this.state.filters);
      }
    );
  };

  handleAdjustClick = item => {
    this.props.showStockAdjustmentForm(item);
  };

  handleOnNewStockBtnClicked = () => {
    this.props.showStockAdjustmentForm();
  };

  render() {
    const { stocks, loadingStocks } = this.props;
    const {
      owners,
      searchingOwners,
      items,
      searchingItems,
      filters,
    } = this.state;
    const ownerOpts = owners.map(owner => (
      <Option key={owner._id} value={owner._id}>
        {owner.name}
      </Option>
    ));
    const itemOpts = items.map(item => (
      <Option key={item._id} value={item._id}>
        {item.name}
      </Option>
    ));
    const formItemLayout = {
      labelCol: { span: 24 },
      wrapperCol: { span: 24 },
    };

    return (
      <Fragment>
        <div className={cx('stockTableOperations')}>
          <Form layout="inline">
            <FormItem
              {...formItemLayout}
              label="Filter by Item"
              // help='Type to search items'
              style={{ width: 200 }}
            >
              <Select
                showSearch
                placeholder="Search Item..."
                filterOption={false}
                showArrow={false}
                onSearch={this.handleSearchItem}
                onChange={this.handleSelectItem}
                notFoundContent={searchingItems ? <Spin size="small" /> : null}
                value={filters.item}
                allowClear
              >
                {itemOpts}
              </Select>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="Filter by Owner"
              // help='Type to search owners'
              style={{ width: 200 }}
            >
              <Select
                showSearch
                placeholder="Search Owner..."
                filterOption={false}
                showArrow={false}
                onSearch={this.handleSearchOwner}
                onChange={this.handleSelectOwner}
                notFoundContent={searchingOwners ? <Spin size="small" /> : null}
                value={filters.owner}
                allowClear
              >
                {ownerOpts}
              </Select>
            </FormItem>
          </Form>
          <div className={cx('stockTableActions')}>
            <Button
              type="primary"
              icon="plus"
              onClick={this.handleOnNewStockBtnClicked}
            >
              New Stock
            </Button>
          </div>
        </div>
        <Table
          dataSource={stocks.data}
          loading={loadingStocks}
          rowKey={record => record._id}
          scroll={{ y: 600 }}
          size="middle"
          columns={getColumns(this.handleAdjustClick)}
        />
      </Fragment>
    );
  }
}

export default ResourceTable;
