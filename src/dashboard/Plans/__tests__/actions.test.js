import * as Actions from '../actions';

describe('Plans:Actions', () => {
  it('should return fetch plans action object', () => {
    expect(Actions.fetchPlans()).toEqual({ type: Actions.FETCH_PLANS });
  });

  it('should return fetch plan actions action object', () => {
    const expectedAction = {
      type: Actions.FETCH_PLAN_ACTIONS,
      payload: {
        planId: 1,
      },
    };

    expect(Actions.fetchPlanActions(1)).toEqual(expectedAction);
  });
});
