import { Table, Button, Modal, Spin } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  fetchIncidentTasks,
  getIncidentTaskById,
  activeIncidentAction,
} from '../../../../actions';

import './styles.css';
import IncidentTasks from './components/IncidentTasks';

/**
 * IncidentActionTaken perform
 * specific action per incident
 *
 *
 * @class
 * @name IncidentActionTaken
 *
 * @version 0.1.0
 * @since 0.1.0
 */

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
    incidentsTasks: PropTypes.arrayOf(
      PropTypes.shape({
        incidentType: PropTypes.shape({
          name: PropTypes.string,
          nature: PropTypes.string.isRequired,
          family: PropTypes.string.isRequired,
          color: PropTypes.string,
          _id: PropTypes.string,
        }),
        incident: PropTypes.shape({
          event: PropTypes.string,
          _id: PropTypes.string,
        }),
        action: PropTypes.shape({
          name: PropTypes.string,
          _id: PropTypes.string,
        }),
        name: PropTypes.string,
        description: PropTypes.string,
        phase: PropTypes.string,
        number: PropTypes.number,
        tags: PropTypes.array,
        _id: PropTypes.string,
      })
    ).isRequired,
    getIncidentTask: PropTypes.func,
    getIncidentTasks: PropTypes.func,
    setIncidentAction: PropTypes.func,
    loadingAction: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    getIncidentTask: () => {},
    getIncidentTasks: () => {},
    setIncidentAction: () => {},
  };

  state = {
    sortedInfo: null,
    visible: false,
  };

  componentDidMount() {
    const { getIncidentTasks, setIncidentAction, incidentAction } = this.props;
    const { _id: id } = incidentAction;
    getIncidentTasks();
    setIncidentAction(id);
  }

  handleChange = (pagination, sorter) => {
    this.setState({
      sortedInfo: sorter,
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
    const { incidentAction, incidentsTasks, getIncidentTask } = this.props;
    const { _id: id } = incidentAction;
    incidentsTasks.filter(tasks => {
      const { action } = tasks;
      const { _id: actionId } = action;
      if (actionId === id) {
        const { _id: taskId } = tasks;
        return getIncidentTask(taskId);
      }
      return null;
    });
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
    this.handleIncidentTask();
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  handleClickedAction = () => {
    this.showModal();
  };

  render() {
    let { sortedInfo } = this.state;
    const { incidentAction, loadingAction } = this.props;
    sortedInfo = sortedInfo || {};

    const getActions = handleClickedAction => [
      {
        title: 'ActionName',
        dataIndex: 'name',

        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      },
      {
        title: 'Phases',
        dataIndex: 'phase',
        sorter: (a, b) => a.phase - b.phase,
        sortOrder: sortedInfo.columnKey === 'phase' && sortedInfo.order,
      },
      {
        title: 'Description',
        dataIndex: 'description',

        sorter: (a, b) => a.description.length - b.description.length,
        sortOrder: sortedInfo.columnKey === 'description' && sortedInfo.order,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: () => <span>Done</span>,

        sorter: (a, b) => a.status.length - b.status.length,
        sortOrder: sortedInfo.columnKey === 'status' && sortedInfo.order,
      },
      {
        title: 'Tasks',
        dataIndex: 'tasks',
        render: () => (
          <span>
            <button
              type="button"
              className="link"
              onClick={() => handleClickedAction()}
            >
              view tasks
            </button>
          </span>
        ),
      },
    ];

    return (
      <div>
        <h3 style={{ borderBottom: '1px solid #e8e8e8', padding: '9px' }}>
          Incident Action log
        </h3>
        <div className="table-operations">
          <Button onClick={this.setAgeSort}>Sort phase</Button>
        </div>
        <Table
          columns={getActions(this.handleClickedAction)}
          dataSource={[incidentAction]}
          onChange={this.handleChange}
          className="p-20"
          size="middle"
          loading={loadingAction}
        />
        <Modal
          title="INCIDENT TASKS "
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {loadingAction ? (
            <div className="loadingAction">
              <Spin />
            </div>
          ) : (
            <IncidentTasks />
          )}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  incidentAction: state.selectedIncident.incidentAction
    ? state.selectedIncident.incidentAction
    : {},
  incidentsTasks: state.selectedIncident.incidentTasks
    ? state.selectedIncident.incidentTasks
    : {},
  loadingAction: state.selectedIncident.isLoadingData,
});

const mapDispatchToProps = {
  getIncidentTasks: fetchIncidentTasks,
  getIncidentTask: getIncidentTaskById,
  setIncidentAction: activeIncidentAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncidentActionTaken);
