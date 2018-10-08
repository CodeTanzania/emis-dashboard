/* eslint no-underscore-dangle: "off" */
import { Button, Checkbox, Col, Icon, List, Popover, Row } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectStakeholder } from '../../../../actions';
import styles from './styles.css';

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
  // set proptypes
  static propTypes = {
    stakeholder: PropTypes.shape({
      _id: PropTypes.string,
    }).isRequired,
    selectedStakeholder: PropTypes.shape({
      _id: PropTypes.string,
    }),
    handleSelectStakeholder: PropTypes.func.isRequired,
  };

  //  set default
  static defaultProps = {
    selectedStakeholder: null,
  };

  onClick = () => {
    const { stakeholder, handleSelectStakeholder } = this.props;
    handleSelectStakeholder(stakeholder);
  };

  render() {
    const { stakeholder, selectedStakeholder } = this.props;
    const { name, phone, email, _id } = stakeholder;
    const isSelected = selectedStakeholder
      ? selectedStakeholder._id === _id
      : false;
    return (
      <List.Item className={cx('StakeholderItem', { isSelected })}>
        <List.Item.Meta
          avatar={<Checkbox />}
          title={
            <Row>
              <Col xs={21}>
                <strong
                  style={{ cursor: 'pointer' }}
                  role="link"
                  onClick={this.onClick}
                  onKeyDown={this.onClick}
                  tabIndex="0"
                  title="Click to view more"
                >
                  {name}
                </strong>
              </Col>
              <Col xs={3}>
                <Popover placement="bottom" trigger="click" content={actions}>
                  <Button
                    icon="ellipsis"
                    className={cx('actionBtn', { isSelected })}
                  />
                </Popover>
              </Col>
            </Row>
          }
          description={
            <div>
              <Row>
                <Col span={24}>
                  <div>
                    <Icon type="mobile" />
                    <span className={cx('infoItem', { isSelected })}>
                      {phone}
                    </span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div>
                    <Icon type="mail" />
                    <span className={cx('infoItem', { isSelected })}>
                      {email}
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
          }
        />
      </List.Item>
    );
  }
}

const mapStateToProps = state => ({
  selectedStakeholder: state.stakeholders.selected,
});

export default connect(
  mapStateToProps,
  { handleSelectStakeholder: selectStakeholder }
)(StakeholderItem);
