import React, { Fragment } from 'react';
import Header from '../../common/components/Header';

/* child components */
import IncidentFilter from './components/incidentFilter';
import IncidentPhase from './components/incidentPhase';


/*loaded css*/

/**
 * Render incidents panel component which have all components in relation
 * to the icidents defined.
 *
 * @function
 * @name incidents
 *
 * @version 0.1.0
 * @since 0.1.0
 */

const Incidents = () => {
    return (
     <Fragment>
         <Header title="Incidents"/>
         <IncidentFilter />
         <div>
        <IncidentPhase />
        </div>
         
     </Fragment>
    )
 }

 export default Incidents;