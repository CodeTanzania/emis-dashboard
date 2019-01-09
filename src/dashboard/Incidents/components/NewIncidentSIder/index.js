import React from 'react';
import { withLeaflet } from 'react-leaflet';

import './styles.css';

import IncidentBaseMap from '../Map/components/IncidentBaseMap';

function NewIncidentSider() {
  return (
      <IncidentBaseMap>
      </IncidentBaseMap>
  );
}

export default withLeaflet(NewIncidentSider);