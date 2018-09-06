
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { chunk, nth, take, last } from 'lodash';
import { Row, Col, Card, Icon} from 'antd';
import classnames from 'classnames';
import styles from './index.css';
import { triggerFetchAlerts } from '../../actions';
import { alertsSelector } from '../../selectors';
import AlertCard from './alertCard';

import API from '../../../../services/API';

const cx = classnames.bind(styles);

class AlertsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {alerts: []};
    }

    componentDidMount () {
        const {triggerFetchAlerts} = this.props;
        triggerFetchAlerts();
    }

    splitArray = (arr = [], chunksCount) => {
        const arrays = chunk(arr, arr.length/chunksCount)
        if(arrays.length > chunksCount)  arrays[1] = [...nth(arrays,1), ...last(arrays)];
        return take(arrays, chunksCount);
          
    }

    showAlertCards = (cardsArray = []) => cardsArray.map(card => <AlertCard card={card}/>);
    
    render() {
        const { alerts } = this.props;
        const alertChunks = this.splitArray(alerts, 3);
        console.log(alertChunks);
        return(
            <Row align="center" >
                {/* Start First Column with card for new alert */}
                <Col span={8} className={cx('alert-column')}>
                    <Card>
                            <Icon type="plus-circle" theme="filled" style={{ fontSize: '80px',  marginLeft: '45%'}} />
                            <h1 className={cx('plus-icon-text')}>New Alert</h1>
                    </Card>
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

const mapDispatchToProps = dispatch => ({
    triggerFetchAlerts: () => dispatch(triggerFetchAlerts()),
  });

  export default connect(
    mapStateToprops,
    mapDispatchToProps,
  )(AlertsList);







