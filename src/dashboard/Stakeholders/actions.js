/**
 * Action creators for contacts
 */
export const STORE_STAKEHOLDERS = 'STAKEHOLDERS:STORE_STAKEHOLDERS';
export const GET_STAKEHOLDERS = 'STAKEHOLDERS:GET_STAKEHOLDERS';
export const SEARCH_STAKEHOLDERS = 'STAKEHOLDERS:SEARCH_STAKEHOLDERS';

export const storeStakeHolders = stakeholders => ({ type: STORE_STAKEHOLDERS, stakeholders });
export const searchStakeholders = searchText => ({ type: SEARCH_STAKEHOLDERS, searchText });
export const getStakeholders = () => ({ type: GET_STAKEHOLDERS });
