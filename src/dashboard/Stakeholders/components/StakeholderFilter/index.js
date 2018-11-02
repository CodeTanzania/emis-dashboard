import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';
// import ColHeader from '../../../../common/components/ColHeader';
import StakeholderForm from '../StakeholderForm';
import FiltersGroup from './components/FilterGroup';

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

  static propTypes = {
    filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

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
    const { filters } = this.props;

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
        {/* <ColHeader>
          <Button icon="plus" type="primary" onClick={this.showDrawer}>
            New Contact
          </Button>
        </ColHeader> */}
        <div
          style={{ height: '100%', overflowY: 'auto', background: '#ffffff' }}
        >
          {filters.map(filter => (
            <FiltersGroup
              groupName={filter.group}
              filters={filter.data}
              key={filter.group}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.stakeholders.filters,
});

export default connect(mapStateToProps)(StakeholderFilter);
