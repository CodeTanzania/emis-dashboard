import { Table, Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchIncidentTasks, getIncidentTaskById, } from '../../../../actions';

import './styles.css';

class IncidentActionTaken extends React.Component {
  static propTypes = {
    incidentAction: PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string.isRequired,
      phase: PropTypes.string.isRequired,
      incident: PropTypes.shape({
        event: PropTypes.string.isRequired,
        startedAt: PropTypes.string,
        endedAt: PropTypes.string,
        _id: PropTypes.string,
      }),
      incidentType: PropTypes.shape({
        name: PropTypes.string,
        nature: PropTypes.string.isRequired,
        family: PropTypes.string.isRequired,
        color: PropTypes.string,
        _id: PropTypes.string,
      }),
      _id: PropTypes.string,
    }).isRequired,
    getIncidentTask: PropTypes.func,
    getIncidentTasks: PropTypes.func,
  };
static defaultProps = {
  getIncidentTask: () => {},
  getIncidentTasks: () => {},
}

  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  componentDidMount(){
    const {getIncidentTasks} = this.props;
    getIncidentTasks()
  }

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
        columnKey: 'phase',
      },
    });
  };

  handleIncidentTask = () => {
    const {incidentAction,incidentsTasks, getIncidentTask } = this.props;
    const {_id: id} = incidentAction;
    incidentsTasks.filter(tasks => {
      const { action } = tasks;
      const { _id: actionId } = action;
      if (actionId === id) {
        const { _id: taskId } = tasks;
        return getIncidentTask(taskId);
      }
      return null;
    });

  }

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    const { incidentAction } = this.props;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'ActionName',
        dataIndex: 'name',
        key: 'name',
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      },
      {
        title: 'Phases',
        dataIndex: 'phase',
        key: 'phase',
        sorter: (a, b) => a.phase - b.phase,
        sortOrder: sortedInfo.columnKey === 'phase' && sortedInfo.order,
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
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',

        filteredValue: filteredInfo.status || null,
        onFilter: (value, record) => record.status.includes(value),
        sorter: (a, b) => a.status.length - b.status.length,
        sortOrder: sortedInfo.columnKey === 'status' && sortedInfo.order,
      },
    ];

    return (
      <div>
        <h3 style={{ borderBottom: '1px solid #e8e8e8', padding: '9px' }}>
          Incident Action log
        </h3>
        <div className="table-operations">
          <Button onClick={this.setAgeSort}>Sort phase</Button>
          <Button onClick={this.handleIncidentTask}>Clear filters and sorters</Button>
        </div>
        <Table
          columns={columns}
          dataSource={[incidentAction]}
          onChange={this.handleChange}
          className="p-20"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  incidentAction: state.selectedIncident.incidentAction
    ? state.selectedIncident.incidentAction
    : {},
  incidentsTasks: state.selectedIncident.incidentTasks.data ? state.selectedIncident.incidentTasks.data : {}
});

const mapDispatchToProps = {
  getIncidentTasks : fetchIncidentTasks,
  getIncidentTask: getIncidentTaskById,
}

export default connect(mapStateToProps, mapDispatchToProps)(IncidentActionTaken);
