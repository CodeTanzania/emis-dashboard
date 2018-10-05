import * as Actions from '../actions';

describe('Plans:Actions', () => {
  it('should return fetch plans action', () => {
    expect(Actions.getPlans()).toEqual({
      type: Actions.PLANS_GET_START,
      meta: {
        page: 1,
      },
    });
  });

  it('should return fetch plan success action', () => {
    const plans = [];

    expect(Actions.getPlansSuccess(plans)).toEqual({
      type: Actions.PLANS_GET_SUCCESS,
      payload: {
        data: plans,
      },
      meta: {
        page: 1,
        total: 0,
      },
    });
  });

  it('should return fetch plan error action', () => {
    const error = new Error();

    expect(Actions.getPlansError(error)).toEqual({
      type: Actions.PLANS_GET_ERROR,
      payload: {
        data: error,
      },
      error: true,
    });
  });

  it('should return fetch plan actions action object', () => {
    const expectedAction = {
      type: Actions.PLAN_ACTIVITIES_GET_START,
      payload: {
        data: 1,
      },
    };

    expect(Actions.fetchPlanActivities(1)).toEqual(expectedAction);
  });
});
