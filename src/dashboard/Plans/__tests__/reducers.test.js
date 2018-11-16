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
        showPlanForm: false,
        total: 0,
        filters: {
          incidentTypes: [],
        },
      };
      expect(plans(undefined, {})).toEqual(expectedState);
    });

    it('should return previous state when given invalid action type', () => {
      const previousState = {};
      expect(
        plans(previousState, {
          type: null,
        })
      ).toEqual(previousState);
    });

    it('should handle GET_PLAN_START', () => {});

    it('should handle GET_PLAN_SUCCESS', () => {});

    it('should handle GET_PLAN_ERROR', () => {});
  });

  describe('selectedPlan', () => {
    it('should return default state when no initial state is provided', () => {
      expect(selectedPlan(undefined, {})).toBeNull();
    });

    it('should return previous state when given invalid action type', () => {
      const previousState = {
        name: 'test',
      };
      expect(
        selectedPlan(previousState, {
          type: null,
        })
      ).toEqual(previousState);
    });

    it('should handle SELECT_PLAN', () => {});
  });

  describe('planActivities', () => {
    it('should return default state when initial state is undefined', () => {
      expect(planActivities(undefined, {})).toEqual({
        Mitigation: [],
        Preparedness: [],
        Response: [],
        Recovery: [],
        showActivityForm: false,
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

    it('should handle GET_PLAN_ACTIVITIES_START', () => {});

    it('should handle GET_PLAN_ACTIVITIES_SUCCESS', () => {});

    it('should handle GET_PLAN_ACTIVITIES_ERROR', () => {});
  });

  describe('selectedPlanActivity', () => {
    it('should return default state when initial state is undefined', () => {
      expect(selectedPlanActivity(undefined, {})).toBeNull();
    });

    it('should return previous state when provided action is invalid', () => {
      const previousState = {
        test: 'test',
      };
      expect(selectedPlanActivity(previousState, {})).toEqual(previousState);
    });

    it('should handle SELECT_PLAN_ACTIVITY', () => {});
  });

  describe('planActivityProcedures', () => {
    it('should return default state when initial state is undefined', () => {
      const defaultState = {
        data: [],
        page: 1,
        total: 0,
        showProcedureForm: false,
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

    it('should handle GET_PLAN_ACTIVITY_PROCEDURES_START', () => {});

    it('should handle GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS', () => {});

    it('should handle GET_PLAN_ACTIVITY_PROCEDURES_ERROR', () => {});
  });

  describe('selectedPlanActivityProcedure', () => {
    it('should handle SELECT_PLAN_ACTIVITY_PROCEDURE', () => {});
  });
});
