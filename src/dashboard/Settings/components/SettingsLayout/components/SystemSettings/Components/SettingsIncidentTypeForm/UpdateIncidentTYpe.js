import React from 'react';
import { Icon, Modal } from 'antd';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import IncidentTypeForm from './IncidentTypeForm';

class UpdateIncidentType extends React.Component {
  /* props validations for SettingsLayout */
  static propTypes = {
    incidentType: PropTypes.arrayOf(
      PropTypes.shape({
        event: PropTypes.string,
        nature: PropTypes.string.isRequired,
        family: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
        cap: PropTypes.string.isRequired,
        color: PropTypes.string,
        _id: PropTypes.string,
      }).isRequired
    ),
  };

  static defaultProps = {
    incidentType: null,
  };

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
          <IncidentTypeForm
            onCancelButton={this.handleCancel}
            incidentType={incidentType[0]}
          />
          ;
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
