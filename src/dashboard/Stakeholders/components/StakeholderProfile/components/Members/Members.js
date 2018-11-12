/* eslint no-underscore-dangle: "off" */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Button, Input, List, Avatar } from 'antd';
import classNames from 'classnames';
import API from '../../../../../../common/API';
import PersonnelCard from './components/PersonnelCard';

import styles from './styles.css';

const cx = classNames.bind(styles);

/**
 * Renders a grid view list of key personnel
 *
 * @function
 * @name Members
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class Members extends Component {
  static propTypes = {
    stakeholder: PropTypes.shape({
      _id: PropTypes.string,
    }).isRequired,
    stakeholders: PropTypes.arrayOf(PropTypes.object),
    updatingStakeholder: PropTypes.bool,
  };

  static defaultProps = {
    stakeholders: [],
    updatingStakeholder: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      stakeholders: props.stakeholders,
      cache: props.stakeholders,
      addMemberFormVisible: false,
      searching: false, // true when searching from existing member on progress
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.stakeholder !== this.props.stakeholder) {
      // It's new stakeholder, reset state
      this.setState(prevState => ({
        addMemberFormVisible: false,
        stakeholders: prevState.cache,
        q: '',
      }));
    }
  }

  handleShowAddMemberFormClick = () => {
    this.setState({ addMemberFormVisible: true });
  };

  handleClickCancel = () => {
    this.setState(prevState => ({
      addMemberFormVisible: false,
      stakeholders: prevState.cache,
      q: '',
    }));
  };

  handleSearchInputChange = event => {
    const searchText = event.target.value;
    const { name } = event.target;
    this.setState({ [name]: searchText });
    setTimeout(() => {
      this.setState({ searching: true });
      API.findStakeholders({
        q: searchText,
        filters: { group: 'type', selected: ['Individual'] },
      })
        .then(result => {
          this.setState({ stakeholders: result.data, searching: false });
        })
        .catch(() => {
          this.setState({ searching: false });
        });
    }, 500);
  };

  handleAddMember = item => {
    const updates = {};
    const { _id, members } = this.props.stakeholder;
    if (members) {
      // There are existing members
      const memberIds = members.map(member => member._id); // extract member Ids
      updates.members = [...memberIds, item._id]; // add new member Id
    } else {
      // There are no existing members
      updates.members = [item._id]; // add new member Id
    }

    this.props.updateStakeholder(_id, updates);
  };

  handleAddNewMember = () => {
    this.props.showStakeholderForm({
      title: `Add Member to ${this.props.stakeholder.name}`,
    });
  };

  render() {
    const { addMemberFormVisible, stakeholders, searching, q } = this.state;
    const { stakeholder } = this.props;
    const { members } = stakeholder;

    return (
      <div className={cx('StakeholderMembers')}>
        <div className={cx('topSection')}>
          <Row type="flex" justify="end">
            <div
              className={cx('searchInput', { hidden: !addMemberFormVisible })}
            >
              <Input
                placeholder="Search from existing"
                name="q"
                value={q}
                onChange={this.handleSearchInputChange}
              />
            </div>
            <div
              className={cx('addMemberBtn', { hidden: addMemberFormVisible })}
            >
              <Button icon="plus" onClick={this.handleShowAddMemberFormClick}>
                Add Members
              </Button>
            </div>
          </Row>
        </div>
        <div className={cx('members', { hidden: addMemberFormVisible })}>
          <Row type="flex" justify="space-between">
            {members &&
              members.map(personnel => (
                <Col key={personnel._id} span={10}>
                  <PersonnelCard {...personnel} />
                </Col>
              ))}
          </Row>
        </div>
        <div className={cx('searchPanel', { hidden: !addMemberFormVisible })}>
          <div className={cx('actions')}>
            <Row type="flex" justify="center">
              <div>
                <span>
                  Type in the field above to search from existing stakeholders
                </span>
                <p>Or</p>
                <Button onClick={this.handleClickCancel}>Cancel</Button>
                <Button
                  type="primary"
                  style={{ marginLeft: 8 }}
                  onClick={this.handleAddNewMember}
                >
                  Add New Stakeholder
                </Button>
              </div>
            </Row>
          </div>
          <div className={cx('searchResult')}>
            <List
              loading={searching}
              itemLayout="horizontal"
              dataSource={stakeholders}
              renderItem={item => (
                <List.Item
                  actions={[
                    <Button onClick={() => this.handleAddMember(item)}>
                      Add
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar shape="circle" size={50} icon="user" />}
                    title={<a href="https://ant.design">{item.name}</a>}
                  />
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Members;
