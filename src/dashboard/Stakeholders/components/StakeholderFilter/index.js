import { Button, Drawer } from 'antd';
import React, { Component, Fragment } from 'react';
import ColHeader from '../../../../common/components/ColHeader';
import StakeholderForm from '../StakeholderForm';
import FiltersGroup from './components/FilterGroup';

// fake data
const data = {
  phases: [
    { name: 'Mitigation' },
    { name: 'Preparedness' },
    { name: 'Response' },
    { name: 'Recovery' },
  ],
  types: [
    { name: 'Agency' },
    { name: 'Committee' },
    { name: 'Team' },
    { name: 'Individual' },
  ],
  roles: [
    { name: 'Regional Commissioner' },
    { name: 'Ward Officer' },
    { name: 'Doctors' },
    { name: 'Police' },
  ],
  functions: [
    { name: 'Evacuation' },
    { name: 'Water and Utilities' },
    { name: 'Medical Support' },
    { name: 'Logistics' },
  ],
};

/**
 * Render contact filters component
 *
 * @function
 * @name Filters
 *
 * @since 0.1.0
 * @version 0.1.0
 */
class StakeholderFilter extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({ visible: true });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible } = this.state;
    return (
      <Fragment>
        <Drawer
          title="Create Stakeholder"
          width="50%"
          placement="right"
          visible={visible}
          onClose={this.onClose}
          maskClosable={false}
        >
          <StakeholderForm handleCancelClick={this.onClose} />
        </Drawer>
        <ColHeader>
          <Button icon="plus" type="primary" onClick={this.showDrawer}>
            New Contact
          </Button>
        </ColHeader>
        <div className="content scrollable">
          <FiltersGroup name="Phases" filters={data.phases} />
          <FiltersGroup name="Types" filters={data.types} />
          <FiltersGroup name="Roles" filters={data.roles} />
          <FiltersGroup name="Functions" filters={data.functions} />
        </div>
      </Fragment>
    );
  }
}

export default StakeholderFilter;
