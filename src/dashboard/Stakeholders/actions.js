/**
 * Action creators for contacts
 */
export const STORE_STAKEHOLDERS = 'STAKEHOLDERS:STORE_STAKEHOLDERS';
export const GET_STAKEHOLDERS = 'STAKEHOLDERS:GET_STAKEHOLDERS';

export const storeStakeHolders = stakeholders => ({ type: STORE_STAKEHOLDERS, stakeholders });
export const getStakeholders = () => ({ type: GET_STAKEHOLDERS });
