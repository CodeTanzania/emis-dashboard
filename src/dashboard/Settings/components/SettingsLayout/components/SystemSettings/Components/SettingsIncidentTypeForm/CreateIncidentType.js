import React from 'react';
import { Icon, Modal } from 'antd';

import IncidentTypeForm from './IncidentTypeForm';

export default class CreateIncidentType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.onCancelButton = this.handleCancel.bind(this);
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
    const { visible } = this.state;
    return (
      <div className="CreateIncidentTYpe">
        <Icon
          style={{ cursor: 'pointer' }}
          type="plus"
          theme="outlined"
          onClick={this.showModal}
        />
        <Modal
          title="Settings: Create new Incident-Type"
          visible={visible}
          onCancel={this.handleCancel}
          footer={null}
          width="50%"
        >
          <IncidentTypeForm onCancelButton={this.handleCancel} />;
        </Modal>
      </div>
    );
  }
}
