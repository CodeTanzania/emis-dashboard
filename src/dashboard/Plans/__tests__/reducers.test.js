import merge from 'lodash/merge';
import * as ActionTypes from '../constants';
import {
  planActivities,
  planActivityProcedures,
  planActivityProcedureSchema,
  planActivitySchema,
  plans,
  planSchema,
  selectedPlan,
  selectedPlanActivity,
  selectedPlanActivityProcedure,
} from '../reducers';

describe('Plan:Reducers', () => {
  describe('planSchema', () => {
    it('should return default state when no initial state is provided', () => {
      expect(planSchema(undefined, {})).toBeNull();
    });

    it('should return previous state when given invalid action type', () => {
      const previousState = {};
      expect(
        planSchema(previousState, {
          type: null,
        })
      ).toEqual(previousState);
    });

    it(`should handle ${
      ActionTypes.SET_PLAN_SCHEMA
    } when previous state is null`, () => {
      const previousState = null;

      const action = {
        type: ActionTypes.SET_PLAN_SCHEMA,
        payload: {
          data: { type: 'Schema' },
        },
      };

      expect(planSchema(previousState, action)).toEqual(action.payload.data);
    });

    it(`should handle ${
      ActionTypes.SET_PLAN_SCHEMA
    } when previous state is not null`, () => {
      const previousState = { type: 'Test Schema' };

      const action = {
        type: ActionTypes.SET_PLAN_SCHEMA,
        payload: {
          data: { type: 'Schema' },
        },
      };

      expect(planSchema(previousState, action)).toEqual(action.payload.data);
    });
  });

  describe('planActivitySchema', () => {
    it('should return default state when no initial state is provided', () => {
      expect(planSchema(undefined, {})).toBeNull();
    });

    it('should return previous state when given invalid action type', () => {
      const previousState = {};
      expect(
        planActivitySchema(previousState, {
          type: null,
        })
      ).toEqual(previousState);
    });

    it(`should handle ${
      ActionTypes.SET_PLAN_ACTIVITY_SCHEMA
    } when previous state is null`, () => {
      const previousState = null;

      const action = {
        type: ActionTypes.SET_PLAN_ACTIVITY_SCHEMA,
        payload: {
          data: { type: 'Schema' },
        },
      };

      expect(planActivitySchema(previousState, action)).toEqual(
        action.payload.data
      );
    });

    it(`should handle ${
      ActionTypes.SET_PLAN_ACTIVITY_SCHEMA
    } when previous state is not null`, () => {
      const previousState = { type: 'Test Schema' };

      const action = {
        type: ActionTypes.SET_PLAN_ACTIVITY_SCHEMA,
        payload: {
          data: { type: 'Schema' },
        },
      };

      expect(planActivitySchema(previousState, action)).toEqual(
        action.payload.data
      );
    });
  });

  describe('planActivityProcedureSchema', () => {
    it('should return default state when no initial state is provided', () => {
      expect(planActivityProcedureSchema(undefined, {})).toBeNull();
    });

    it('should return previous state when given invalid action type', () => {
      const previousState = {};
      expect(
        planActivityProcedureSchema(previousState, {
          type: null,
        })
      ).toEqual(previousState);
    });

    it(`should handle ${
      ActionTypes.SET_PLAN_ACTIVITY_PROCEDURE_SCHEMA
    } when previous state is null`, () => {
      const previousState = null;

      const action = {
        type: ActionTypes.SET_PLAN_ACTIVITY_PROCEDURE_SCHEMA,
        payload: {
          data: { type: 'Schema' },
        },
      };

      expect(planActivityProcedureSchema(previousState, action)).toEqual(
        action.payload.data
      );
    });

    it(`should handle ${
      ActionTypes.SET_PLAN_ACTIVITY_PROCEDURE_SCHEMA
    } when previous state is not null`, () => {
      const previousState = { type: 'Test Schema' };

      const action = {
        type: ActionTypes.SET_PLAN_ACTIVITY_PROCEDURE_SCHEMA,
        payload: {
          data: { type: 'Schema' },
        },
      };

      expect(planActivityProcedureSchema(previousState, action)).toEqual(
        action.payload.data
      );
    });
  });

  describe('plans', () => {
    let previousState = null;

    beforeEach(() => {
      /* create initial state for plans reducer */
      previousState = {
        data: [],
        page: 1,
        total: 0,
        showPlanForm: false,
        loading: false,
        posting: false,
        filters: {
          incidentTypes: [],
          owners: [],
          boundaries: [],
        },
        error: null,
      };
    });

    it('should return default state when no initial state is provided', () => {
      expect(plans(undefined, {})).toEqual(previousState);
    });

    it('should return previous state when given invalid action type', () => {
      expect(
        plans(previousState, {
          type: null,
        })
      ).toEqual(previousState);
    });

    it(`should handle ${ActionTypes.GET_PLANS_START}`, () => {
      const nextState = {
        ...previousState,
        loading: true,
      };
      expect(
        plans(previousState, { type: ActionTypes.GET_PLANS_START })
      ).toEqual(nextState);
    });

    it(`should handle ${ActionTypes.GET_PLANS_SUCCESS}`, () => {
      const action = {
        type: ActionTypes.GET_PLANS_SUCCESS,
        payload: {
          data: [{ name: 'Floods', incidentType: 'Hurricane' }],
        },
        meta: {
          page: 2,
          total: 200,
        },
      };

      const nextState = {
        ...previousState,
        data: [...action.payload.data],
        page: action.meta.page,
        total: action.meta.total,
      };

      expect(plans(previousState, action)).toEqual(nextState);
    });

    it(`should handle ${ActionTypes.GET_PLANS_ERROR}`, () => {
      const error = {
        status: 404,
        code: 404,
        name: 'Error',
        message: 'Not Found',
        developerMessage: 'Not Found',
        userMessage: 'Not Found',
        error: 'Error',
        error_description: 'Not Found',
      };

      const action = {
        type: ActionTypes.GET_PLANS_ERROR,
        payload: { data: error },
        error: true,
      };

      const expectedState = {
        ...previousState,
        error: action.payload.data,
      };

      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${ActionTypes.OPEN_PLAN_FORM}`, () => {
      const action = { type: ActionTypes.OPEN_PLAN_FORM };
      const expectedState = { ...previousState, showPlanForm: true };

      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${ActionTypes.POST_PLAN_START}`, () => {
      const action = { type: ActionTypes.POST_PLAN_START };
      const expectedState = { ...previousState, posting: true };

      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${ActionTypes.POST_PLAN_SUCCESS}`, () => {
      const action = { type: ActionTypes.POST_PLAN_SUCCESS };
      const expectedState = {
        ...previousState,
        posting: false,
        showPlanForm: false,
      };

      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${ActionTypes.POST_PLAN_ERROR}`, () => {
      const error = {
        status: 404,
        code: 404,
        name: 'Error',
        message: 'Not Found',
        developerMessage: 'Not Found',
        userMessage: 'Not Found',
        error: 'Error',
        error_description: 'Not Found',
      };

      const action = {
        type: ActionTypes.POST_PLAN_ERROR,
        payload: { data: error },
      };
      const expectedState = {
        ...previousState,
        posting: false,
        error: action.payload.data,
      };

      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${ActionTypes.PUT_PLAN_START}`, () => {
      const action = { type: ActionTypes.PUT_PLAN_START };
      const expectedState = {
        ...previousState,
        posting: true,
      };

      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${ActionTypes.PUT_PLAN_SUCCESS}`, () => {
      const action = { type: ActionTypes.PUT_PLAN_SUCCESS };
      previousState = { ...previousState, posting: true, showPlanForm: true };
      const expectedState = {
        ...previousState,
        posting: false,
        showPlanForm: false,
      };

      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${ActionTypes.PUT_PLAN_ERROR}`, () => {
      previousState = { ...previousState, showPlanForm: true };
      const error = {
        status: 404,
        code: 404,
        name: 'Error',
        message: 'Not Found',
        developerMessage: 'Not Found',
        userMessage: 'Not Found',
        error: 'Error',
        error_description: 'Not Found',
      };

      const action = {
        type: ActionTypes.PUT_PLAN_ERROR,
        payload: { data: error },
        error: true,
      };

      const expectedState = {
        ...previousState,
        posting: false,
        error,
      };

      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${ActionTypes.CLOSE_PLAN_FORM}`, () => {
      const action = { type: ActionTypes.CLOSE_PLAN_FORM };
      previousState = { ...previousState, showPlanForm: true };
      const expectedState = { ...previousState, showPlanForm: false };

      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${
      ActionTypes.UPDATE_PLAN_FILTERS
    } when no filters set`, () => {
      const action = {
        type: ActionTypes.UPDATE_PLAN_FILTERS,
        payload: { data: { incidentTypes: ['deddeed'] } },
      };

      const expectedState = {
        ...previousState,
        filters: merge({}, previousState.filters, action.payload.data),
      };
      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${
      ActionTypes.UPDATE_PLAN_FILTERS
    } when filters are set`, () => {
      previousState = merge(previousState, {
        filters: { incidentTypes: ['dedddd'] },
      });

      const action = {
        type: ActionTypes.UPDATE_PLAN_FILTERS,
        payload: { data: { owners: ['deddeed'] } },
      };

      const expectedState = {
        ...previousState,
        filters: merge({}, previousState.filters, action.payload.data),
      };
      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${
      ActionTypes.RESET_PLAN_FILTERS
    } when a single filter is active`, () => {
      previousState = merge(previousState, {
        filters: { incidentTypes: ['dedddd'], owners: ['cdddedd'] },
      });

      const action = {
        type: ActionTypes.RESET_PLAN_FILTERS,
        payload: { data: 'owners' },
      };

      const filters = Object.assign({}, previousState.filters, {
        [action.payload.data]: [],
      });

      const expectedState = Object.assign({}, previousState, { filters });

      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${
      ActionTypes.RESET_PLAN_FILTERS
    } when a multiple filters are active`, () => {
      previousState = merge(previousState, {
        filters: { incidentTypes: ['dedddd'], owners: ['cdddedd'] },
      });

      const action = {
        type: ActionTypes.RESET_PLAN_FILTERS,
        payload: { data: 'owners' },
      };
      const filters = Object.assign({}, previousState.filters, {
        [action.payload.data]: [],
      });

      const expectedState = Object.assign({}, previousState, { filters });

      expect(plans(previousState, action)).toEqual(expectedState);
    });
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

    it(`should handle ${
      ActionTypes.SELECT_PLAN
    } when previous state is null`, () => {
      const previousState = null;
      const action = {
        type: ActionTypes.SELECT_PLAN,
        payload: {
          data: { name: 'Flood' },
        },
      };

      expect(selectedPlan(previousState, action)).toEqual(action.payload.data);
    });

    it(`should handle ${
      ActionTypes.SELECT_PLAN
    } when previous state is not null`, () => {
      const previousState = { name: 'Earthquake', family: ['Natural'] };
      const action = {
        type: ActionTypes.SELECT_PLAN,
        payload: {
          data: { name: 'Flood' },
        },
      };
      expect(selectedPlan(previousState, action)).toEqual(action.payload.data);
    });
  });

  describe('planActivities', () => {
    let previousState = null;

    beforeEach(() => {
      previousState = {
        Mitigation: { list: [] },
        Preparedness: { list: [] },
        Response: { list: [] },
        Recovery: { list: [] },
        list: [],
        page: 1,
        total: 0,
        showActivityForm: false,
        loading: false,
        posting: false,
        error: null,
      };
    });

    it('should return default state when initial state is undefined', () => {
      expect(planActivities(undefined, {})).toEqual(previousState);
    });

    it('should return previous state when provided action is invalid', () => {
      expect(planActivities(previousState, {})).toEqual(previousState);
    });

    it(`should handle ${ActionTypes.GET_PLAN_ACTIVITIES_START}`, () => {
      const expectedState = { ...previousState, loading: true };
      const action = {
        type: ActionTypes.GET_PLAN_ACTIVITIES_START,
      };
      expect(planActivities(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${ActionTypes.GET_PLAN_ACTIVITIES_SUCCESS}`, () => {
      const action = {
        type: ActionTypes.GET_PLAN_ACTIVITIES_SUCCESS,
        payload: {
          data: [{ name: 'Test Name' }],
        },
        meta: {
          page: 1,
          total: 200,
        },
      };

      const expectedState = {
        ...previousState,
        list: action.payload.data,
        loading: false,
      };

      expect(planActivities(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${ActionTypes.GET_PLAN_PHASE_ACTIVITIES_START}`, () => {
      const action = {
        type: ActionTypes.GET_PLAN_PHASE_ACTIVITIES_START,
        payload: {
          data: { phase: 'Mitigation' },
        },
      };

      const expectedMitigationState = {
        ...previousState,
        Mitigation: { loading: true },
      };

      expect(planActivities(previousState, action)).toEqual(
        expectedMitigationState
      );
    });

    it(`should handle ${ActionTypes.GET_PLAN_ACTIVITIES_ERROR}`, () => {
      const error = {
        status: 404,
        code: 404,
        name: 'Error',
        message: 'Not Found',
        developerMessage: 'Not Found',
        userMessage: 'Not Found',
        error: 'Error',
        error_description: 'Not Found',
      };

      const action = {
        type: ActionTypes.GET_PLAN_ACTIVITIES_ERROR,
        payload: {
          data: error,
        },
        error: true,
      };

      const expectedState = {
        ...previousState,
        error: action.payload.data,
        loading: false,
      };

      expect(planActivities(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${ActionTypes.POST_PLAN_ACTIVITY_START}`, () => {
      const action = { type: ActionTypes.POST_PLAN_ACTIVITY_START };
      const expectedState = { ...previousState, posting: true };

      expect(planActivities(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${ActionTypes.POST_PLAN_ACTIVITY_SUCCESS}`, () => {
      const action = { type: ActionTypes.POST_PLAN_ACTIVITY_SUCCESS };
      const expectedState = {
        ...previousState,
        posting: false,
        showActivityForm: false,
      };

      expect(planActivities(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${ActionTypes.POST_PLAN_ACTIVITY_ERROR}`, () => {
      const error = {
        status: 404,
        code: 404,
        name: 'Error',
        message: 'Not Found',
        developerMessage: 'Not Found',
        userMessage: 'Not Found',
        error: 'Error',
        error_description: 'Not Found',
      };

      const action = {
        type: ActionTypes.POST_PLAN_ACTIVITY_ERROR,
        payload: { data: error },
        error: true,
      };

      const expectedState = {
        ...previousState,
        error: action.payload.data,
        posting: false,
      };

      expect(planActivities(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${ActionTypes.PUT_PLAN_ACTIVITY_START}`, () => {
      const action = { type: ActionTypes.PUT_PLAN_ACTIVITY_START };
      const expectedState = {
        ...previousState,
        posting: true,
      };

      expect(planActivities(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${ActionTypes.PUT_PLAN_ACTIVITY_SUCCESS}`, () => {
      const action = { type: ActionTypes.PUT_PLAN_ACTIVITY_SUCCESS };
      previousState = { ...previousState, posting: true };
      const expectedState = {
        ...previousState,
        posting: false,
        showActivityForm: false,
      };

      expect(planActivities(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${ActionTypes.PUT_PLAN_ACTIVITY_ERROR}`, () => {
      previousState = { ...previousState, showActivityForm: true };
      const error = {
        status: 404,
        code: 404,
        name: 'Error',
        message: 'Not Found',
        developerMessage: 'Not Found',
        userMessage: 'Not Found',
        error: 'Error',
        error_description: 'Not Found',
      };

      const action = {
        type: ActionTypes.PUT_PLAN_ACTIVITY_ERROR,
        payload: { data: error },
      };

      const expectedState = {
        ...previousState,
        posting: false,
        error,
      };

      expect(planActivities(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${ActionTypes.OPEN_PLAN_ACTIVITY_FORM}`, () => {
      const action = { type: ActionTypes.OPEN_PLAN_ACTIVITY_FORM };
      const expectedState = { ...previousState, showActivityForm: true };

      expect(planActivities(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${ActionTypes.CLOSE_PLAN_ACTIVITY_FORM}`, () => {
      const action = { type: ActionTypes.CLOSE_PLAN_ACTIVITY_FORM };
      const expectedState = { ...previousState, showActivityForm: false };

      expect(planActivities(previousState, action)).toEqual(expectedState);
    });
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

    it(`should handle ${
      ActionTypes.SELECT_PLAN_ACTIVITY
    } when previous state is null`, () => {
      const action = {
        type: ActionTypes.SELECT_PLAN_ACTIVITY,
        payload: { data: { name: 'Flood' } },
      };
      const previousState = null;
      const expectedState = action.payload.data;
      expect(selectedPlanActivity(previousState, action)).toEqual(
        expectedState
      );
    });

    it(`should handle ${
      ActionTypes.SELECT_PLAN_ACTIVITY
    } when previous state is not null`, () => {
      const action = {
        type: ActionTypes.SELECT_PLAN_ACTIVITY,
        payload: { data: { name: 'Flood' } },
      };
      const previousState = { name: 'CleanUp' };
      const expectedState = action.payload.data;
      expect(selectedPlanActivity(previousState, action)).toEqual(
        expectedState
      );
    });
  });

  describe('planActivityProcedures', () => {
    let previousState = null;

    beforeEach(() => {
      previousState = {
        data: [],
        page: 1,
        total: 0,
        showProcedureForm: false,
        loading: false,
        posting: false,
        error: null,
      };
    });

    it('should return default state when initial state is undefined', () => {
      expect(planActivityProcedures(undefined, {})).toEqual(previousState);
    });

    it('should return previous state when provided action is invalid', () => {
      expect(planActivityProcedures(previousState, {})).toEqual(previousState);
    });

    it(`should handle ${
      ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_START
    }`, () => {
      const action = { type: ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_START };
      const expectedState = { ...previousState, loading: true };

      expect(planActivityProcedures(previousState, action)).toEqual(
        expectedState
      );
    });

    it(`should handle ${
      ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS
    }`, () => {
      const action = {
        type: ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS,
        payload: {
          data: [{ name: 'Clean this drain' }],
        },
        meta: { page: 1, total: 200 },
      };

      previousState = { ...previousState, loading: true };

      const expectedState = {
        ...previousState,
        data: action.payload.data,
        page: action.meta.page,
        total: action.meta.total,
        loading: false,
      };

      expect(planActivityProcedures(previousState, action)).toEqual(
        expectedState
      );
    });

    it(`should handle ${
      ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_ERROR
    }`, () => {
      const action = {
        type: ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_ERROR,
        payload: {
          data: [{ name: 'Clean this drain' }],
        },
        meta: { page: 1, total: 200 },
      };

      previousState = { ...previousState, loading: true };

      const expectedState = {
        ...previousState,
        loading: false,
        error: action.payload.data,
      };

      expect(planActivityProcedures(previousState, action)).toEqual(
        expectedState
      );
    });

    it(`should handle ${
      ActionTypes.POST_PLAN_ACTIVITY_PROCEDURE_START
    }`, () => {
      const action = {
        type: ActionTypes.POST_PLAN_ACTIVITY_PROCEDURE_START,
      };

      const expectedState = { ...previousState, posting: true };

      expect(planActivityProcedures(previousState, action)).toEqual(
        expectedState
      );
    });

    it(`should handle ${
      ActionTypes.POST_PLAN_ACTIVITY_PROCEDURE_SUCCESS
    }`, () => {
      const action = {
        type: ActionTypes.POST_PLAN_ACTIVITY_PROCEDURE_SUCCESS,
      };

      previousState = { ...previousState, posting: true };

      const expectedState = { ...previousState, posting: false };

      expect(planActivityProcedures(previousState, action)).toEqual(
        expectedState
      );
    });

    it(`should handle ${
      ActionTypes.POST_PLAN_ACTIVITY_PROCEDURE_ERROR
    }`, () => {
      const error = {
        status: 404,
        code: 404,
        name: 'Error',
        message: 'Not Found',
        developerMessage: 'Not Found',
        userMessage: 'Not Found',
        error: 'Error',
        error_description: 'Not Found',
      };

      const action = {
        type: ActionTypes.POST_PLAN_ACTIVITY_PROCEDURE_ERROR,
        payload: { data: error },
        error: true,
      };

      previousState = { ...previousState, posting: true };

      const expectedState = {
        ...previousState,
        posting: false,
        error: action.payload.data,
      };

      expect(planActivityProcedures(previousState, action)).toEqual(
        expectedState
      );
    });

    it(`should handle ${ActionTypes.PUT_PLAN_ACTIVITY_PROCEDURE_START}`, () => {
      const action = { type: ActionTypes.PUT_PLAN_ACTIVITY_PROCEDURE_START };
      const expectedState = {
        ...previousState,
        posting: true,
      };

      expect(planActivityProcedures(previousState, action)).toEqual(
        expectedState
      );
    });

    it(`should handle ${
      ActionTypes.PUT_PLAN_ACTIVITY_PROCEDURE_SUCCESS
    }`, () => {
      const action = { type: ActionTypes.PUT_PLAN_ACTIVITY_PROCEDURE_SUCCESS };
      previousState = {
        ...previousState,
        posting: true,
        showProcedureForm: true,
      };
      const expectedState = {
        ...previousState,
        posting: false,
        showProcedureForm: false,
      };

      expect(planActivityProcedures(previousState, action)).toEqual(
        expectedState
      );
    });

    it(`should handle ${ActionTypes.PUT_PLAN_ACTIVITY_PROCEDURE_ERROR}`, () => {
      const error = {
        status: 404,
        code: 404,
        name: 'Error',
        message: 'Not Found',
        developerMessage: 'Not Found',
        userMessage: 'Not Found',
        error: 'Error',
        error_description: 'Not Found',
      };

      const action = {
        type: ActionTypes.PUT_PLAN_ACTIVITY_PROCEDURE_ERROR,
        payload: { data: error },
        error: true,
      };

      previousState = {
        ...previousState,
        posting: true,
        showProcedureForm: true,
      };

      const expectedState = {
        ...previousState,
        posting: false,
        error,
      };

      expect(planActivityProcedures(previousState, action)).toEqual(
        expectedState
      );
    });

    it(`should handle ${ActionTypes.OPEN_PLAN_ACTIVITY_PROCEDURE_FORM}`, () => {
      const action = { type: ActionTypes.OPEN_PLAN_ACTIVITY_PROCEDURE_FORM };
      const expectedState = {
        ...previousState,
        showProcedureForm: true,
      };

      expect(planActivityProcedures(previousState, action)).toEqual(
        expectedState
      );
    });

    it(`should handle ${
      ActionTypes.CLOSE_PLAN_ACTIVITY_PROCEDURE_FORM
    }`, () => {
      const action = { type: ActionTypes.CLOSE_PLAN_ACTIVITY_PROCEDURE_FORM };
      previousState = { ...previousState, showProcedureForm: true };
      const expectedState = {
        ...previousState,
        showProcedureForm: false,
      };

      expect(planActivityProcedures(previousState, action)).toEqual(
        expectedState
      );
    });
  });

  describe('selectedPlanActivityProcedure', () => {
    it('should return default state when initial state is undefined', () => {
      expect(selectedPlanActivityProcedure(undefined, {})).toBeNull();
    });

    it('should return previous state when provided action is invalid', () => {
      const previousState = { name: 'Test' };
      expect(selectedPlanActivityProcedure(previousState, {})).toEqual(
        previousState
      );
    });

    it(`should handle ${
      ActionTypes.SELECT_PLAN_ACTIVITY_PROCEDURE
    } when previous state is null`, () => {
      const action = {
        type: ActionTypes.SELECT_PLAN_ACTIVITY_PROCEDURE,
        payload: { data: { name: 'Test' } },
      };

      expect(selectedPlanActivityProcedure(null, action)).toEqual(
        action.payload.data
      );
    });

    it(`should handle ${
      ActionTypes.SELECT_PLAN_ACTIVITY_PROCEDURE
    } when previous state is not null`, () => {
      const action = {
        type: ActionTypes.SELECT_PLAN_ACTIVITY_PROCEDURE,
        payload: { data: { name: 'Test' } },
      };
      const previousState = { name: 'CleanUp', age: 10 };

      expect(selectedPlanActivityProcedure(previousState, action)).toEqual(
        action.payload.data
      );
    });
  });
});
