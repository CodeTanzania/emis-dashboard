import { LeafletConsumer } from 'react-leaflet';
import React from 'react';
import DrawSupport from '../DrawSupport';

function MapControls() {
  return (
    <LeafletConsumer>
      {context => <DrawSupport map={context.map} />}
    </LeafletConsumer>
  );
}

export default MapControls;
