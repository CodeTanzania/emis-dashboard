import * as Actions from '../actions';

describe('Plans', () => {
  describe('Plans:Actions', () => {
    it('should return fetch plans action', () => {
      expect(Actions.getPlans()).toEqual({
        type: Actions.GET_PLANS_START,
      });
    });

    it('should return fetch plan success action', () => {
      const plans = [];

      expect(Actions.getPlansSuccess(plans)).toEqual({
        type: Actions.GET_PLANS_SUCCESS,
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
        type: Actions.GET_PLANS_ERROR,
        payload: {
          data: error,
        },
        error: true,
      });
    });
  });

  describe('Activities:Actions', () => {
    it('should return get activities action', () => {
      expect(Actions.getPlanActivities()).toEqual({
        type: Actions.GET_PLAN_ACTIVITIES_START,
      });
    });

    it('should return get activities success action', () => {
      const activities = [];

      expect(Actions.getPlanActivitiesSuccess(activities, 1, 200)).toEqual({
        type: Actions.GET_PLAN_ACTIVITIES_SUCCESS,
        payload: {
          data: activities,
        },
        meta: {
          page: 1,
          total: 200,
        },
      });
    });

    it('should return get activities error action', () => {
      const error = new Error();

      expect(Actions.getPlanActivitiesError(error)).toEqual({
        type: Actions.GET_PLAN_ACTIVITIES_ERROR,
        payload: {
          data: error,
        },
        error: true,
      });
    });
  });
});
