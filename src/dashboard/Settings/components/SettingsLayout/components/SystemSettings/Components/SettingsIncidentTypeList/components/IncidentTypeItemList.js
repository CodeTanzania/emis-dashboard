import PropTypes from 'prop-types';
import { Col, List, Avatar, Row } from 'antd';
import classNames from 'classnames/bind';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectIncidentType } from '../../../../../../../actions';
import styles from '../../../styles.css';

/**
 * Render a single contact item component for contacts list
 *
 * @function
 * @name Contact
 * @version 0.1.0
 * @since 0.1.0
 */

const cx = classNames.bind(styles);

class IncidentTypeItem extends React.Component {

  static propTypes = {
    selected: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      nature: PropTypes.string.isRequired,
      family: PropTypes.string.isRequired,
      code: PropTypes.string,
      cap: PropTypes.string.isRequired,
      color: PropTypes.string,
      _id: PropTypes.string,
    }).isRequired),
    incidentSelected: PropTypes.shape({
      name: PropTypes.string,
      nature: PropTypes.string.isRequired,
      family: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      cap: PropTypes.string.isRequired,
      color: PropTypes.string,
      _id: PropTypes.string,
    }).isRequired,
    handleselectedIncidentType: PropTypes.func,
  };

  static defaultProps = {
    selected: null,
    incidentSelected: null,
    handleselectedIncidentType: () => {},
  };

  onClick = () => {
    const { incidentSelected, handleselectedIncidentType } = this.props;
    handleselectedIncidentType(incidentSelected);
  };

  render() {
    const { incidentSelected, selected } = this.props;
    const { _id: id } = selected;

    const { name, nature, family, code, cap, color, _id } = incidentSelected;
    const isSelected = selected ? id === _id : false;

    return (
      <List.Item className={cx('p-l-20', { isSelected })}>
        <List.Item.Meta
          className="IncidentTypeItemMeta"
          avatar={
            <Avatar
              style={{ backgroundColor: color, verticalAlign: 'middle' }}
              size="large"
            >
              {name.charAt(0)}
            </Avatar>
          }
          title={
            <Row type="flex">
              <Col xs={18}>
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
              <Col xs={6}>
                <p>{code}</p>
              </Col>
            </Row>
          }
          description={
            <div className="IncidentTypeDescription">
              <p>{cap}</p>
              <p>
                {nature}-{family}
              </p>
            </div>
          }
        />
      </List.Item>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.incidentsType.data,
});

const mapDispatchToProps = dispatch => ({
  handleselectedIncidentType: bindActionCreators(selectIncidentType, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncidentTypeItem);
