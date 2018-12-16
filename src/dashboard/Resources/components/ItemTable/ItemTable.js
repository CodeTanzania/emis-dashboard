/* eslint no-underscore-dangle: 'off' */
import React, { Component } from 'react';
import { Form, Input, Table, Button } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';

const cx = classNames.bind(styles);
const FormItem = Form.Item;

const getColumns = handleEditItem => [
  {
    title: 'Name',
    dataIndex: 'name',
    width: '20%',
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: 'Code',
    dataIndex: 'code',
    width: '10%',
    sorter: (a, b) => a.code.length - b.code.length,
  },
  {
    title: 'Unit',
    dataIndex: 'uom',
    width: '10%',
    sorter: (a, b) => a.uom - b.uom,
  },
  {
    title: 'Minimum',
    dataIndex: 'minStockAllowed',
    width: '10%',
    sorter: (a, b) => a.minStockAllowed - b.minStockAllowed,
  },
  {
    title: 'Maximum',
    dataIndex: 'maxStockAllowed',
    width: '10%',
    sorter: (a, b) => a.maxStockAllowed - b.maxStockAllowed,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    width: '7%',
    sorter: (a, b) => a.type.length - b.type.length,
  },
  {
    title: 'Color',
    dataIndex: 'color',
    width: '10%',
    render: text => (
      <span>
        <span
          style={{
            display: 'inline-block',
            width: '20px',
            height: '10px',
            backgroundColor: `${text}`,
          }}
        />
        &nbsp;
        {text}
      </span>
    ),
    sorter: (a, b) => a.color - b.color,
  },
  {
    title: 'Expirable',
    dataIndex: 'expirable',
    width: '7%',
    render: text => (text ? 'Yes' : 'No'),
    sorter: (a, b) => a.expirable - b.expirable,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    render: (text, record) => (
      <span>
        <button
          type="button"
          className="link"
          onClick={() => handleEditItem(record)}
        >
          Edit
        </button>
      </span>
    ),
  },
];

class ItemTable extends Component {
  static propTypes = {
    getResourceItems: PropTypes.func.isRequired,
    items: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    loadingItems: PropTypes.bool.isRequired,
    showResourceItemForm: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getResourceItems();
  }

  handleItemNameChange = event => {
    const searchText = event.target.value;
    setTimeout(() => {
      this.props.getResourceItems({ q: searchText });
    }, 500);
  };

  handleAddNewItem = () => {
    this.props.showResourceItemForm();
  };

  handleOnEditClick = item => {
    this.props.showResourceItemForm(item);
  };

  render() {
    const { items, loadingItems } = this.props;

    return (
      <div className={cx('ResourceTable')}>
        <div className={cx('itemTableOperations')}>
          <Form layout="vertical" className={cx('filters')}>
            <FormItem label="Filter by Name" className={cx('nameFilter')}>
              <Input
                type="text"
                placeholder="Search By Item Name..."
                onChange={this.handleItemNameChange}
              />
            </FormItem>
          </Form>
          <div>
            <Button type="primary" icon="plus" onClick={this.handleAddNewItem}>
              New Item
            </Button>
          </div>
        </div>
        <Table
          dataSource={items.data}
          loading={loadingItems}
          rowKey={record => record._id}
          scroll={{ y: 600 }}
          size="middle"
          columns={getColumns(this.handleOnEditClick)}
        />
      </div>
    );
  }
}

export default ItemTable;
