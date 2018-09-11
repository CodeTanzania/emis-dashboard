
import React from 'react';
import { Row, Col, Card, Modal, Divider } from 'antd';
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
        const cardStyles = {margin: '5vh 2.5vw 5vh 1.5vw', width: '28vw', height: '23vh', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)'};
        return(
            <Card
                className={cx('ant-card-custom-style')}
                 title={<AlertContents card={card} />}
                 extra={<span class='alert-card-fonts'>Floods</span>}
                 style={cardStyles}
                >
                    <Row>
                        <Col span={12} className={cx('alert-card-fonts-action-one')}  onClick={this.showModal}>
                        <div className={cx('alert-card-fonts-action')} >Read More</div>
                        </Col>
                        
                        <Col span={12}>
                        <div className={cx('alert-card-fonts-action')}>View Plan</div>
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