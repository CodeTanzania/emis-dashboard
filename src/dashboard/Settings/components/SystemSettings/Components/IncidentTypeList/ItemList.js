import { Col, List, Avatar, Row } from 'antd';
import classNames from 'classnames/bind';

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {selectedIncidentType} from '../../../../actions'
import styles from '../../SystemSettings.css';


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

      onClick = () => {
        const {incidentSelected, handleselectedIncidentType } = this.props;
        handleselectedIncidentType(incidentSelected);
      
      };
    
    render() {
        const { incidentSelected, selectedIncidentType } = this.props;
        const { name, nature, family, code, description, color, _id } = incidentSelected;
        const isSelected = selectedIncidentType
          ? selectedIncidentType._id === _id
          : false;
        return (
            <List.Item className={cx('p-l-20', { isSelected })}>
                <List.Item.Meta
                    avatar={<Avatar style={{ backgroundColor: color, verticalAlign: 'middle' }} size="large">
                        {name.charAt(0)}
                    </Avatar>}
                    title={(
                        <Row>
                            <Col xs={21}>
                                <span style={{cursor:"pointer"}}
                                className={cx('f-600 f-15', 'name')}
                                onClick={this.onClick}
                                onKeyDown={this.onClick}
                                tabIndex="0"
                                title="Click to view more"
                                >
                                    {name}
                                </span>
                            </Col>
                            <Col xs={3} style={{
                                paddingRight: '10px'
                            }}>
                                {code.given}
                            </Col>
                        </Row>
                    )}
                    description={(
                        <Row>
                            <Col span={24} className={cx('b-0', { isSelected })}>
                                {nature}-{family}

                            </Col>

                            <Col span={24} style={{
                                textOverflow: "ellipsis",
                                width: "350px",
                                whiteSpace: "nowrap",
                                overflow: "hidden"
                            }} className={cx('b-0', { isSelected })}>
                                {description}
                            </Col>
                        </Row>
                    )}
                />
            </List.Item>
        );
    }
}

const mapStateToProps = state => {
    return{
        selectedIncidentType: state.incidentsType.data
    }
};
const mapDispatchToProps = dispatch => {
return {
    handleselectedIncidentType: bindActionCreators(selectedIncidentType, dispatch)

}
}
 
export default connect(mapStateToProps, mapDispatchToProps)(IncidentTypeItem)