import React from 'react';
import FiltersGroup from './group';

const data = {
  phases: [{ name: 'Mitigation' }, { name: 'Preparedness' }, { name: 'Response' }, { name: 'Recovery' }],
  types: [{ name: 'Agency' }, { name: 'Committee' }, { name: 'Team' }, { name: 'Individual' }],
  roles: [{ name: 'Regional Commissioner' }, { name: 'Ward Officer' }, { name: 'Doctors' }, { name: 'Police' }],
  functions: [{ name: 'Evacuation' }, { name: 'Water and Utilities' }, { name: 'Medical Support' }, { name: 'Logistics' }],
};
export default function Filters() {
  return (
    <div className="content scrollable">
      <FiltersGroup header="Phases" data={data.phases} />
      <FiltersGroup header="Types" data={data.types} />
      <FiltersGroup header="Roles" data={data.roles} />
      <FiltersGroup header="Functions" data={data.functions} />
    </div>
  );
}
