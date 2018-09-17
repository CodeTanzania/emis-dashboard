import React, { Fragment } from 'react';
import { Col, Row } from 'antd';
import Header from '../../common/components/Header';
import classNames from 'classnames/bind';

/* child components */
import IncidentFilter from './components/incidentFilter';

/*loaded css*/
import styles from '../styles.css';
const cx = classNames.bind(styles);

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

         <Row>
         </Row>
     </Fragment>
    )
 }

 export default Incidents;