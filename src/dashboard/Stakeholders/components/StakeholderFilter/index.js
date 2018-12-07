import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FiltersGroup from './components/FilterGroup';
import './styles.css';

/**
 * Render contact filters component
 *
 * @function
 * @name Filters
 *
 * @since 0.1.0
 * @version 0.1.0
 */
const StakeholderFilter = ({ filters }) => (
  <Fragment>
    <div className="stakeholderFilter">
      {filters.map(filter => (
        <FiltersGroup
          groupName={filter.group}
          filters={filter.data}
          key={filter.group}
        />
      ))}
    </div>
  </Fragment>
);

StakeholderFilter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  filters: state.stakeholders.filters,
});

export default connect(mapStateToProps)(StakeholderFilter);
