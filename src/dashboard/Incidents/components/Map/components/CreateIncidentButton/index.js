import React from 'react';
import {Button,Icon} from 'antd';
import {Link} from 'react-router-dom';

import './styles.css'

export function CreateIncidentButton() {
  return (
    
      <Link to="/incidents/new" style={{color:'#fff'}}>
      <Button type="primary" >
        <Icon type="plus" /> New Incident{' '}
        </Button>
      </Link>
  );
}
