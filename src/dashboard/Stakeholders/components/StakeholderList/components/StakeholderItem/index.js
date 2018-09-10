import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { Button, Checkbox, Col, List, Popover, Row } from 'antd';
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
    this.props.selectStakeholder(this.props.stakeholder);
  };

  render() {
    const { stakeholder, selectedStakeholder } = this.props;
    const { name, phone, email, _id } = stakeholder;
    const isSelected = selectedStakeholder ? selectedStakeholder._id === _id : false;
    return (
      <List.Item className={cx("p-l-20", { 'isSelected': isSelected })}>
        <List.Item.Meta

          avatar={<Checkbox />}
          title={(
            <Row>
              <Col xs={21} >
                <span className={cx('f-600 f-15', 'name')} onClick={this.onClick} title='Click to view more'>
                  {name}
                </span>
              </Col>
              <Col xs={3}>
                <Popover placement="bottom" trigger="click" content={actions}>
                  <Button icon="ellipsis" className={cx("f-20 b-0", { 'isSelected': isSelected })} />
                </Popover>
              </Col>
            </Row>
          )}
          description={(
            <Row>
              <Col span={8}>
                <Button icon="mobile" className={cx("b-0", { 'isSelected': isSelected })}>
                  {phone}
                </Button>
              </Col>
              <Col span={8}>
                <Button icon="mail" className={cx("b-0", { 'isSelected': isSelected })}>
                  {email}
                </Button>
              </Col>
            </Row>
          )}
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


export default connect(mapStateToProps, { selectStakeholder })(StakeholderItem);


