/* eslint no-underscore-dangle:off */
import React, { Component, Fragment } from 'react';
import { Row, Col, Tabs, Table } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getResourceStocks } from '../../../../common/API';
import BasicInfo from './components/BasicInfo';
import Members from './components/Members';
import styles from './styles.css';

const cx = classNames.bind(styles);
const { TabPane } = Tabs;

const getColumns = () => [
  {
    title: 'Stock',
    dataIndex: 'item.name',
    width: '25%',
    sorter: (a, b) => a.item.name.length - b.item.name.length,
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    width: '15%',
    sorter: (a, b) => a.quantity - b.quantity,
  },
  {
    title: 'Minimum',
    dataIndex: 'minAllowed',
    width: '15%',
    sorter: (a, b) => a.minAllowed - b.minAllowed,
  },
  {
    title: 'Maximum',
    dataIndex: 'maxAllowed',
    width: '15%',
    sorter: (a, b) => a.maxAllowed - b.maxAllowed,
  },
];

/**
 * Contact detail view component
 *
 * @function
 * @name Detail
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class StakeholderProfile extends Component {
  state = { resources: [], loadingResource: false };

  static defaultProps = {
    stakeholder: null,
  };

  static propTypes = {
    stakeholder: PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
    showStakeholderForm: PropTypes.func.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.stakeholder &&
      nextProps.stakeholder !== this.props.stakeholder
    ) {
      const { stakeholder } = nextProps;
      if (stakeholder) {
        this.setState({ loadingResource: true });
        getResourceStocks({ owner: stakeholder._id }).then(result => {
          this.setState({ resources: result.data, loadingResource: false });
        });
      }
    }
  }

  editStakeholder = () => {
    this.props.showStakeholderForm(
      { title: 'Edit Stakeholder' },
      this.props.stakeholder
    );
  };

  handleOnClickAddPersonnel = () => {};

  render() {
    const { stakeholder } = this.props;
    const { resources, loadingResource } = this.state;
    let memberTitle;
    let allowMembers;
    if (stakeholder) {
      memberTitle =
        stakeholder.type === 'Committee' && stakeholder.type === 'Team'
          ? 'Member'
          : 'Personnel';
      allowMembers =
        stakeholder.type !== 'Individual' && stakeholder.type !== 'Other';
    }

    return stakeholder ? (
      <Fragment>
        <div className={cx('stakeholderProfile')}>
          <div className={cx('header')}>
            <h3>Basic Information</h3>
          </div>
          <Row>
            <Col span={24}>
              <BasicInfo
                stakeholder={stakeholder}
                onClickEdit={this.editStakeholder}
              />
            </Col>
          </Row>
          <Tabs defaultActiveKey="members">
            {resources.length && (
              <TabPane
                tab="Resources"
                key="resource"
                className={cx('tabContent')}
              >
                <Table
                  loading={loadingResource}
                  dataSource={resources}
                  rowKey={record => record._id}
                  scroll={{ y: 600 }}
                  size="middle"
                  columns={getColumns()}
                />
              </TabPane>
            )}
            {stakeholder &&
              allowMembers && (
                <TabPane
                  tab={memberTitle}
                  key="members"
                  className={cx('tabContent')}
                >
                  <Members memberType={memberTitle} />
                </TabPane>
              )}
          </Tabs>
        </div>
      </Fragment>
    ) : (
      ''
    );
  }
}

export default StakeholderProfile;
