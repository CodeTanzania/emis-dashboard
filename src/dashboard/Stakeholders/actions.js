/**
 * Action creators for contacts
 */
export const STORE_STAKEHOLDERS = 'STAKEHOLDERS:STORE_STAKEHOLDERS';
export const GET_STAKEHOLDERS = 'STAKEHOLDERS:GET_STAKEHOLDERS';
export const SEARCH_STAKEHOLDERS = 'STAKEHOLDERS:SEARCH_STAKEHOLDERS';
export const SELECTED_STAKEHOLDER = 'STAKEHOLDER_LIST:SELECTED_STAKEHOLDER';

export const storeStakeHolders = stakeholders => ({ type: STORE_STAKEHOLDERS, stakeholders });
export const searchStakeholders = searchText => ({ type: SEARCH_STAKEHOLDERS, searchText });
export const selectedStakeholder = stakeholder => ({ type: SELECTED_STAKEHOLDER, stakeholder });
export const getStakeholders = () => ({ type: GET_STAKEHOLDERS });
