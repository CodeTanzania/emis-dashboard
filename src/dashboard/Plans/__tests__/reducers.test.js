import merge from 'lodash/merge';
import * as Actions from '../actions';
import {
  planActivities,
  planActivityProcedures,
  plans,
  selectedPlan,
  selectedPlanActivity,
  selectedPlanActivityProcedure,
} from '../reducers';

describe('Plan:Reducers', () => {
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

    it(`should handle ${Actions.GET_PLANS_START}`, () => {
      const nextState = {
        ...previousState,
        loading: true,
      };
      expect(plans(previousState, { type: Actions.GET_PLANS_START })).toEqual(
        nextState
      );
    });

    it(`should handle ${Actions.GET_PLANS_SUCCESS}`, () => {
      const action = {
        type: Actions.GET_PLANS_SUCCESS,
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

    it(`should handle ${Actions.GET_PLANS_ERROR}`, () => {
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
        type: Actions.GET_PLANS_ERROR,
        payload: { data: error },
        error: true,
      };

      const expectedState = {
        ...previousState,
        error: action.payload.data,
      };

      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${Actions.OPEN_PLAN_FORM}`, () => {
      const action = { type: Actions.OPEN_PLAN_FORM };
      const expectedState = { ...previousState, showPlanForm: true };

      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${Actions.POST_PLAN_START}`, () => {
      const action = { type: Actions.POST_PLAN_START };
      const expectedState = { ...previousState, posting: true };

      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${Actions.POST_PLAN_SUCCESS}`, () => {
      const action = { type: Actions.POST_PLAN_SUCCESS };
      const expectedState = {
        ...previousState,
        posting: false,
        showPlanForm: false,
      };

      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${Actions.POST_PLAN_ERROR}`, () => {
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
        type: Actions.POST_PLAN_ERROR,
        payload: { data: error },
      };
      const expectedState = {
        ...previousState,
        posting: false,
        error: action.payload.data,
      };

      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${Actions.PUT_PLAN_START}`, () => {
      const action = { type: Actions.PUT_PLAN_START };
      const expectedState = {
        ...previousState,
        posting: true,
      };

      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${Actions.PUT_PLAN_SUCCESS}`, () => {
      const action = { type: Actions.PUT_PLAN_SUCCESS };
      previousState = { ...previousState, posting: true, showPlanForm: true };
      const expectedState = {
        ...previousState,
        posting: false,
        showPlanForm: false,
      };

      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${Actions.PUT_PLAN_ERROR}`, () => {
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
        type: Actions.PUT_PLAN_ERROR,
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

    it(`should handle ${Actions.CLOSE_PLAN_FORM}`, () => {
      const action = { type: Actions.CLOSE_PLAN_FORM };
      previousState = { ...previousState, showPlanForm: true };
      const expectedState = { ...previousState, showPlanForm: false };

      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${
      Actions.UPDATE_PLAN_FILTERS
    } when no filters set`, () => {
      const action = {
        type: Actions.UPDATE_PLAN_FILTERS,
        payload: { data: { incidentTypes: ['deddeed'] } },
      };

      const expectedState = {
        ...previousState,
        filters: merge({}, previousState.filters, action.payload.data),
      };
      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${
      Actions.UPDATE_PLAN_FILTERS
    } when filters are set`, () => {
      previousState = merge(previousState, {
        filters: { incidentTypes: ['dedddd'] },
      });

      const action = {
        type: Actions.UPDATE_PLAN_FILTERS,
        payload: { data: { owners: ['deddeed'] } },
      };

      const expectedState = {
        ...previousState,
        filters: merge({}, previousState.filters, action.payload.data),
      };
      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${
      Actions.RESET_PLAN_FILTERS
    } when a single filter is active`, () => {
      previousState = merge(previousState, {
        filters: { incidentTypes: ['dedddd'], owners: ['cdddedd'] },
      });

      const action = {
        type: Actions.RESET_PLAN_FILTERS,
        payload: { data: 'owners' },
      };

      const filters = Object.assign({}, previousState.filters, {
        [action.payload.data]: [],
      });

      const expectedState = Object.assign({}, previousState, { filters });

      expect(plans(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${
      Actions.RESET_PLAN_FILTERS
    } when a multiple filters are active`, () => {
      previousState = merge(previousState, {
        filters: { incidentTypes: ['dedddd'], owners: ['cdddedd'] },
      });

      const action = {
        type: Actions.RESET_PLAN_FILTERS,
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

    it(`should handle ${Actions.SELECT_PLAN}`, () => {
      const previousState = null;
      const action = {
        type: Actions.SELECT_PLAN,
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
        Mitigation: [],
        Preparedness: [],
        Response: [],
        Recovery: [],
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

    it(`should handle ${Actions.GET_PLAN_ACTIVITIES_START}`, () => {
      const expectedState = { ...previousState, loading: true };
      const action = {
        type: Actions.GET_PLAN_ACTIVITIES_START,
      };
      expect(planActivities(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${Actions.GET_PLAN_ACTIVITIES_SUCCESS}`, () => {
      const action = {
        type: Actions.GET_PLAN_ACTIVITIES_SUCCESS,
        payload: {
          data: {
            Mitigation: [{ name: 'Mitigation' }],
            Preparedness: [{ name: 'Preparedness' }],
            Response: [{ name: 'Response' }],
            Recovery: [{ name: 'Recovery' }],
          },
        },
        meta: {
          page: 1,
          total: 200,
        },
      };

      const expectedState = {
        ...previousState,
        Mitigation: action.payload.data.Mitigation,
        Preparedness: action.payload.data.Preparedness,
        Recovery: action.payload.data.Recovery,
        Response: action.payload.data.Response,
        loading: false,
      };

      expect(planActivities(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${Actions.GET_PLAN_ACTIVITIES_ERROR}`, () => {
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
        type: Actions.GET_PLAN_ACTIVITIES_ERROR,
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

    it(`should handle ${Actions.POST_PLAN_ACTIVITY_START}`, () => {
      const action = { type: Actions.POST_PLAN_ACTIVITY_START };
      const expectedState = { ...previousState, posting: true };

      expect(planActivities(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${Actions.POST_PLAN_ACTIVITY_SUCCESS}`, () => {
      const action = { type: Actions.POST_PLAN_ACTIVITY_SUCCESS };
      const expectedState = {
        ...previousState,
        posting: false,
        showActivityForm: false,
      };

      expect(planActivities(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${Actions.POST_PLAN_ACTIVITY_ERROR}`, () => {
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
        type: Actions.POST_PLAN_ACTIVITY_ERROR,
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

    it(`should handle ${Actions.PUT_PLAN_ACTIVITY_START}`, () => {
      const action = { type: Actions.PUT_PLAN_ACTIVITY_START };
      const expectedState = {
        ...previousState,
        posting: true,
      };

      expect(planActivities(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${Actions.PUT_PLAN_ACTIVITY_SUCCESS}`, () => {
      const action = { type: Actions.PUT_PLAN_ACTIVITY_SUCCESS };
      previousState = { ...previousState, posting: true };
      const expectedState = {
        ...previousState,
        posting: false,
        showActivityForm: false,
      };

      expect(planActivities(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${Actions.PUT_PLAN_ACTIVITY_ERROR}`, () => {
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
        type: Actions.PUT_PLAN_ACTIVITY_ERROR,
        payload: { data: error },
      };

      const expectedState = {
        ...previousState,
        posting: false,
        error,
      };

      expect(planActivities(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${Actions.OPEN_PLAN_ACTIVITY_FORM}`, () => {
      const action = { type: Actions.OPEN_PLAN_ACTIVITY_FORM };
      const expectedState = { ...previousState, showActivityForm: true };

      expect(planActivities(previousState, action)).toEqual(expectedState);
    });

    it(`should handle ${Actions.CLOSE_PLAN_ACTIVITY_FORM}`, () => {
      const action = { type: Actions.CLOSE_PLAN_ACTIVITY_FORM };
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

    it(`should handle ${Actions.SELECT_PLAN_ACTIVITY}`, () => {
      const action = {
        type: Actions.SELECT_PLAN_ACTIVITY,
        payload: { data: { name: 'Flood' } },
      };
      const previousState = null;
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

    it(`should handle ${Actions.GET_PLAN_ACTIVITY_PROCEDURES_START}`, () => {
      const action = { type: Actions.GET_PLAN_ACTIVITY_PROCEDURES_START };
      const expectedState = { ...previousState, loading: true };

      expect(planActivityProcedures(previousState, action)).toEqual(
        expectedState
      );
    });

    it(`should handle ${Actions.GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS}`, () => {
      const action = {
        type: Actions.GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS,
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

    it(`should handle ${Actions.GET_PLAN_ACTIVITY_PROCEDURES_ERROR}`, () => {
      const action = {
        type: Actions.GET_PLAN_ACTIVITY_PROCEDURES_ERROR,
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

    it(`should handle ${Actions.POST_PLAN_ACTIVITY_PROCEDURE_START}`, () => {
      const action = {
        type: Actions.POST_PLAN_ACTIVITY_PROCEDURE_START,
      };

      const expectedState = { ...previousState, posting: true };

      expect(planActivityProcedures(previousState, action)).toEqual(
        expectedState
      );
    });

    it(`should handle ${Actions.POST_PLAN_ACTIVITY_PROCEDURE_SUCCESS}`, () => {
      const action = {
        type: Actions.POST_PLAN_ACTIVITY_PROCEDURE_SUCCESS,
      };

      previousState = { ...previousState, posting: true };

      const expectedState = { ...previousState, posting: false };

      expect(planActivityProcedures(previousState, action)).toEqual(
        expectedState
      );
    });

    it(`should handle ${Actions.POST_PLAN_ACTIVITY_PROCEDURE_ERROR}`, () => {
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
        type: Actions.POST_PLAN_ACTIVITY_PROCEDURE_ERROR,
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

    it(`should handle ${Actions.PUT_PLAN_ACTIVITY_PROCEDURE_START}`, () => {
      const action = { type: Actions.PUT_PLAN_ACTIVITY_PROCEDURE_START };
      const expectedState = {
        ...previousState,
        posting: true,
      };

      expect(planActivityProcedures(previousState, action)).toEqual(
        expectedState
      );
    });

    it(`should handle ${Actions.PUT_PLAN_ACTIVITY_PROCEDURE_SUCCESS}`, () => {
      const action = { type: Actions.PUT_PLAN_ACTIVITY_PROCEDURE_SUCCESS };
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

    it(`should handle ${Actions.PUT_PLAN_ACTIVITY_PROCEDURE_ERROR}`, () => {
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
        type: Actions.PUT_PLAN_ACTIVITY_PROCEDURE_ERROR,
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

    it(`should handle ${Actions.OPEN_PLAN_ACTIVITY_PROCEDURE_FORM}`, () => {
      const action = { type: Actions.OPEN_PLAN_ACTIVITY_PROCEDURE_FORM };
      const expectedState = {
        ...previousState,
        showProcedureForm: true,
      };

      expect(planActivityProcedures(previousState, action)).toEqual(
        expectedState
      );
    });

    it(`should handle ${Actions.CLOSE_PLAN_ACTIVITY_PROCEDURE_FORM}`, () => {
      const action = { type: Actions.CLOSE_PLAN_ACTIVITY_PROCEDURE_FORM };
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

    it('should handle SELECT_PLAN_ACTIVITY_PROCEDURE', () => {
      const action = {
        type: Actions.SELECT_PLAN_ACTIVITY_PROCEDURE,
        payload: { data: { name: 'Test' } },
      };

      expect(selectedPlanActivityProcedure(null, action)).toEqual(
        action.payload.data
      );
    });
  });
});
