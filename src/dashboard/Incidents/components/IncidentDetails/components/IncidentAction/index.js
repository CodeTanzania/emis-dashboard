import { Table, Button } from 'antd';
import React from 'react';
import './styles.css';

const data = [
  {
    key: '1',
    eventId: 'Ev001',
    category: 'Responce',
    date: '17/12/2018',
    description: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    eventId: 'Ev0012',
    category: 'Responce',
    date: '13/12/2018',
    description: 'New York No. 1 Lake Park',
  },
  {
    key: '3',
    eventId: 'Ev003',
    category: 'Category',
    date: '12/11/2018',
    description: 'New York No. 1 Lake Park',
  },
  {
    key: '4',
    eventId: 'Ev004',
    category: 'Recovery',
    date: '',
    description: 'New York No. 1 Lake Park',
  },
  {
    key: '5',
    eventId: 'Ev005',
    category: 'Update',
    date: '',
    description: 'New York No. 1 Lake Park',
  },
  {
    key: '6',
    eventId: 'Ev006',
    category: 'Response',
    date: '',
    description: 'New York No. 1 Lake Park',
  },
];

export default class IncidentActionTaken extends React.Component {
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
        columnKey: 'date',
      },
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'EventId',
        dataIndex: 'eventId',
        key: 'eventId',
        filteredValue: filteredInfo.eventId || null,
        onFilter: (value, record) => record.eventId.includes(value),
        sorter: (a, b) => a.eventId.length - b.eventId.length,
        sortOrder: sortedInfo.columnKey === 'eventId' && sortedInfo.order,
      },
      {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        sorter: (a, b) => a.category - b.category,
        sortOrder: sortedInfo.columnKey === 'category' && sortedInfo.order,
      },
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',

        filteredValue: filteredInfo.date || null,
        onFilter: (value, record) => record.date.includes(value),
        sorter: (a, b) => a.date.length - b.date.length,
        sortOrder: sortedInfo.columnKey === 'date' && sortedInfo.order,
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
      <div className="p-20">
        <h3 style={{ borderBottom: '1px solid #e8e8e8', padding: '9px' }}>
          EIncident log
        </h3>
        <div className="table-operations">
          <Button onClick={this.setAgeSort}>Sort Date</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
