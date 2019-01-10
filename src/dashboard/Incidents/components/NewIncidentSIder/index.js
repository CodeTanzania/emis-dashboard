import React from 'react';
import { withLeaflet } from 'react-leaflet';
import IncidentMapDraw from '../Map/components/IncidentMapDraw';
import IncidentForm from '../IncidentForm';
import './styles.css';

import IncidentBaseMap from '../Map/components/IncidentBaseMap';

function NewIncidentSider() {
  return (
    <IncidentBaseMap>
      <IncidentMapDraw />
      <div className="NewIncidentSider">
        <IncidentForm />
      </div>
    </IncidentBaseMap>
  );
}

export default withLeaflet(NewIncidentSider);
