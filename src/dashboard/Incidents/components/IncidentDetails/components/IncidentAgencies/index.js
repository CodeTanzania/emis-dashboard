import { Table, Button } from 'antd';
import React from 'react';

const data = [
  {
    key: '1',
    Agency: 'Red cross',
    category: 'Responce',
    name: 'Red cross',
    type: 'Team',
    description: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    Agency: 'Fire',
    category: 'Responce',
    name: 'Yona',
    type: 'Individual',
    description: 'New York No. 1 Lake Park',
  },
  {
    key: '3',
    Agency: 'ward leaaders',
    category: 'Category',
    name: 'Beatrice Mkumbo',
    type: 'sector',
    description: 'New York No. 1 Lake Park',
  },
  {
    key: '4',
    Agency: 'Red cross',
    category: 'Recovery',
    name: 'Juma Red cross',
    type: 'Commttee',
    description: 'New York No. 1 Lake Park',
  },
  {
    key: '5',
    Agency: 'Red cross',
    category: 'Update',
    name: 'Juma Juma',
    type: 'Department',
    description: 'New York No. 1 Lake Park',
  },
  {
    key: '6',
    Agency: 'POlice',
    category: 'Response',
    name: 'police Ilala',
    type: 'sector',
    description: 'New York No. 1 Lake Park',
  },

  {
    key: '7',
    Agency: 'Red cross',
    category: 'Update',
    name: 'Juma Juma',
    type: 'Department',
    description: 'New York No. 1 Lake Park',
  },
  {
    key: '8',
    Agency: 'POlice',
    category: 'Response',
    name: 'police Ubungo',
    type: 'Other',
    description: 'New York No. 1 Lake Park',
  },
];

export default class IncidentAgencies extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'name',
      },
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',

        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      },
      {
        title: 'Agency Name',
        dataIndex: 'Agency',
        key: 'Agency',
        filteredValue: filteredInfo.Agency || null,
        onFilter: (value, record) => record.Agency.includes(value),
        sorter: (a, b) => a.Agency.length - b.Agency.length,
        sortOrder: sortedInfo.columnKey === 'Agency' && sortedInfo.order,
      },
      {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        sorter: (a, b) => a.category - b.category,
        sortOrder: sortedInfo.columnKey === 'category' && sortedInfo.order,
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        sorter: (a, b) => a.type - b.type,
        sortOrder: sortedInfo.columnKey === 'type' && sortedInfo.order,
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',

        filteredValue: filteredInfo.description || null,
        onFilter: (value, record) => record.description.includes(value),
        sorter: (a, b) => a.description.length - b.description.length,
        sortOrder: sortedInfo.columnKey === 'description' && sortedInfo.order,
      },
    ];
    return (
      <div className="">
        <h3 style={{ borderBottom: '1px solid #e8e8e8', padding: '9px' }}>
          Responsible Agencies
        </h3>
        <div className="table-operations">
          <Button onClick={this.setAgeSort}>Sort by Name</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
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
