import { Button, Checkbox, Col, Input, List, Popover, Row } from 'antd';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ColHeader from '../../../../common/components/ColHeader';
import { fetchStakeholders, searchStakeholders } from '../../actions';
/* import component */
import ListFooter from './components/ListFooter';
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
class StakeholderList extends React.Component {
  componentDidMount() {
    this.props.fetchStakeholders();
  }

  onSearch = searchText => {
    this.props.searchStakeholders(searchText);
  };

  render() {
    const { stakeholders, loading } = this.props;
    return (
      <Fragment>
        <ColHeader>
          <Row type="flex" justify="space-around">
            <Col span={1}>
              <Checkbox />
            </Col>
            <Col span={19}>
              {/* start search component */}
              <Search
                placeholder="Search here"
                onSearch={value => this.onSearch(value)}
                style={{ width: '100%' }}
                enterButton={<Button icon="search" />}
              />
              {/* end search component */}
            </Col>
            <Col span={2}>
              <Popover placement="bottom" trigger="click" content={actions}>
                <Button icon="ellipsis" className="f-20 b-0" />
              </Popover>
            </Col>
          </Row>
        </ColHeader>
        <div className="content scrollable">
          <List
            loading={loading}
            itemLayout="horizontal"
            dataSource={stakeholders}
            renderItem={item => <StakeholderItem stakeholder={item} />}
          />
        </div>
        <ListFooter />
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
  { fetchStakeholders, searchStakeholders }
)(StakeholderList);
