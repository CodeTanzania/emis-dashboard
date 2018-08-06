import React from 'react';
import FiltersGroup from './group';

const data = {
  phases: [{ name: 'Mitigation' }, { name: 'Prepadness' }, { name: 'Response' }, { name: 'Recovery' }],
  types: [{ name: 'Mitigation' }, { name: 'Prepadness' }, { name: 'Response' }, { name: 'Recovery' }],
  roles: [{ name: 'Mitigation' }, { name: 'Prepadness' }, { name: 'Response' }, { name: 'Recovery' }],
  functions: [{ name: 'Mitigation' }, { name: 'Prepadness' }, { name: 'Response' }, { name: 'Recovery' }],
};
export default function Filters() {
  return (
    <div className="scrollable-content">
      <FiltersGroup header="Phases" data={data.phases} />
      <FiltersGroup header="Types" data={data.types} />
      <FiltersGroup header="Roles" data={data.roles} />
      <FiltersGroup header="Functions" data={data.functions} />
    </div>
  );
}
