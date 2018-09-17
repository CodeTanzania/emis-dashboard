import React from 'react';
import className from 'classnames/bind';
import {  Row, Col, Layout, List } from 'antd';
import Phase  from './components/phaseHeader';
import PhaseCard from './components/phaseCard'
/*Loaded css */
import styles from './styles.css'


const cx = className.bind(styles);

const IncidentPhase = () => {
    return (
        <Layout className={cx('phaseLayout')}>
                <div >
                    <List>
                        <Row >
                            <Col span={6} className={cx('section')} >
                                <Phase title="Migation" count="25" />
                                <PhaseCard />
                            </Col>
                            <Col span={ 6 } className={cx('section')}>
                            <Phase title="Preparedness" count="22" />
                            <PhaseCard />
                            </Col>
                            <Col span={6} className={cx('section')}>
                            <Phase title="Response" count="16" />
                            <PhaseCard />
                            </Col>
                            <Col span={6} className={cx('section')}>
                            <Phase title="Recovery" count="15" />
                            <PhaseCard />
                            <PhaseCard />

                            </Col>
                        </Row>
                    </List>
                </div>
        </Layout>
    )
}

export default IncidentPhase;