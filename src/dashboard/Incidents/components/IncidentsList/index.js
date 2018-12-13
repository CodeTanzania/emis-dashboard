import PropTypes from 'prop-types';
import { Col, List, Avatar, Row } from 'antd';
import classNames from 'classnames/bind';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './styles.css';

/**
 * Render a single contact item component for contacts list
 *
 * @function
 * @name Contact
 * @version 0.1.0
 * @since 0.1.0
 */

const cx = classNames.bind(styles);

class IncidentsList extends React.Component {

//   onClick = () => {
//     const { incidentSelected, handleselectedIncidentType } = this.props;
//     handleselectedIncidentType(incidentSelected);
//   };

  render() {
    const { incidentsList } = this.props;

    const { name, incidentType, description, startedAt, endedAt, _id } = incidentsList;
    return (
      <List.Item className={cx('p-l-20', )}>
        <List.Item.Meta
          className="IncidentItemMeta"
          title={
            <Row type="flex">
              <Col xs={20}>
                <span
                  role="link"
                  className={cx('f-600 f-15', 'name')}
                  onClick={this.onClick}
                  onKeyDown={this.onClick}
                  tabIndex="0"
                  title="Click to view more"
                >
                  <h3>{name}</h3>
                </span>
              </Col>
            </Row>
          }
          description={
            <div className="IncidentTypeDescription">
              <p>
              Created on:  {startedAt}
              </p>
              <p>
              Ended on: {endedAt}
              </p> 
              <p style={{paddingTop:'5px'}}>Description: {description}</p>

            </div>
          }
        />
      </List.Item>
    );
  }
}

const mapDispatchToProps = dispatch => ({
});

export default connect(
  '',
  mapDispatchToProps
)(IncidentsList);
