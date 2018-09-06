
import React from 'react';
import { chunk, nth, take, last } from 'lodash';
import { Row, Col, Card, Icon} from 'antd';
import classnames from 'classnames';
import styles from './index.css';
import API from '../../../../services/API';

const cx = classnames.bind(styles);

function AlertContents(props) {
    const { card } = props;
    const {title, issuedAt, source, direction, createdAt} = card;

    return(
        <div>
            <h2>{title}</h2>
            <p>Created at: {createdAt} by {source}</p>
            <p>{direction}</p>
            <p>Probable duration: {issuedAt}</p>
        </div>
    );
}

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
                    <p>Read More</p>
                    </Col>
                    <Col span={12} className={cx('ant-card-action-second-col')}>
                    <p>View Plan</p>
                    </Col>
                </Row>
            </Card>
    );
}


class AlertsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {alerts: []};
    }

    componentDidMount () {
        console.log('component did mount called');
        API.getAlerts()
        .then(res => this.setState({alerts: res}));
    }

    splitArray = (arr, chunksCount) => {
        const arrays = chunk(arr, arr.length/chunksCount)
        if(arrays.length > chunksCount)  arrays[1] = [...nth(arrays,1), ...last(arrays)];
        return take(arrays, chunksCount);
          
    }

    showAlertCards = (cardsArray = []) => cardsArray.map(card => <AlertCard card={card}/>);
    
    render() {
        const alertChunks = this.splitArray(this.state.alerts, 3);
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

export default  AlertsList;







