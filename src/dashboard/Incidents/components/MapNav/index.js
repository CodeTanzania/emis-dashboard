import React from 'react';
import { Button } from 'antd';
import './styles.css';

/**
 * Map Navigation  Layout component
 * this navigations layout will show 
 * different Map actions
 *
 * @function
 * @name MapNav
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function MapNav () {

    const onclickNewIncidentButton = (e) => {
        e.preventDefault();
        console.log('new incident button clicked');
    }

    return (
        <div className='MapNav'>
            <Button type='primary' onClick={onclickNewIncidentButton}>+ New Incident</Button>
        </div>
    );
}