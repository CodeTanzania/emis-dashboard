import React, { Component, Fragment } from 'react';
import { Button, Checkbox, Input, List, Popover, Layout } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchStakeholders } from '../../actions';
/* import component */
import StakeholderListFooter from './components/StakeholderListFooter';
import StakeholderItem from './components/StakeholderItem';

const { Search } = Input;
const actions = (
  <div>
    <div>
      <Button icon="share-alt" className="b-0">
        Share
      </Button>
    </div>
    <div>
      <Button icon="hdd" className="b-0">
        Archive
      </Button>
    </div>
  </div>
);
/**
 * Stakeholder list component
 *
 * @function
 * @name StakeholderList
 *
 * @param {Object} props - data which is an array of stakeholder
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class StakeholderList extends Component {
  static propTypes = {
    handleSearchStakeholders: PropTypes.func.isRequired,
    stakeholders: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
  };

  onSearch = searchText => {
    const { handleSearchStakeholders } = this.props;
    handleSearchStakeholders(searchText);
  };

  render() {
    const { stakeholders, loading } = this.props;
    const headerStyle = {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      background: '#fff',
      padding: '7px 5px 7px 20px',
      borderBottom: '1px solid #E0E0E0',
    };
    return (
      <Fragment>
        <Layout style={headerStyle}>
          <Checkbox />
          <div style={{ flex: '1', margin: '0 10px' }}>
            <Search
              placeholder="Search stakeholder..."
              onSearch={value => this.onSearch(value)}
              style={{ width: '100%' }}
              enterButton={<Button icon="search" />}
            />
          </div>
          <Popover placement="bottom" trigger="click" content={actions}>
            <Button icon="ellipsis" className="f-20 b-0" />
          </Popover>
        </Layout>
        <div
          style={{
            background: '#fff',
            height: '100%',
            overflowY: 'auto',
            paddingBottom: '50px',
          }}
        >
          <List
            loading={loading}
            itemLayout="horizontal"
            dataSource={stakeholders}
            renderItem={item => <StakeholderItem stakeholder={item} />}
          />
          {stakeholders.length ? <StakeholderListFooter /> : ''}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  stakeholders: state.stakeholders.data,
  loading: state.stakeholders.isLoading,
});

export default connect(
  mapStateToProps,
  {
    handleSearchStakeholders: searchStakeholders,
  }
)(StakeholderList);
