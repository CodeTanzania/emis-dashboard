/* eslint no-underscore-dangle: "off" */
import React, { Component } from 'react';
import { Drawer } from 'antd';
import { connect } from 'react-redux';
import StakeholderForm from './components/StakeholderForm';

class StakeholderFormWrapper extends Component {
  // state = { errorMsg: '', submitting: false };
  state = { visible: false };

  componentWillReceiveProps = nextProps => {
    if (nextProps !== this.props) {
      this.setState({ visible: nextProps.form.show, form: nextProps.form });
    }
  };

  hideDrawer = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible, form } = this.state;

    return visible ? (
      <Drawer
        width="50%"
        placement="right"
        visible={visible}
        onClose={this.hideDrawer}
        maskClosable={false}
        {...form.drawerOptions}
      >
        <StakeholderForm
          onCancel={this.hideDrawer}
          stakeholder={form.stakeholder}
        />
      </Drawer>
    ) : null;
  }
}

const mapStateToProps = state => ({
  form: state.stakeholders.form,
});

export default connect(mapStateToProps)(StakeholderFormWrapper);
