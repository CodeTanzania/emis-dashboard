

import { get } from 'lodash';

 const incidentsSelector = state => state && state.incidents && get(state, 'incidents.data');

export {
incidentsSelector
}
