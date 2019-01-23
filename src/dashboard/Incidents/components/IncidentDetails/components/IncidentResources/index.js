import { Table, Button } from 'antd';
import React from 'react';

const data = [
  {
    key: '1',
    stock: 'Personal Kit',
    owner: 'Nancy Victor',
    quality: '100',
    minimum: '10',
    maximum: '10',
  },
  {
    key: '2',
    stock: 'Iron sheet',
    owner: 'Ilala Municipal',
    quality: '90',
    minimum: '8',
    maximum: '12',
  },
  {
    key: '3',
    stock: 'Tarpaulin',
    owner: 'Edgar Vitus Mlowe',
    quality: '90',
    minimum: '6',
    maximum: '32',
  },
  {
    key: '4',
    stock: 'Metal cabinet',
    owner: 'Lally Elias',
    quality: '900',
    minimum: '34',
    maximum: '67',
  },
  {
    key: '5',
    stock: 'Iron sheet',
    owner: 'Benson Maruchu',
    quality: '190',
    minimum: '3',
    maximum: '12',
  },
  {
    key: '6',
    stock: 'Sleeping Bags',
    owner: 'Kinondoni Municipal',
    quality: '590',
    minimum: '8',
    maximum: '1412',
  },

  {
    key: '7',
    stock: 'Soup plate',
    owner: 'Nyambiri Kimacha',
    quality: '890',
    minimum: '2',
    maximum: '1112',
  },
  {
    key: '8',
    stock: 'Collapsible Jerrycan',
    owner: 'Beatrice Mkumbo',
    quality: '290',
    minimum: '1',
    maximum: '1420',
  },
];

export default class IncidentResources extends React.Component {
  state = {
    sortedInfo: null,
  };

  handleChange = (pagination, sorter) => {
    this.setState({
      sortedInfo: sorter,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'stock',
      },
    });
  };

  render() {
    let { sortedInfo } = this.state;
    sortedInfo = sortedInfo || {};
    const columns = [
      {
        title: 'Stock',
        dataIndex: 'stock',
        key: 'stock',
        sorter: (a, b) => a.stock.length - b.stock.length,
        sortOrder: sortedInfo.columnKey === 'stock' && sortedInfo.order,
      },
      {
        title: 'Owner',
        dataIndex: 'owner',
        key: 'owner',
        sorter: (a, b) => a.owner.length - b.owner.length,
        sortOrder: sortedInfo.columnKey === 'owner' && sortedInfo.order,
      },
      {
        title: 'Quality',
        dataIndex: 'quality',
        key: 'quality',
        sorter: (a, b) => a.quality - b.quality,
        sortOrder: sortedInfo.columnKey === 'quality' && sortedInfo.order,
      },
      {
        title: 'Minimum',
        dataIndex: 'minimum',
        key: 'minimum',
        sorter: (a, b) => a.minimum - b.minimum,
        sortOrder: sortedInfo.columnKey === 'minimum' && sortedInfo.order,
      },
      {
        title: 'Maximum',
        dataIndex: 'maximum',
        key: 'maximum',
        sorter: (a, b) => a.maximum.length - b.maximum.length,
        sortOrder: sortedInfo.columnKey === 'maximum' && sortedInfo.order,
      },
    ];
    return (
      <div className="">
        <h3 style={{ borderBottom: '1px solid #e8e8e8', padding: '9px' }}>
          Resource Used
        </h3>
        <div className="table-operations">
          <Button onClick={this.setAgeSort}>Sort by stock</Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          className="p-20"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
