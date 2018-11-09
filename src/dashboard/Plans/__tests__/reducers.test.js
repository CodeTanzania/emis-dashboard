import {
  planActivities,
  planActivityProcedures,
  plans,
  selectedPlan,
  selectedPlanActivity,
} from '../reducers';

describe('Plan:Reducers', () => {
  describe('plans', () => {
    it('should return default state when no initial state is provided', () => {
      const expectedState = {
        data: [],
        loading: false,
        page: 1,
        posting: false,
        total: 0,
      };
      expect(plans(undefined, {})).toEqual(expectedState);
    });

    it('should return previous state when given invalid action type', () => {
      const previousState = {};
      expect(plans(previousState, { type: null })).toEqual(previousState);
    });
  });

  describe('selectedPlan', () => {
    it('should return default state when no initial state is provided', () => {
      expect(selectedPlan(undefined, {})).toBeNull();
    });

    it('should return previous state when given invalid action type', () => {
      const previousState = { name: 'test' };
      expect(selectedPlan(previousState, { type: null })).toEqual(
        previousState
      );
    });
  });

  describe('planActivities', () => {
    it('should return default state when initial state is undefined', () => {
      expect(planActivities(undefined, {})).toEqual({
        Mitigation: [],
        Preparedness: [],
        Response: [],
        Recovery: [],
        page: 1,
        total: 0,
        loading: false,
        posting: false,
      });
    });

    it('should return previous state when provided action is invalid', () => {
      const previousState = {
        Mitigation: [],
        Preparedness: [],
        Response: [],
        Recovery: [],
        page: 1,
        total: 2,
        loading: true,
      };
      expect(planActivities(previousState, {})).toEqual(previousState);
    });
  });

  describe('selectedPlanActivity', () => {
    it('should return default state when initial state is undefined', () => {
      expect(selectedPlanActivity(undefined, {})).toBeNull();
    });

    it('should return previous state when provided action is invalid', () => {
      const previousState = { test: 'test' };
      expect(selectedPlanActivity(previousState, {})).toEqual(previousState);
    });
  });

  describe('planActivityProcedures', () => {
    it('should return default state when initial state is undefined', () => {
      const defaultState = {
        data: [],
        page: 1,
        total: 0,
        loading: false,
        posting: false,
      };
      expect(planActivityProcedures(undefined, {})).toEqual(defaultState);
    });

    it('should return previous state when provided action is invalid', () => {
      const previousState = {
        data: [],
        page: 1,
        total: 0,
        loading: true,
      };
      expect(planActivityProcedures(previousState, {})).toEqual(previousState);
    });
  });
});
