import React from 'react';
import className from 'classnames/bind';
import {  Card } from 'antd';

/*Loaded css */
import styles from '../styles.css'


const cx = className.bind(styles);
const { Meta } = Card;

const CardContent = ({ name, incidentCode, updatedAt }) => {
    return (
        <React.Fragment>
            <div justify="space-between">
                <h3 style={{ marginBottom: '0px' }}>{incidentCode}</h3>
                <p title={name} style={{ fontSize: '13px', color: '#909090' }}>{name}</p>
            </div>
            <p style={{ fontSize: '11px', color: '#909090' }}>
                Created on:
      {new Intl.DateTimeFormat('en-GB').format(updatedAt)}
            </p>
        </React.Fragment>
    )
}
const PhaseCard = () => {
    return (
        <div style={{
                width: '85%',
                margin: '20px auto',
                borderLeft: '6px solid #0092fd',
                }} >
            <Card>
                <Meta title={ <CardContent  name="floods" incidentCode = "0102Flood1"/> } />
            </Card>
            <Card className="explore">
                <a href="{incidents}"><h3 style={{ textAlign: 'center', color: '#909090', margin: '0'}}>Explore</h3></a>
            </Card>
            
        </div>
    );
}

export default PhaseCard;