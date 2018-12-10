/**
 *
 * -----------------------------------------------------------------
 * Helpers functions to assist on redux reducers
 * and actions. These helps the redux action and reducer to
 * stay clean and also enable helpers to be testable
 * -----------------------------------------------------------------
 */

/**
 * Build UI filters by adding selected property to each filter
 * to keep track of it's state.
 * @param {Object[]} filters - Stakeholder filters
 * @param {String} filters[].name - The name of the stakeholder filter
 * @param {String[]} filters[].data - The list of the filters
 */
export const buildUIFilters = filters =>
  filters.map(filter => {
    const data = filter.data.map(item => ({ name: item, selected: false }));
    return { ...filter, data };
  });

/**
 * Update filter item with selected status
 * @param {Object[]} filters
 * @param {string} filterGroup - The group updated filter belong
 * @param {string} filterName - Updated filter
 * @param {boolean} selected - Update selected status
 */
export const updateFilterItem = (filters, filterGroup, filterName, selected) =>
  filters.map(filter => {
    if (filter.group !== filterGroup) {
      // It's not filter group we care about
      return filter;
    }
    const filterItems = filter.data.map(item =>
      item.name === filterName ? { ...item, selected } : item
    );
    return {
      ...filter,
      data: filterItems,
    };
  });

/**
 * Set all filters to original selected state
 * @param {Object[]} filters - Stakeholder filters
 */
export const resetFilters = filters =>
  filters.map(filter => {
    const filterItems = filter.data.map(item => ({ ...item, selected: false }));
    return {
      ...filter,
      data: filterItems,
    };
  });

/**
 * It takes stakeholders UI filters,
 * extract selected filters and format them ready to be utilized
 * by the API
 * @param {Object[]} filters - Stakeholder filters
 * @param {string} filters[].name - Filter category name
 * @param {Object[]} filters.data - Filter list
 */
export const extractSelectedFilters = filters => {
  const selectedFilters = filters.map(filter => {
    // iterate filter group
    const selected = filter.data.filter(item => item.selected); // selected filters
    return {
      group: filter.group,
      selected: [...selected.map(item => item.name)], // normalize selected filters
    };
  });
  // return only filters with selected values
  return selectedFilters.filter(filter => filter.selected.length);
};
