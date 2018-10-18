import { Button, Drawer, Row } from 'antd';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ColHeader from '../../../../common/components/ColHeader';
import StakeholderForm from '../StakeholderForm';
import AddPersonnelForm from './components/AddPersonnelForm';
import BasicInfo from './components/BasicInfo';
import PersonnelList from './components/PersonnelList';
import ProfileItemContent from './components/ProfileItemContent';
// import Responsibilities from './components/Responsibilities';
import ProfileItemHeader from './components/ProfileItemHeader';

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
  state = { visible: false, showEditProfile: false };

  static defaultProps = {
    stakeholder: null,
  };

  static propTypes = {
    stakeholder: PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  };

  handleOnClickEditProfile = () => {
    this.setState({ visible: true, showEditProfile: true });
  };

  handleOnClickAddPersonnel = () => {
    this.setState({ visible: true });
  };

  handleCancelEdit = () => {
    this.setState({
      visible: false,
      showEditProfile: false,
    });
  };

  render() {
    const { visible, showEditProfile } = this.state;
    const { stakeholder } = this.props;
    return stakeholder ? (
      <Fragment>
        <Drawer
          title={showEditProfile ? 'Edit Stakeholder' : 'Add Personnel'}
          width="50%"
          placement="right"
          visible={visible}
          onClose={this.handleCancelEdit}
          maskClosable={false}
        >
          {showEditProfile ? (
            <StakeholderForm
              handleCancelClick={this.handleCancelEdit}
              stakeholder={stakeholder}
            />
          ) : (
            <AddPersonnelForm />
          )}
        </Drawer>
        <ColHeader>
          <h3>Basic Information</h3>
        </ColHeader>
        <div className="content scrollable">
          <Row>
            <ProfileItemHeader
              title={stakeholder.name}
              actions={
                <Button
                  icon="edit"
                  onClick={this.handleOnClickEditProfile}
                  className="f-20 b-0"
                />
              }
            />
            <ProfileItemContent>
              <BasicInfo stakeholder={stakeholder} />
            </ProfileItemContent>
          </Row>
          <Row>
            <ProfileItemHeader
              title="Key Personnel"
              actions={
                <Button
                  icon="plus"
                  onClick={this.handleOnClickAddPersonnel}
                  className="f-20 b-0"
                />
              }
            />
            <ProfileItemContent>
              <PersonnelList />
            </ProfileItemContent>
          </Row>
          {/* <Row>
            <ProfileItemHeader title="Responsibilities" actions={<Button icon="plus" className="f-20 b-0" />} />
            <ProfileItemContent>
              <Responsibilities />
            </ProfileItemContent>
          </Row> */}
        </div>
      </Fragment>
    ) : (
      ''
    );
  }
}

const mapStateToProps = state => ({
  stakeholder: state.stakeholders.selected,
});

export default connect(mapStateToProps)(StakeholderProfile);
