
import React from 'react';
import { Row, Col, Card} from 'antd';
import classnames from 'classnames';
import AlertContents from './alertContents';
import styles from './index.css';

const cx = classnames.bind(styles);

function AlertCard (props) {
    const { card } = props;
    return(
        <Card
            className={cx('ant-card-custom-style')}
             title={<AlertContents card={card} />}
             extra={<span>Flood</span>}
            >
                <Row>
                    <Col span={12} className={cx('ant-card-action-first-col')}>
                    <p className={cx('alert-card-fonts')} >Read More</p>
                    </Col>
                    <Col span={12} className={cx('ant-card-action-second-col')}>
                    <p className={cx('alert-card-fonts')}>View Plan</p>
                    </Col>
                </Row>
            </Card>
    );
}

export default AlertCard;