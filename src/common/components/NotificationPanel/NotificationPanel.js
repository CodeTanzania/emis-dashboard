/* eslint no-underscore-dangle: "off" */
import React, { Component } from 'react';
import { Modal, Form, Select, Spin, Input, message } from 'antd';
import * as API from '../../API';

const { Option } = Select;
const FormItem = Form.Item;
const { TextArea } = Input;

const renderStakeholdersOpts = stakeholders =>
  stakeholders.map(stakeholder => (
    <Option key={stakeholder._id}>{stakeholder.name}</Option>
  ));

class NotificationPanel extends Component {
  state = {
    stakeholders: [],
    fetching: false,
    sending: false,
    notification: { to: [], subject: '', body: '' },
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.to !== this.props.to) {
      const { to } = nextProps;
      if (to && to.length) {
        const destination = to.map(stakeholder => ({
          key: stakeholder._id,
          label: stakeholder.name,
        }));
        this.setState(prevState => ({
          notification: { ...prevState.notification, to: destination },
        }));
      }
    }
  }

  resetState = () => {
    this.setState({
      stakeholders: [],
      fetching: false,
      sending: false,
      notification: { to: [], subject: '', body: '' },
    });
  };

  dismiss = () => {
    this.props.dismissNotificationPanel();
    this.setState({
      stakeholders: [],
      fetching: false,
      sending: false,
      notification: { to: [], subject: '', body: '' },
    });
  };

  handleSelectChange = value => {
    this.setState(prevState => ({
      notification: { ...prevState.notification, to: value },
      stakeholders: [],
      fetching: false,
    }));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      notification: { ...prevState.notification, [name]: value },
    }));
  };

  handleSearchStakeholder = searchTxt => {
    if (!searchTxt) {
      // search text is empty
      this.setState({ stakeholders: this.props.stakeholders });
      return;
    }

    setTimeout(() => {
      this.setState({ stakeholders: [], fetching: true });
      API.findStakeholders({
        q: searchTxt,
      })
        .then(result => {
          this.setState({ stakeholders: result.data, fetching: false });
        })
        .catch(() => {
          this.setState({ fetching: false });
        });
    }, 500);
  };

  handleDropdownVisibleChange = () => {
    this.setState({ stakeholders: this.props.stakeholders });
  };

  handleSendNotification = () => {
    const { notification } = this.state;
    const ids = notification.to.map(item => item.key);
    this.setState({ sending: true });
    API.sendNotification({ ...notification, to: { _id: ids } })
      .then(() => {
        this.setState({ sending: false });
        message.success('Notification sent successfully');
        this.resetState();
        this.dismiss();
      })
      .catch(() => this.setState({ sending: false }));
  };

  render() {
    const { showNotificationPanel } = this.props;
    const { stakeholders, fetching, notification, sending } = this.state;

    const formItemLayout = {
      labelCol: { span: 24 },
      wrapperCol: { span: 24 },
    };

    return (
      <Modal
        width="60%"
        placement="right"
        visible={showNotificationPanel}
        onCancel={this.dismiss}
        onOk={this.handleSendNotification}
        maskClosable={false}
        confirmLoading={sending}
        okText="Send"
        title="New Notification"
      >
        <div>
          <Form>
            <FormItem {...formItemLayout} label="To">
              <Select
                style={{ width: '100%' }}
                labelInValue
                mode="multiple"
                value={notification.to}
                onChange={this.handleSelectChange}
                placeholder="Select Stakeholders..."
                notFoundContent={fetching ? <Spin size="small" /> : null}
                filterOption={false}
                onSearch={this.handleSearchStakeholder}
                onDropdownVisibleChange={this.handleDropdownVisibleChange}
              >
                {renderStakeholdersOpts(stakeholders)}
              </Select>
            </FormItem>
            <FormItem {...formItemLayout} label="Subject">
              <Input
                placeholder="Subject"
                name="subject"
                onChange={this.handleChange}
                value={notification.subject}
              />
            </FormItem>
            <FormItem {...formItemLayout} label="Body">
              <TextArea
                rows={15}
                placeholder="Subject"
                name="body"
                onChange={this.handleChange}
                value={notification.body}
              />
            </FormItem>
            {/* <Row>
              <Col span={24} style={{ textAlign: 'right' }}>
                <FormItem>
                  <Button onClick={this.dismiss} loading={sending}>
                    Cancel
                  </Button>

                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ marginLeft: 8 }}
                    onClick={this.handleSendNotification}
                    loading={sending}
                  >
                    Send
                  </Button>
                </FormItem>
              </Col>
            </Row> */}
          </Form>
        </div>
      </Modal>
    );
  }
}

export default NotificationPanel;
