import React from 'react';
import FiltersGroup from './group';


// fake data
const data = {
  phases: [{ name: 'Mitigation' }, { name: 'Preparedness' }, { name: 'Response' }, { name: 'Recovery' }],
  types: [{ name: 'Agency' }, { name: 'Committee' }, { name: 'Team' }, { name: 'Individual' }],
  roles: [{ name: 'Regional Commissioner' }, { name: 'Ward Officer' }, { name: 'Doctors' }, { name: 'Police' }],
  functions: [{ name: 'Evacuation' }, { name: 'Water and Utilities' }, { name: 'Medical Support' }, { name: 'Logistics' }],
};


/**
 * Render contact filters component
 *
 * @function
 * @name Filters
 *
 * @since 0.1.0
 * @version 0.1.0
 */
export default function Filters() {
  return (
    <div className="content scrollable">
      <FiltersGroup name="Phases" filters={data.phases} />
      <FiltersGroup name="Types" filters={data.types} />
      <FiltersGroup name="Roles" filters={data.roles} />
      <FiltersGroup name="Functions" filters={data.functions} />
    </div>
  );
}
