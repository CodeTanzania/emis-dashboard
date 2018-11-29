import { List } from 'antd';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

/**
 * Activity single actor component
 *
 * @function
 * @name Actor
 *
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.abbreviation
 * @param {string} props.description
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
function Actor({ name, abbreviation, description }) {
  return (
    <p
      title={description}
      style={{ paddingLeft: 20 }}
    >{`${name} (${abbreviation})`}</p>
  );
}

/**
 * ActivityActors
 *
 * @function
 * @name ActivityActors
 *
 * @param {Object} props
 * @param {string} props.primary
 * @param {string} props.supportive
 * @returns {ReactComponent}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function ActivityActors({ primary, supportive }) {
  return (
    <Fragment>
      <h4 className="ActivityDetailsBodyHeader">Actors</h4>
      <h5 style={{ margin: '10px 0' }} title="Primary Responsible Role(s)">
        PRIMARY :
      </h5>
      <List
        style={{ display: 'inline' }}
        dataSource={primary}
        renderItem={actor => (
          <Actor
            name={actor.name}
            abbreviation={actor.abbreviation}
            description={actor.description}
          />
        )}
      />
      <h5 style={{ margin: '10px 0' }} title="Supportive Role(s)">
        SUPPORTIVE :
      </h5>
      <List
        style={{ display: 'inline' }}
        dataSource={supportive}
        renderItem={actor => (
          <Actor
            name={actor.name}
            abbreviation={actor.abbreviation}
            description={actor.description}
          />
        )}
      />
    </Fragment>
  );
}

ActivityActors.propTypes = {
  primary: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      abbreviation: PropTypes.string,
    })
  ),
  supportive: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      abbreviation: PropTypes.string,
    })
  ),
};

ActivityActors.defaultProps = {
  primary: [],
  supportive: [],
};

Actor.propTypes = {
  name: PropTypes.string.isRequired,
  abbreviation: PropTypes.string,
  description: PropTypes.string,
};

Actor.defaultProps = {
  abbreviation: 'N/A',
  description: 'N/A',
};
