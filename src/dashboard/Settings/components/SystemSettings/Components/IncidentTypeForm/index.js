import React from 'react'
import { Modal, Icon,} from 'antd';
import IncidentForm from './newForm'

class AddnewIncidentType extends React.Component {
    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleSend = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {

        return (
            <div>
                <Icon style={{ cursor: "pointer" }} type="plus" 
                    theme="outlined" onClick={this.showModal} />
                <Modal
                    title="Settings-New incident type"
                    visible={this.state.visible}
                    onOk={ this.handleSend }
                    onCancel={this.handleCancel}
                    width='50%'
                >
                <IncidentForm />
                </Modal>
            </div>
        );
    }
}

export default AddnewIncidentType;
