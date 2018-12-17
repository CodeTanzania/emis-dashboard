import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as API from '../../../common/API';
import * as Actions from '../actions';
import * as ActionTypes from '../constants';

jest.mock('../../../common/API');

const middlewares = [thunk.withExtraArgument({ API })];
const mockStore = configureMockStore(middlewares);

describe('Plans:Module', () => {
  describe('Plans:Actions Creators', () => {
    it(`should create an action of type ${ActionTypes.SELECT_PLAN}`, () => {
      expect(Actions.selectPlan({})).toEqual({
        type: ActionTypes.SELECT_PLAN,
        payload: { data: {} },
      });
    });

    it(`should create an action of type ${ActionTypes.SET_PLAN_SCHEMA}`, () => {
      expect(Actions.setPlanSchema({})).toEqual({
        type: ActionTypes.SET_PLAN_SCHEMA,
        payload: { data: {} },
      });
    });

    it(`should create an action of type ${
      ActionTypes.UPDATE_PLAN_FILTERS
    }`, () => {
      expect(Actions.updatePlanFilters({})).toEqual({
        type: ActionTypes.UPDATE_PLAN_FILTERS,
        payload: {
          data: {},
        },
      });
    });

    it(`should create an action of type ${
      ActionTypes.RESET_PLAN_FILTERS
    }`, () => {
      expect(Actions.resetPlanFilters('owners')).toEqual({
        type: ActionTypes.RESET_PLAN_FILTERS,
        payload: {
          data: 'owners',
        },
      });
    });

    it(`should create an action of type ${ActionTypes.OPEN_PLAN_FORM}`, () => {
      expect(Actions.openPlanForm()).toEqual({
        type: ActionTypes.OPEN_PLAN_FORM,
      });
    });

    it(`should create an action of type ${ActionTypes.CLOSE_PLAN_FORM}`, () => {
      expect(Actions.closePlanForm()).toEqual({
        type: ActionTypes.CLOSE_PLAN_FORM,
      });
    });

    it(`should create an action of type ${ActionTypes.GET_PLANS_START}`, () => {
      expect(Actions.getPlansStart()).toEqual({
        type: ActionTypes.GET_PLANS_START,
      });
    });

    it(`should create an action of type ${
      ActionTypes.GET_PLANS_SUCCESS
    }`, () => {
      const plans = [];

      expect(Actions.getPlansSuccess(plans)).toEqual({
        type: ActionTypes.GET_PLANS_SUCCESS,
        payload: {
          data: plans,
        },
        meta: {
          page: 1,
          total: 0,
        },
      });

      expect(Actions.getPlansSuccess(plans, 2, 40)).toEqual({
        type: ActionTypes.GET_PLANS_SUCCESS,
        payload: {
          data: plans,
        },
        meta: {
          page: 2,
          total: 40,
        },
      });
    });

    it(`should create an action of type ${ActionTypes.GET_PLANS_ERROR}`, () => {
      const error = new Error();

      expect(Actions.getPlansError(error)).toEqual({
        type: ActionTypes.GET_PLANS_ERROR,
        payload: {
          data: error,
        },
        error: true,
      });
    });

    it(`should create an action of type ${ActionTypes.POST_PLAN_START}`, () => {
      expect(Actions.postPlanStart()).toEqual({
        type: ActionTypes.POST_PLAN_START,
      });
    });

    it(`should create an action of type ${
      ActionTypes.POST_PLAN_SUCCESS
    }`, () => {
      expect(Actions.postPlanSuccess()).toEqual({
        type: ActionTypes.POST_PLAN_SUCCESS,
      });
    });

    it(`should create an action of type ${ActionTypes.POST_PLAN_ERROR}`, () => {
      const error = new Error();
      expect(Actions.postPlanError(error)).toEqual({
        type: ActionTypes.POST_PLAN_ERROR,
        payload: { data: error },
        error: true,
      });
    });

    it(`should create an action of type ${ActionTypes.PUT_PLAN_START}`, () => {
      expect(Actions.putPlanStart()).toEqual({
        type: ActionTypes.PUT_PLAN_START,
      });
    });

    it(`should create an action of type ${
      ActionTypes.PUT_PLAN_SUCCESS
    }`, () => {
      expect(Actions.putPlanSuccess()).toEqual({
        type: ActionTypes.PUT_PLAN_SUCCESS,
      });
    });

    it(`should create an action of type ${ActionTypes.PUT_PLAN_ERROR}`, () => {
      const error = new Error();
      expect(Actions.putPlanError(error)).toEqual({
        type: ActionTypes.PUT_PLAN_ERROR,
        payload: { data: error },
        error: true,
      });
    });
  });

  describe('Activities:Actions Creators', () => {
    it(`should create an action of type ${
      ActionTypes.SET_PLAN_ACTIVITY_SCHEMA
    }`, () => {
      expect(Actions.setPlanActivitySchema({})).toEqual({
        type: ActionTypes.SET_PLAN_ACTIVITY_SCHEMA,
        payload: { data: {} },
      });
    });
    it(`should create an action of type ${
      ActionTypes.SELECT_PLAN_ACTIVITY
    }`, () => {
      expect(Actions.selectPlanActivity({})).toEqual({
        type: ActionTypes.SELECT_PLAN_ACTIVITY,
        payload: {
          data: {},
        },
      });
    });

    it(`should create an action of type ${
      ActionTypes.OPEN_PLAN_ACTIVITY_FORM
    }`, () => {
      expect(Actions.openPlanActivityForm()).toEqual({
        type: ActionTypes.OPEN_PLAN_ACTIVITY_FORM,
      });
    });

    it(`should create an action of type ${
      ActionTypes.CLOSE_PLAN_ACTIVITY_FORM
    }`, () => {
      expect(Actions.closePlanActivityForm()).toEqual({
        type: ActionTypes.CLOSE_PLAN_ACTIVITY_FORM,
      });
    });

    it(`should create an action of type ${
      ActionTypes.GET_PLAN_ACTIVITIES_START
    }`, () => {
      expect(Actions.getPlanActivitiesStart()).toEqual({
        type: ActionTypes.GET_PLAN_ACTIVITIES_START,
      });
    });

    it(`should create an action of type ${
      ActionTypes.GET_PLAN_ACTIVITIES_SUCCESS
    }`, () => {
      const activities = [];

      expect(Actions.getPlanActivitiesSuccess(activities, 1, 200)).toEqual({
        type: ActionTypes.GET_PLAN_ACTIVITIES_SUCCESS,
        payload: {
          data: activities,
        },
        meta: {
          page: 1,
          total: 200,
        },
      });

      expect(Actions.getPlanActivitiesSuccess(activities)).toEqual({
        type: ActionTypes.GET_PLAN_ACTIVITIES_SUCCESS,
        payload: {
          data: activities,
        },
        meta: {
          page: 1,
          total: 0,
        },
      });
    });

    it(`should create an action of type ${
      ActionTypes.GET_PLAN_ACTIVITIES_ERROR
    }`, () => {
      const error = new Error();

      expect(Actions.getPlanActivitiesError(error)).toEqual({
        type: ActionTypes.GET_PLAN_ACTIVITIES_ERROR,
        payload: {
          data: error,
        },
        error: true,
      });
    });

    it(`should create an action of type ${
      ActionTypes.POST_PLAN_ACTIVITY_START
    }`, () => {
      expect(Actions.postPlanActivityStart()).toEqual({
        type: ActionTypes.POST_PLAN_ACTIVITY_START,
      });
    });

    it(`should create an action of type ${
      ActionTypes.POST_PLAN_ACTIVITY_SUCCESS
    }`, () => {
      expect(Actions.postPlanActivitySuccess()).toEqual({
        type: ActionTypes.POST_PLAN_ACTIVITY_SUCCESS,
      });
    });

    it(`should create an action of type ${
      ActionTypes.POST_PLAN_ACTIVITY_ERROR
    }`, () => {
      const error = new Error();
      expect(Actions.postPlanActivityError(error)).toEqual({
        type: ActionTypes.POST_PLAN_ACTIVITY_ERROR,
        payload: {
          data: error,
        },
        error: true,
      });
    });

    it(`should create an action of type ${
      ActionTypes.PUT_PLAN_ACTIVITY_START
    }`, () => {
      expect(Actions.putPlanActivityStart()).toEqual({
        type: ActionTypes.PUT_PLAN_ACTIVITY_START,
      });
    });

    it(`should create an action of type ${
      ActionTypes.PUT_PLAN_ACTIVITY_SUCCESS
    }`, () => {
      expect(Actions.putPlanActivitySuccess()).toEqual({
        type: ActionTypes.PUT_PLAN_ACTIVITY_SUCCESS,
      });
    });

    it(`should create an action of type ${
      ActionTypes.PUT_PLAN_ACTIVITY_ERROR
    }`, () => {
      const error = new Error();
      expect(Actions.putPlanActivityError(error)).toEqual({
        type: ActionTypes.PUT_PLAN_ACTIVITY_ERROR,
        payload: {
          data: error,
        },
        error: true,
      });
    });
  });

  describe('Procedures(SOP):Actions Creators', () => {
    it(`should create an action of type ${
      ActionTypes.SET_PLAN_ACTIVITY_PROCEDURE_SCHEMA
    }`, () => {
      expect(Actions.setPlanActivityProcedureSchema({})).toEqual({
        type: ActionTypes.SET_PLAN_ACTIVITY_PROCEDURE_SCHEMA,
        payload: { data: {} },
      });
    });
    it(`should create an action of type ${
      ActionTypes.SELECT_PLAN_ACTIVITY_PROCEDURE
    }`, () => {
      expect(Actions.selectPlanActivityProcedure({})).toEqual({
        type: ActionTypes.SELECT_PLAN_ACTIVITY_PROCEDURE,
        payload: { data: {} },
      });
    });
    it(`should create an action of type ${
      ActionTypes.OPEN_PLAN_ACTIVITY_PROCEDURE_FORM
    }`, () => {
      expect(Actions.openPlanActivityProcedureForm()).toEqual({
        type: ActionTypes.OPEN_PLAN_ACTIVITY_PROCEDURE_FORM,
      });
    });
    it(`should create an action of type ${
      ActionTypes.CLOSE_PLAN_ACTIVITY_PROCEDURE_FORM
    }`, () => {
      expect(Actions.closePlanActivityProcedureForm()).toEqual({
        type: ActionTypes.CLOSE_PLAN_ACTIVITY_PROCEDURE_FORM,
      });
    });
    it(`should create an action of type ${
      ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_START
    }`, () => {
      expect(Actions.getPlanActivityProceduresStart()).toEqual({
        type: ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_START,
      });
    });

    it(`should create an action of type ${
      ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS
    }`, () => {
      const procedures = [];

      expect(
        Actions.getPlanActivityProceduresSuccess(procedures, 1, 200)
      ).toEqual({
        type: ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS,
        payload: {
          data: procedures,
        },
        meta: {
          page: 1,
          total: 200,
        },
      });
    });

    it(`should create an action of type ${
      ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_ERROR
    }`, () => {
      const error = new Error();

      expect(Actions.getPlanActivityProceduresError(error)).toEqual({
        type: ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_ERROR,
        payload: {
          data: error,
        },
        error: true,
      });
    });

    it(`should create an action of type ${
      ActionTypes.POST_PLAN_ACTIVITY_PROCEDURES_START
    }`, () => {
      expect(Actions.postPlanActivityProcedureStart()).toEqual({
        type: ActionTypes.POST_PLAN_ACTIVITY_PROCEDURE_START,
      });
    });

    it(`should create an action of type ${
      ActionTypes.POST_PLAN_ACTIVITY_PROCEDURES_SUCCESS
    }`, () => {
      expect(Actions.postPlanActivityProcedureSuccess()).toEqual({
        type: ActionTypes.POST_PLAN_ACTIVITY_PROCEDURE_SUCCESS,
      });
    });

    it(`should create an action of type ${
      ActionTypes.POST_PLAN_ACTIVITY_PROCEDURE_ERROR
    }`, () => {
      const error = new Error();

      expect(Actions.postPlanActivityProcedureError(error)).toEqual({
        type: ActionTypes.POST_PLAN_ACTIVITY_PROCEDURE_ERROR,
        payload: {
          data: error,
        },
        error: true,
      });
    });

    it(`should create an action of type ${
      ActionTypes.PUT_PLAN_ACTIVITY_PROCEDURE_START
    }`, () => {
      expect(Actions.putPlanActivityProcedureStart()).toEqual({
        type: ActionTypes.PUT_PLAN_ACTIVITY_PROCEDURE_START,
      });
    });

    it(`should create an action of type ${
      ActionTypes.PUT_PLAN_ACTIVITY_PROCEDURE_SUCCESS
    }`, () => {
      expect(Actions.putPlanActivityProcedureSuccess()).toEqual({
        type: ActionTypes.PUT_PLAN_ACTIVITY_PROCEDURE_SUCCESS,
      });
    });

    it(`should create an action of type ${
      ActionTypes.PUT_PLAN_ACTIVITY_PROCEDURE_ERROR
    }`, () => {
      const error = new Error();

      expect(Actions.putPlanActivityProcedureError(error)).toEqual({
        type: ActionTypes.PUT_PLAN_ACTIVITY_PROCEDURE_ERROR,
        payload: {
          data: error,
        },
        error: true,
      });
    });
  });

  describe('Thunks', () => {
    it(`should dispatch an action of type ${
      ActionTypes.GET_PLANS_SUCCESS
    } when fetching plans is successfully when filters are null`, () => {
      const store = mockStore({
        plans: {
          data: [],
          filters: {
            incidentTypes: null,
            owners: null,
            boundaries: null,
          },
        },
      });

      // mock API calls
      API.getPlans.mockResolvedValueOnce({
        data: {
          data: [],
          pages: 2,
          total: 200,
          page: 1,
        },
      });

      const expectedActions = [
        { type: ActionTypes.GET_PLANS_START },
        {
          type: ActionTypes.GET_PLANS_SUCCESS,
          payload: {
            data: [],
          },
          meta: {
            page: 1,
            total: 200,
          },
        },
      ];

      return store.dispatch(Actions.getPlans({ page: 1 })).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
    it(`should dispatch an action of type ${
      ActionTypes.GET_PLANS_SUCCESS
    } when fetching plans is successfully when filters are set`, () => {
      const store = mockStore({
        plans: {
          data: [],
          filters: {
            incidentTypes: ['dedede'],
            boundaries: ['dedede'],
            owners: ['dedede'],
          },
        },
      });

      // mock API calls
      API.getPlans.mockResolvedValueOnce({
        data: {
          data: [],
          pages: 2,
          total: 200,
          page: 1,
        },
      });

      const expectedActions = [
        { type: ActionTypes.GET_PLANS_START },
        {
          type: ActionTypes.GET_PLANS_SUCCESS,
          payload: {
            data: [],
          },
          meta: {
            page: 1,
            total: 200,
          },
        },
      ];

      return store.dispatch(Actions.getPlans({ page: 1 })).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it(`should dispatch an action of type ${
      ActionTypes.GET_PLANS_ERROR
    } when fetching plans fails`, () => {
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

      const store = mockStore({
        plans: {
          data: [],
          filters: {
            incidentTypes: null,
          },
        },
      });

      const expectedActions = [
        { type: ActionTypes.GET_PLANS_START },
        {
          type: ActionTypes.GET_PLANS_ERROR,
          payload: {
            data: error,
          },
          error: true,
        },
      ];

      // mock API calls
      API.getPlans.mockRejectedValueOnce(error);

      return store.dispatch(Actions.getPlans()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it(`should dispatch an action of type ${
      ActionTypes.POST_PLAN_SUCCESS
    } when updating activity is successfully`, () => {
      // mock API call
      API.postPlan.mockResolvedValueOnce({});
      API.getPlans.mockResolvedValueOnce({
        data: {
          data: [],
          pages: 2,
          total: 200,
          page: 1,
        },
      });
      const store = mockStore({
        plans: {
          data: [],
          filters: {
            incidentTypes: null,
          },
        },
        selectedPlan: { _id: '02910de1212', incidentType: { _id: 'e29302' } },
      });

      const expectedActions = [
        { type: ActionTypes.POST_PLAN_START },
        { type: ActionTypes.POST_PLAN_SUCCESS },
        { type: ActionTypes.GET_PLANS_START },
        {
          type: ActionTypes.GET_PLANS_SUCCESS,
          payload: {
            data: [],
          },
          meta: {
            page: 1,
            total: 200,
          },
        },
      ];

      return store.dispatch(Actions.postPlan({})).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it(`should dispatch an action of type ${
      ActionTypes.POST_PLAN_ERROR
    } when updating activity fails`, () => {
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

      const store = mockStore({
        plans: {
          data: [],
          filters: {
            incidentTypes: null,
          },
        },
        selectedPlan: { _id: '02910de1212', incidentType: { _id: 'e29302' } },
      });

      const expectedActions = [
        { type: ActionTypes.POST_PLAN_START },
        {
          type: ActionTypes.POST_PLAN_ERROR,
          payload: { data: error },
          error: true,
        },
      ];

      // mock API calls
      API.postPlan.mockRejectedValueOnce(error);

      return store.dispatch(Actions.postPlan({})).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it(`should dispatch an action of type ${
      ActionTypes.PUT_PLAN_SUCCESS
    } when updating activity is successfully`, () => {
      // mock API call
      API.putPlan.mockResolvedValueOnce({});
      API.getPlans.mockResolvedValueOnce({
        data: {
          data: [],
          pages: 2,
          total: 200,
          page: 1,
        },
      });
      const store = mockStore({
        plans: {
          data: [],
          filters: {
            incidentTypes: null,
          },
        },
        selectedPlan: { _id: '02910de1212', incidentType: { _id: 'e29302' } },
      });

      const expectedActions = [
        { type: ActionTypes.PUT_PLAN_START },
        { type: ActionTypes.PUT_PLAN_SUCCESS },
        { type: ActionTypes.GET_PLANS_START },
        {
          type: ActionTypes.GET_PLANS_SUCCESS,
          payload: {
            data: [],
          },
          meta: {
            page: 1,
            total: 200,
          },
        },
      ];

      return store.dispatch(Actions.putPlan({})).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it(`should dispatch an action of type ${
      ActionTypes.PUT_PLAN_SUCCESS
    } when updating activity is successfully`, () => {
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
      // mock API call
      API.putPlan.mockRejectedValueOnce(error);

      const store = mockStore({
        plans: {
          data: [],
          filters: {
            incidentTypes: null,
          },
        },
        selectedPlan: { _id: '02910de1212', incidentType: { _id: 'e29302' } },
      });

      const expectedActions = [
        { type: ActionTypes.PUT_PLAN_START },
        {
          type: ActionTypes.PUT_PLAN_ERROR,
          payload: { data: error },
          error: true,
        },
      ];

      return store.dispatch(Actions.putPlan({})).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it(`should dispatch an action of type ${
      ActionTypes.GET_PLAN_ACTIVITIES_SUCCESS
    } when fetching plan activities is successfully`, () => {
      const store = mockStore({
        plans: {
          data: [],

          filters: {
            incidentTypes: null,
          },
        },
        selectedPlan: { _id: '02910de1212' },
      });

      const expectedActions = [
        { type: ActionTypes.GET_PLAN_ACTIVITIES_START },
        {
          type: ActionTypes.GET_PLAN_ACTIVITIES_SUCCESS,
          payload: {
            data: {},
          },
          meta: {
            page: 1,
            total: 200,
          },
        },
      ];

      // mock API calls
      API.getPlanActivities.mockResolvedValueOnce({
        data: {
          data: [],
          pages: 2,
          total: 200,
          page: 1,
        },
      });

      return store.dispatch(Actions.getPlanActivities()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it(`should dispatch an action of type ${
      ActionTypes.GET_PLAN_ACTIVITIES_ERROR
    } when fetching plan activities fails`, () => {
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

      const store = mockStore({
        plans: {
          data: [],

          filters: {
            incidentTypes: null,
          },
        },
        selectedPlan: { _id: '02910de1212' },
      });

      const expectedActions = [
        { type: ActionTypes.GET_PLAN_ACTIVITIES_START },
        {
          type: ActionTypes.GET_PLAN_ACTIVITIES_ERROR,
          payload: {
            data: error,
          },
          error: true,
        },
      ];

      // mock API calls
      API.getPlanActivities.mockRejectedValueOnce(error);

      return store.dispatch(Actions.getPlanActivities()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it(`should dispatch an action of type ${
      ActionTypes.POST_PLAN_ACTIVITY_SUCCESS
    } when updating activity is successfully`, () => {
      // mock API call
      API.postPlanActivity.mockResolvedValueOnce({});
      API.getPlanActivities.mockResolvedValueOnce({
        data: {
          data: [],
          pages: 2,
          total: 200,
          page: 1,
        },
      });
      const store = mockStore({
        plans: {
          data: [],

          filters: {
            incidentTypes: null,
          },
        },
        selectedPlan: { _id: '02910de1212', incidentType: { _id: 'e29302' } },
      });

      const expectedActions = [
        { type: ActionTypes.POST_PLAN_ACTIVITY_START },
        { type: ActionTypes.POST_PLAN_ACTIVITY_SUCCESS },
        { type: ActionTypes.GET_PLAN_ACTIVITIES_START },
        {
          type: ActionTypes.GET_PLAN_ACTIVITIES_SUCCESS,
          payload: {
            data: {},
          },
          meta: {
            page: 1,
            total: 200,
          },
        },
      ];

      return store.dispatch(Actions.postPlanActivity({})).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it(`should dispatch an action of type ${
      ActionTypes.POST_PLAN_ACTIVITY_ERROR
    } when updating activity fails`, () => {
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

      const store = mockStore({
        plans: {
          data: [],

          filters: {
            incidentTypes: null,
          },
        },
        selectedPlan: { _id: '02910de1212', incidentType: { _id: 'e29302' } },
      });

      const expectedActions = [
        { type: ActionTypes.POST_PLAN_ACTIVITY_START },
        {
          type: ActionTypes.POST_PLAN_ACTIVITY_ERROR,
          payload: { data: error },
          error: true,
        },
      ];

      // mock API calls
      API.postPlanActivity.mockRejectedValueOnce(error);

      return store.dispatch(Actions.postPlanActivity({})).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it(`should dispatch an action of type ${
      ActionTypes.PUT_PLAN_ACTIVITY_SUCCESS
    } when updating activity is successfully`, () => {
      const store = mockStore({
        selectedPlanActivity: {
          _id: 'deded',
          plan: {
            _id: '29032jdd',
          },
          incidentType: { _id: 'ededed' },
        },
        selectedPlan: {
          _id: 'adf2032',
        },
      });

      const expectedActions = [
        { type: ActionTypes.PUT_PLAN_ACTIVITY_START },
        { type: ActionTypes.PUT_PLAN_ACTIVITY_SUCCESS },
        { type: ActionTypes.GET_PLAN_ACTIVITIES_START },
        {
          type: ActionTypes.GET_PLAN_ACTIVITIES_SUCCESS,
          payload: { data: {} },
          meta: { page: 1, total: 200 },
        },
      ];

      // mock API call
      API.putPlanActivity.mockResolvedValueOnce({});
      API.getPlanActivities.mockResolvedValueOnce({
        data: {
          data: [],
          page: 1,
          total: 200,
        },
      });

      return store.dispatch(Actions.putPlanActivity({})).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it(`should dispatch an action of type ${
      ActionTypes.PUT_PLAN_ACTIVITY_ERROR
    } when updating activity is successfully`, () => {
      const store = mockStore({
        selectedPlanActivity: {
          _id: 'deded',
          plan: {
            _id: '29032jdd',
          },
          incidentType: { _id: 'ededed' },
        },
        selectedPlan: {
          _id: 'adf2032',
        },
      });

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

      const expectedActions = [
        { type: ActionTypes.PUT_PLAN_ACTIVITY_START },
        {
          type: ActionTypes.PUT_PLAN_ACTIVITY_ERROR,
          payload: { data: error },
          error: true,
        },
      ];

      // mock API call
      API.putPlanActivity.mockRejectedValueOnce(error);

      return store.dispatch(Actions.putPlanActivity({})).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it(`should dispatch an action of type ${
      ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS
    } when fetching procedures is successfully`, () => {
      const store = mockStore({
        selectedPlanActivity: { _id: 'ededsd' },
      });

      const expectedActions = [
        { type: ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_START },
        {
          type: ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS,
          payload: { data: [] },
          meta: { page: 1, total: 200 },
        },
      ];

      // mock API call
      API.getPlanActivityProcedures.mockResolvedValueOnce({
        data: {
          data: [],
          page: 1,
          total: 200,
        },
      });

      return store.dispatch(Actions.getPlanActivityProcedures({})).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it(`should dispatch an action of type ${
      ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_ERROR
    } when fetching procedures fails`, () => {
      const store = mockStore({
        selectedPlanActivity: { _id: 'ededsd' },
      });

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

      const expectedActions = [
        { type: ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_START },
        {
          type: ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_ERROR,
          payload: { data: error },
          error: true,
        },
      ];

      // mock API call
      API.getPlanActivityProcedures.mockRejectedValueOnce(error);

      return store.dispatch(Actions.getPlanActivityProcedures({})).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it(`should dispatch an action of type ${
      ActionTypes.POST_PLAN_ACTIVITY_PROCEDURE_SUCCESS
    } when updating procedure is successfully`, () => {
      const store = mockStore({
        selectedPlanActivity: {
          _id: 'deded',
          plan: {
            _id: '29032jdd',
          },
          incidentType: { _id: 'ededed' },
        },
      });

      const expectedActions = [
        { type: ActionTypes.POST_PLAN_ACTIVITY_PROCEDURE_START },
        { type: ActionTypes.POST_PLAN_ACTIVITY_PROCEDURE_SUCCESS },
        { type: ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_START },
        {
          type: ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS,
          payload: { data: [] },
          meta: { page: 1, total: 200 },
        },
      ];

      // mock API call
      API.postPlanActivityProcedure.mockResolvedValueOnce({});
      API.getPlanActivityProcedures.mockResolvedValueOnce({
        data: {
          data: [],
          page: 1,
          total: 200,
        },
      });

      return store.dispatch(Actions.postPlanActivityProcedure()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it(`should dispatch an action of type ${
      ActionTypes.POST_PLAN_ACTIVITY_PROCEDURE_ERROR
    } when updating procedure is successfully`, () => {
      const store = mockStore({
        selectedPlanActivity: {
          _id: 'deded',
          plan: {
            _id: '29032jdd',
          },
          incidentType: { _id: 'ededed' },
        },
      });

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

      const expectedActions = [
        { type: ActionTypes.POST_PLAN_ACTIVITY_PROCEDURE_START },
        {
          type: ActionTypes.POST_PLAN_ACTIVITY_PROCEDURE_ERROR,
          payload: { data: error },
          error: true,
        },
      ];

      // mock API call
      API.postPlanActivityProcedure.mockRejectedValueOnce(error);

      return store.dispatch(Actions.postPlanActivityProcedure()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it(`should dispatch an action of type ${
      ActionTypes.PUT_PLAN_ACTIVITY_PROCEDURE_SUCCESS
    } when updating procedure is successfully`, () => {
      const store = mockStore({
        selectedPlanActivity: {
          _id: 'deded',
          plan: {
            _id: '29032jdd',
          },
          incidentType: { _id: 'ededed' },
        },
      });

      const expectedActions = [
        { type: ActionTypes.PUT_PLAN_ACTIVITY_PROCEDURE_START },
        { type: ActionTypes.PUT_PLAN_ACTIVITY_PROCEDURE_SUCCESS },
        { type: ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_START },
        {
          type: ActionTypes.GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS,
          payload: { data: [] },
          meta: { page: 1, total: 200 },
        },
      ];

      // mock API call
      API.putPlanActivityProcedure.mockResolvedValueOnce({});
      API.getPlanActivityProcedures.mockResolvedValueOnce({
        data: {
          data: [],
          page: 1,
          total: 200,
        },
      });

      return store.dispatch(Actions.putPlanActivityProcedure({})).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it(`should dispatch an action of type ${
      ActionTypes.PUT_PLAN_ACTIVITY_PROCEDURE_ERROR
    } when updating procedure is successfully`, () => {
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

      const store = mockStore({
        selectedPlanActivity: {
          _id: 'deded',
          plan: {
            _id: '29032jdd',
          },
          incidentType: { _id: 'ededed' },
        },
      });

      const expectedActions = [
        { type: ActionTypes.PUT_PLAN_ACTIVITY_PROCEDURE_START },
        {
          type: ActionTypes.PUT_PLAN_ACTIVITY_PROCEDURE_ERROR,
          payload: { data: error },
          error: true,
        },
      ];

      // mock API call
      API.putPlanActivityProcedure.mockRejectedValueOnce(error);

      return store.dispatch(Actions.putPlanActivityProcedure()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it(`should dispatch an action of type [${ActionTypes.GET_PLANS_SUCCESS},${
      ActionTypes.SET_PLAN_SCHEMA
    },${ActionTypes.SET_PLAN_ACTIVITY_SCHEMA},${
      ActionTypes.SET_PLAN_ACTIVITY_PROCEDURE_SCHEMA
    }] when fetching plans is successfully when filters are null`, () => {
      const store = mockStore({
        plans: {
          data: [],
          filters: {
            incidentTypes: null,
            owners: null,
            boundaries: null,
          },
        },
      });

      // mock API calls
      API.setupPlan.mockResolvedValueOnce({
        planSchema: {},
        procedureSchema: {},
        activitySchema: {},
        plans: {
          data: [],
          pages: 2,
          total: 200,
          page: 1,
        },
      });

      const expectedActions = [
        { type: ActionTypes.GET_PLANS_START },
        { type: ActionTypes.SET_PLAN_SCHEMA, payload: { data: {} } },
        { type: ActionTypes.SET_PLAN_ACTIVITY_SCHEMA, payload: { data: {} } },
        {
          type: ActionTypes.SET_PLAN_ACTIVITY_PROCEDURE_SCHEMA,
          payload: { data: {} },
        },
        {
          type: ActionTypes.GET_PLANS_SUCCESS,
          payload: {
            data: [],
          },
          meta: {
            page: 1,
            total: 200,
          },
        },
      ];

      return store.dispatch(Actions.setupPlan()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it(`should dispatch an action of type ${
      ActionTypes.GET_PLANS_ERROR
    } when setting up plans fails`, () => {
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

      const store = mockStore({
        selectedPlanActivity: {
          _id: 'deded',
          plan: {
            _id: '29032jdd',
          },
          incidentType: { _id: 'ededed' },
        },
      });

      const expectedActions = [
        { type: ActionTypes.GET_PLANS_START },
        {
          type: ActionTypes.GET_PLANS_ERROR,
          payload: { data: error },
          error: true,
        },
      ];

      // mock API call
      API.setupPlan.mockRejectedValueOnce(error);

      return store.dispatch(Actions.setupPlan()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
