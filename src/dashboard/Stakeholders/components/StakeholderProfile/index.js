import React, { Component, Fragment } from 'react';
import { Button, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import BasicInfo from './components/BasicInfo';
import PersonnelList from './components/PersonnelList';
import ProfileItemContent from './components/ProfileItemContent';
// import Responsibilities from './components/Responsibilities';
import ProfileItemHeader from './components/ProfileItemHeader';
import { showStakeholderForm } from '../../actions';
import styles from './styles.css';

const cx = classNames.bind(styles);

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
  static defaultProps = {
    stakeholder: null,
  };

  static propTypes = {
    stakeholder: PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
    showStakeholderForm: PropTypes.func.isRequired,
  };

  editStakeholder = () => {
    this.props.showStakeholderForm(
      { title: 'Edit Stakeholder' },
      this.props.stakeholder
    );
  };

  handleOnClickAddPersonnel = () => {};

  render() {
    const { stakeholder } = this.props;
    return stakeholder ? (
      <Fragment>
        <div className={cx('stakeholderProfile')}>
          <div className={cx('header')}>
            <h3>Basic Information</h3>
          </div>
          <div>
            <Row>
              <Col span={24}>
                <BasicInfo
                  stakeholder={stakeholder}
                  onClickEdit={this.editStakeholder}
                />
              </Col>
            </Row>
            <Row>
              <ProfileItemHeader
                title="Key Personnel"
                actions={
                  <Button
                    icon="plus"
                    onClick={this.handleOnClickAddPersonnel}
                    className="addMember"
                  />
                }
              />
              <ProfileItemContent>
                <PersonnelList />
              </ProfileItemContent>
            </Row>
          </div>
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

export default connect(
  mapStateToProps,
  { showStakeholderForm }
)(StakeholderProfile);
