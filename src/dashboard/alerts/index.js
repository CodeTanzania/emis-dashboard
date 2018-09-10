
import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { alertLoadingSelctor } from './selectors';
import { Row, Col, Spin, Divider, Icon } from 'antd';
import AlertFilters  from './components/AlertFilters';
import AlertsList from './components/AlertsList';
import { triggerFetchAlerts } from './actions';
import classnames from 'classnames';
import styles from './index.css';

const cx = classnames.bind(styles);


 class Alerts extends React.Component {

    constructor(props) {
        super(props);
    }
     
    componentDidMount () {
        const {triggerFetchAlerts} = this.props;
        triggerFetchAlerts();
    }

     render () {

        const { loading } = this.props;

        return(
            <div className={cx('alerts')}>
                <Row className={cx('alerts-heading')}>
                    <Col span={24}>
                    <div>Alerts</div>
                    </Col>
                </Row>
                <Row style={{margin: '15px 0px 0px 40px'}}>
                    <Col span={16} className={cx('filters-alerts')}>
                    <AlertFilters />
                    </Col>
                    <Col span={4} offset={4}>
                        <div class='map-export-text'>
                            <span  ><Icon type="global" theme="outlined" style={{fontSize: '32px'}} /> Map</span>
                            <span><Icon type="export" theme="outlined" style={{fontSize: '32px'}} /> Export</span>
                        </div>
                    </Col>
                </Row>
                <Divider />
                <Row>
                    <Col span={24}>
                    { loading ? <Spin spinning={loading} style={{margin: '300px 0px 0px 800px'}} size="large" /> : <AlertsList /> }
                    </Col>
                </Row>
            </div>
        );
     }
   
}

const mapStateToprops = createSelector(
    [
        alertLoadingSelctor
    ],
    loading => ({loading})
);

const mapDispatchToProps = dispatch => ({
    triggerFetchAlerts: () => dispatch(triggerFetchAlerts()),
  });

export default connect(
    mapStateToprops,
    mapDispatchToProps,
)(Alerts);



