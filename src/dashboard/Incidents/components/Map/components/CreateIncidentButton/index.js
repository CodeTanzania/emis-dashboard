import React from 'react';
import {Button,Icon} from 'antd';
import {Link} from 'react-router-dom';

import './styles.css'

export function CreateIncidentButton() {
  return (
    <Button type="primary" >
      <Link to="/incidents/new" style={{color:'#fff'}}>
        <Icon type="plus" /> New Incident{' '}
      </Link>{' '}
    </Button>
  );
}
