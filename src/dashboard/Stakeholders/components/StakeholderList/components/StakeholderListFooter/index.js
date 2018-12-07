import React, { Component } from 'react';
import { Button, Col, Row } from 'antd';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles.css';
import { loadStakeholders } from '../../../../actions';

const cx = classNames.bind(styles);
const ButtonGroup = Button.Group;

/**
 * Contacts list footer component
 *
 * @function
 * @name ContactListFooter
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class StakeholderListFooter extends Component {
  static propTypes = {
    loadStakeholders: PropTypes.func.isRequired,
    stakeholderCount: PropTypes.number.isRequired,
  };

  handleStakeholdersReload = () => {
    this.props.loadStakeholders();
  };

  render() {
    const { stakeholderCount } = this.props;
    return (
      <div className={cx('StakeholderListFooter')}>
        <Row type="flex" justify="space-between">
          <Col span={8}>
            <h3>
              Total : &nbsp;
              <span className="f-15">{stakeholderCount}</span>
            </h3>
          </Col>
          <Col span={10}>
            <ButtonGroup>
              <Button
                icon="reload"
                title="Refresh Contacts"
                onClick={this.handleStakeholdersReload}
              />
              {/* <Button icon="export" title="Export Contacts" /> */}
              {/* <Button icon="bars" title="Sort Contacts" /> */}
              <Button icon="left" title="Previous" />
              <Button icon="right" title="Next" />
            </ButtonGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stakeholderCount: state.stakeholders.total,
});

export default connect(
  mapStateToProps,
  {
    loadStakeholders,
  }
)(StakeholderListFooter);
