import React, { Component, Fragment } from 'react';
import { Row, Col, Divider } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import BasicInfo from './components/BasicInfo';
import Members from './components/Members';
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
          <Row>
            <Col span={24}>
              <BasicInfo
                stakeholder={stakeholder}
                onClickEdit={this.editStakeholder}
              />
            </Col>
          </Row>
          {stakeholder.type !== 'Individual' && (
            <Fragment>
              <Row style={{ paddingTop: '20px' }}>
                <Col span={23}>
                  <h3 style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                    Members
                  </h3>
                </Col>
                <Divider type="horizontal" />
              </Row>
              <Members />
            </Fragment>
          )}
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
