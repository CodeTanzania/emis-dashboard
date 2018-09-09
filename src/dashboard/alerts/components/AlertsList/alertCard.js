
import React from 'react';
import { Row, Col, Card, Modal, Button } from 'antd';
import classnames from 'classnames';
import AlertContents from './alertContents';
import AlertDetails from '../AlertDetails';
import styles from './index.css';

const cx = classnames.bind(styles);


class AlertCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      }

      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
 
    render() {
        const { card } = this.props;
        return(
            <Card
                className={cx('ant-card-custom-style')}
                 title={<AlertContents card={card} />}
                 extra={<span>Flood</span>}
                >
                    <Row onClick={this.showModal}>
                        <Col span={12} className={cx('ant-card-action-first-col')}>
                        <p className={cx('alert-card-fonts')} >Read More</p>
                        </Col>
                        <Col span={12} className={cx('ant-card-action-second-col')}>
                        <p className={cx('alert-card-fonts')}>View Plan</p>
                        </Col>
                    </Row>
                    
                    <Modal
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    centered='true'
                    bodyStyle={{padding: '70px 45px 70px 45px', border: '1px solid'}}
                    footer={null}
                    width='1200px'
                    mask='false'
                    >
                    <AlertDetails card={card} />
                    </Modal>
                </Card>
        );
    }
}

export default AlertCard;