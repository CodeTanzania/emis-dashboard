import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { triggerGetIncidents } from '../../actions';
import className from 'classnames/bind';
import { Row, Col, Layout, List } from 'antd';
import Phase from './components/phaseHeader';
import PhaseCard from './components/phaseCard'
/*Loaded css */
import styles from './styles.css'


const cx = className.bind(styles);
class IncidentPhase extends React.Component {

componentDidMount(){
    const { triggerGetIncidents } = this.props;
    triggerGetIncidents();
}
    render() {
        const { incidents } = this.props;
        return (
            <Layout className={cx('phaseLayout')}>
                <div >
                    <List>
                        <Row >
                            <Col span={6} className={cx('section')} >
                                <Phase title="Migation" count="25" />
                                <PhaseCard incidents={incidents} phase="Extra-terrestrial" />
                            </Col>
                            <Col span={6} className={cx('section')}>
                                <Phase title="Preparedness" count="22" />
                                <PhaseCard incidents={incidents} phase="Technological"/>
                            </Col>
                            <Col span={6} className={cx('section')}>
                                <Phase title="Response" count="16" />
                                <PhaseCard incidents={incidents} phase="Biological"/>
                            </Col>
                            <Col span={6} className={cx('section')}>
                                <Phase title="Recovery" count="15" />
                                <PhaseCard incidents={incidents} phase="Meteorological"/>
                            </Col>
                        </Row>
                    </List>
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = state => {
    return{
        incidents: state.incidents.data ? state.incidents.data : []
    }
}

const mapDispatchToProps = dispatch => {
    return {
    triggerGetIncidents: bindActionCreators(triggerGetIncidents, dispatch)
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(IncidentPhase)