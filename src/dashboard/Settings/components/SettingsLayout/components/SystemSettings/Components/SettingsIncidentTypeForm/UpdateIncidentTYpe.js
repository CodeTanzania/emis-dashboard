import React from 'react';
import { Icon, Modal } from 'antd';

import IncidentTypeForm from './IncidentTypeForm';

export default class UpdateIncidentType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
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
    // const { handleUpdate } = this.props;
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
          visible={visible}
          onCancel={this.handleCancel}
          footer={null}
          width="50%"
        >
          <IncidentTypeForm />;
        </Modal>
      </div>
    );
  }
}
