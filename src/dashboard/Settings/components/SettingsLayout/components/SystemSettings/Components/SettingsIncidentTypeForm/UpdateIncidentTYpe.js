import React from 'react';
import { Icon, Modal } from 'antd';

import IncidentTypeForm from './IncidentTypeForm';
import { connect } from 'react-redux';

class UpdateIncidentType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.onCancelButton = this.handleCancel.bind(this)
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };


  render() {
    const { incidentType } = this.props;
    return (
      <div className="CreateIncidentTYpe">
        <Icon
          style={{ cursor: 'pointer' }}
          type="edit"
          theme="outlined"
          onClick={this.showModal}
        />
        <Modal
          title="Settings: Edit Incident-Type"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          width="50%"
        >
          <IncidentTypeForm onCancelButton={this.handleCancel} incidentType={incidentType[0]} />;
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  incidentType: state.incidentsType.incidentType
    ? [state.incidentsType.incidentType]
    : [],
});

export default connect(
  mapStateToProps,
  ''
)(UpdateIncidentType);