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
    title: 'Category',
    dataIndex: 'category',
    width: '20%',
    sorter: (a, b) => a.category.length - b.category.length,
  },
  {
    title: 'Level',
    dataIndex: 'level',
    width: '20%',
    sorter: (a, b) => a.level.length - b.level.length,
  },
  {
    title: 'Continent',
    dataIndex: 'continent',
    width: '20%',
    sorter: (a, b) => a.continent.length - b.continent.length,
  },
  {
    title: 'Country',
    dataIndex: 'country',
    width: '10%',
    sorter: (a, b) => a.country.length - b.country.length,
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

class WarehouseTable extends Component {
  static propTypes = {
    getWarehouses: PropTypes.func.isRequired,
    warehouses: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    showWarehouseForm: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getWarehouses();
  }

  handleItemNameChange = event => {
    const searchText = event.target.value;
    setTimeout(() => {
      this.props.getWarehouses({ q: searchText });
    }, 500);
  };

  handleAddNewItem = () => {
    this.props.showWarehouseForm();
  };

  handleOnEditClick = item => {
    this.props.showWarehouseForm(item);
  };

  render() {
    const { warehouses, loading } = this.props;

    return (
      <div className={cx('WarehouseTable')}>
        <div className={cx('tableOperations')}>
          <Form layout="vertical">
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
              New Warehouse
            </Button>
          </div>
        </div>
        <Table
          dataSource={warehouses.data}
          loading={loading}
          rowKey={record => record._id}
          scroll={{ y: 600 }}
          size="middle"
          columns={getColumns(this.handleOnEditClick)}
        />
      </div>
    );
  }
}

export default WarehouseTable;
