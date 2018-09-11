
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { chunk, nth, take, last } from 'lodash';
import { Row, Col, Card, Icon, Drawer } from 'antd';
import classnames from 'classnames';
import styles from './index.css';
import { alertsSelector } from '../../selectors';
import AlertCard from './alertCard';
import AlertForm from '../AlertForm';


const cx = classnames.bind(styles);





class AlertsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {alerts: [], visible: false };
    }

    showDrawer = () => {
        this.setState(
            { visible: true }
        )
    }

    onClose = () => {
        this.setState(
            { visible: false }
        )
    }


    splitArray = (arr = [], chunksCount) => {
        const arrays = chunk(arr, arr.length/chunksCount)
        if(arrays.length > chunksCount)  arrays[1] = [...nth(arrays,1), ...last(arrays)];
        return take(arrays, chunksCount);
          
    }

    showAlertCards = (cardsArray = []) => cardsArray.map(card => <AlertCard card={card}/>);
    
    render() {
        const cardStyles = {margin: '5vh 2.5px 5vh 1.5vw', width: '28vw', height: '23vh', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)'};
        const { alerts } = this.props;
        if(alerts.length > 1) this.toggle;
        const alertChunks = this.splitArray(alerts, 3);
        console.log(alertChunks);
        return(
                <Row align="center" >
                    {/* Start First Column with card for new alert */}
                    <Col span={8} className={cx('alert-column')}>
                        <Card onClick={this.showDrawer} style={cardStyles}>
                            <div>
                                <Icon type="plus-circle" theme="filled" style={{fontSize:'5vw', margin: '5vh 0 0 10.5vw'}}  /> <br/>
                                <span id='new-alert'>New Alert</span>
                            </div>
                        </Card>
                        <Drawer
                        width={900}
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                        >
                        <AlertForm />
                        </Drawer>
                        {this.showAlertCards(alertChunks[0])}
                    </Col>
                    {/* End First Column with card for new alert  */}

                    {/* Start Second column */}
                    <Col span={8} className={cx('alert-column')}>
                        {this.showAlertCards(alertChunks[1])}
                    </Col>
                    {/* End second Column */}

                    {/* Start Third Column */}
                    <Col span={8}>
                    {this.showAlertCards(alertChunks[2])}
                    </Col>
                    {/* End Third Column */}

                </Row>
        );
    }
}

const mapStateToprops = createSelector(
    [
      alertsSelector,
    ],
    alerts => ({ alerts }),
  );



  export default connect(
    mapStateToprops,
  )(AlertsList);







