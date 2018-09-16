import { Button, Checkbox, Col, Icon, List, Popover, Row } from 'antd';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectStakeholder } from '../../../../actions';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

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
 * Render a single contact item component for contacts list
 *
 * @function
 * @name Contact
 *
 * @param {Object} props - Receive name, phone and email as props
 * @param {string} props.name - Contact Name
 * @param {string} props.phone - Contact phone number
 * @param {string} props.email - Contact email address
 *
 * @version 0.1.0
 * @since 0.1.0
 */

class StakeholderItem extends Component {
  onClick = () => {
    const { stakeholder } = this.props;
    selectStakeholder(stakeholder);
  };

  render() {
    const { stakeholder, selectedStakeholder } = this.props;
    const { name, phone, email, _id } = stakeholder;
    const isSelected = selectedStakeholder
      ? selectedStakeholder._id === _id
      : false;
    return (
      <List.Item className={cx('p-l-20', { isSelected })}>
        <List.Item.Meta
          avatar={<Checkbox />}
          title={
            <Row>
              <Col xs={21}>
                <span
                  className={cx('f-600 f-15', 'name')}
                  onClick={this.onClick}
                  title="Click to view more"
                >
                  {name}
                </span>
              </Col>
              <Col xs={3}>
                <Popover placement="bottom" trigger="click" content={actions}>
                  <Button
                    icon="ellipsis"
                    className={cx('f-20 b-0', { isSelected })}
                  />
                </Popover>
              </Col>
            </Row>
          }
          description={
            <div>
              <Row>
                <Col span={24}>
                  <span icon="mobile" className={cx('b-0', { isSelected })}>
                    <Icon type="mobile" style={{ marginRight: '5px' }} />
                    {phone}
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <span icon="mail" className={cx('b-0', { isSelected })}>
                    <Icon type="mail" style={{ marginRight: '5px' }} />
                    {email}
                  </span>
                </Col>
              </Row>
            </div>
          }
        />
      </List.Item>
    );
  }
}

/* Validating props types */
StakeholderItem.propTypes = {
  stakeholder: PropTypes.object,
};

const mapStateToProps = state => ({
  selectedStakeholder: state.stakeholders.selected,
});

export default connect(
  mapStateToProps,
  { selectStakeholder }
)(StakeholderItem);
