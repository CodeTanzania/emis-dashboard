
import React from 'react';
import { Row, Col } from 'antd';
import Moment from 'react-moment';
import classnames from 'classnames';
import styles from './index.css';

const cx = classnames.bind(styles);

function AlertDetails(props) {
    const { card } = props;
    const {title, issuedAt, source, description, createdAt} = card;

    return(
        <div>
            <Row>
                <Col span={16}>
                <h2>{title}</h2>
                <p>
                    Created at: <Moment format="DD/MM/YYYY">{createdAt}</Moment> by {source}
                </p>
                <p>
                    Probable duration: <Moment format="DD/MM/YYYY">{issuedAt}</Moment>
                </p>
                <p>Expected Volume:   45 ml to 110 ml</p>
                <p>Prone Areas: Kigogo, Hananasif, Tandale, Kimara</p>
                </Col>
                <Col span={6} offset={2}>
                <Row>
                    <Col span={24}>
                    <p>Associated Risks: Flood, LandSlide</p>
                    </Col>
                    <Col span={11} offset={13}>
                    <p>Dar es salaam</p>
                    </Col>
                </Row>
                </Col>
            </Row>
            <Row>
                <Col span={24} id={cx('alert-description')}>
                <h3>Description</h3>
                <p>{description}</p>
                </Col>
            </Row>
        </div>
    );
}

export default AlertDetails;