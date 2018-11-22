import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as API from '../../../common/API/api';
import * as Actions from '../actions';

jest.mock('../../../common/API/api');

const middlewares = [thunk.withExtraArgument(API)];
const mockStore = configureMockStore(middlewares);

describe('Plans:Module', () => {
  describe('Plans:Actions Creators', () => {
    it(`should create an action of type ${Actions.SELECT_PLAN}`, () => {
      expect(Actions.selectPlan({})).toEqual({
        type: Actions.SELECT_PLAN,
        payload: { data: {} },
      });
    });

    it(`should create an action of type ${Actions.UPDATE_PLAN_FILTERS}`, () => {
      expect(Actions.updatePlanFilters({})).toEqual({
        type: Actions.UPDATE_PLAN_FILTERS,
        payload: {
          data: {},
        },
      });
    });

    it(`should create an action of type ${Actions.RESET_PLAN_FILTERS}`, () => {
      expect(Actions.resetPlanFilters()).toEqual({
        type: Actions.RESET_PLAN_FILTERS,
        payload: {
          data: { incidentTypes: null },
        },
      });
    });

    it(`should create an action of type ${Actions.OPEN_PLAN_FORM}`, () => {
      expect(Actions.openPlanForm()).toEqual({
        type: Actions.OPEN_PLAN_FORM,
      });
    });

    it(`should create an action of type ${Actions.CLOSE_PLAN_FORM}`, () => {
      expect(Actions.closePlanForm()).toEqual({
        type: Actions.CLOSE_PLAN_FORM,
      });
    });

    it(`should create an action of type ${Actions.GET_PLANS_START}`, () => {
      expect(Actions.getPlansStart()).toEqual({
        type: Actions.GET_PLANS_START,
      });
    });

    it(`should create an action of type ${Actions.GET_PLANS_SUCCESS}`, () => {
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

      expect(Actions.getPlansSuccess(plans, 2, 40)).toEqual({
        type: Actions.GET_PLANS_SUCCESS,
        payload: {
          data: plans,
        },
        meta: {
          page: 2,
          total: 40,
        },
      });
    });

    it(`should create an action of type ${Actions.GET_PLANS_ERROR}`, () => {
      const error = new Error();

      expect(Actions.getPlansError(error)).toEqual({
        type: Actions.GET_PLANS_ERROR,
        payload: {
          data: error,
        },
        error: true,
      });
    });

    it(`should create an action of type ${Actions.POST_PLAN_START}`, () => {
      expect(Actions.postPlanStart()).toEqual({
        type: Actions.POST_PLAN_START,
      });
    });

    it(`should create an action of type ${Actions.POST_PLAN_SUCCESS}`, () => {
      expect(Actions.postPlanSuccess()).toEqual({
        type: Actions.POST_PLAN_SUCCESS,
      });

      expect(Actions.postPlanSuccess()).toEqual({
        type: Actions.POST_PLAN_SUCCESS,
      });
    });

    it(`should create an action of type ${Actions.POST_PLAN_ERROR}`, () => {
      const error = new Error();
      expect(Actions.postPlanError(error)).toEqual({
        type: Actions.POST_PLAN_ERROR,
        payload: { data: error },
        error: true,
      });
    });
  });

  describe('Activities:Actions Creators', () => {
    it(`should create an action of type ${
      Actions.SELECT_PLAN_ACTIVITY
    }`, () => {
      expect(Actions.selectPlanActivity({})).toEqual({
        type: Actions.SELECT_PLAN_ACTIVITY,
        payload: {
          data: {},
        },
      });
    });

    it(`should create an action of type ${
      Actions.OPEN_PLAN_ACTIVITY_FORM
    }`, () => {
      expect(Actions.openPlanActivityForm()).toEqual({
        type: Actions.OPEN_PLAN_ACTIVITY_FORM,
      });
    });

    it(`should create an action of type ${
      Actions.CLOSE_PLAN_ACTIVITY_FORM
    }`, () => {
      expect(Actions.closePlanActivityForm()).toEqual({
        type: Actions.CLOSE_PLAN_ACTIVITY_FORM,
      });
    });

    it(`should create an action of type ${
      Actions.GET_PLAN_ACTIVITIES_START
    }`, () => {
      expect(Actions.getPlanActivitiesStart()).toEqual({
        type: Actions.GET_PLAN_ACTIVITIES_START,
      });
    });

    it(`should create an action of type ${
      Actions.GET_PLAN_ACTIVITIES_SUCCESS
    }`, () => {
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

    it(`should create an action of type ${
      Actions.GET_PLAN_ACTIVITIES_ERROR
    }`, () => {
      const error = new Error();

      expect(Actions.getPlanActivitiesError(error)).toEqual({
        type: Actions.GET_PLAN_ACTIVITIES_ERROR,
        payload: {
          data: error,
        },
        error: true,
      });
    });

    it(`should create an action of type ${
      Actions.POST_PLAN_ACTIVITY_START
    }`, () => {
      expect(Actions.postPlanActivityStart()).toEqual({
        type: Actions.POST_PLAN_ACTIVITY_START,
      });
    });

    it(`should create an action of type ${
      Actions.POST_PLAN_ACTIVITY_SUCCESS
    }`, () => {
      expect(Actions.postPlanActivitySuccess()).toEqual({
        type: Actions.POST_PLAN_ACTIVITY_SUCCESS,
      });
    });

    it(`should create an action of type ${
      Actions.POST_PLAN_ACTIVITY_ERROR
    }`, () => {
      const error = new Error();
      expect(Actions.postPlanActivityError(error)).toEqual({
        type: Actions.POST_PLAN_ACTIVITY_ERROR,
        payload: {
          data: error,
        },
        error: true,
      });
    });
  });

  describe('Procedures(SOP):Actions Creators', () => {
    it(`should create an action of type ${
      Actions.SELECT_PLAN_ACTIVITY_PROCEDURE
    }`, () => {
      expect(Actions.selectPlanActivityProcedure({})).toEqual({
        type: Actions.SELECT_PLAN_ACTIVITY_PROCEDURE,
        payload: { data: {} },
      });
    });
    it(`should create an action of type ${
      Actions.OPEN_PLAN_ACTIVITY_PROCEDURE_FORM
    }`, () => {
      expect(Actions.openPlanActivityProcedureForm()).toEqual({
        type: Actions.OPEN_PLAN_ACTIVITY_PROCEDURE_FORM,
      });
    });
    it(`should create an action of type ${
      Actions.CLOSE_PLAN_ACTIVITY_PROCEDURE_FORM
    }`, () => {
      expect(Actions.closePlanActivityProcedureForm()).toEqual({
        type: Actions.CLOSE_PLAN_ACTIVITY_PROCEDURE_FORM,
      });
    });
    it(`should create an action of type ${
      Actions.GET_PLAN_ACTIVITY_PROCEDURES_START
    }`, () => {
      expect(Actions.getPlanActivityProceduresStart()).toEqual({
        type: Actions.GET_PLAN_ACTIVITY_PROCEDURES_START,
      });
    });

    it(`should create an action of type ${
      Actions.GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS
    }`, () => {
      const procedures = [];

      expect(
        Actions.getPlanActivityProceduresSuccess(procedures, 1, 200)
      ).toEqual({
        type: Actions.GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS,
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
      Actions.GET_PLAN_ACTIVITY_PROCEDURES_ERROR
    }`, () => {
      const error = new Error();

      expect(Actions.getPlanActivityProceduresError(error)).toEqual({
        type: Actions.GET_PLAN_ACTIVITY_PROCEDURES_ERROR,
        payload: {
          data: error,
        },
        error: true,
      });
    });

    it(`should create an action of type ${
      Actions.POST_PLAN_ACTIVITY_PROCEDURES_START
    }`, () => {
      expect(Actions.postPlanActivityProcedureStart()).toEqual({
        type: Actions.POST_PLAN_ACTIVITY_PROCEDURE_START,
      });
    });

    it(`should create an action of type ${
      Actions.POST_PLAN_ACTIVITY_PROCEDURES_SUCCESS
    }`, () => {
      expect(Actions.postPlanActivityProcedureSuccess()).toEqual({
        type: Actions.POST_PLAN_ACTIVITY_PROCEDURE_SUCCESS,
      });
    });

    it(`should create an action of type ${
      Actions.POST_PLAN_ACTIVITY_PROCEDURE_ERROR
    }`, () => {
      const error = new Error();

      expect(Actions.postPlanActivityProcedureError(error)).toEqual({
        type: Actions.POST_PLAN_ACTIVITY_PROCEDURE_ERROR,
        payload: {
          data: error,
        },
        error: true,
      });
    });

    it(`should create an action of type ${
      Actions.PUT_PLAN_ACTIVITY_PROCEDURE_START
    }`, () => {
      expect(Actions.putPlanActivityProcedureStart()).toEqual({
        type: Actions.PUT_PLAN_ACTIVITY_PROCEDURE_START,
      });
    });

    it(`should create an action of type ${
      Actions.PUT_PLAN_ACTIVITY_PROCEDURE_SUCCESS
    }`, () => {
      expect(Actions.putPlanActivityProcedureSuccess()).toEqual({
        type: Actions.PUT_PLAN_ACTIVITY_PROCEDURE_SUCCESS,
      });
    });

    it(`should create an action of type ${
      Actions.PUT_PLAN_ACTIVITY_PROCEDURE_ERROR
    }`, () => {
      const error = new Error();

      expect(Actions.putPlanActivityProcedureError(error)).toEqual({
        type: Actions.PUT_PLAN_ACTIVITY_PROCEDURE_ERROR,
        payload: {
          data: error,
        },
        error: true,
      });
    });
  });

  describe('Thunks', () => {
    it(`should dispatch an action of type ${
      Actions.GET_PLANS_SUCCESS
    } when fetching plans is successfully when filters(incidentType) is null`, () => {
      const store = mockStore({
        plans: {
          data: [],
          filters: {
            incidentTypes: null,
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
        { type: Actions.GET_PLANS_START },
        {
          type: Actions.GET_PLANS_SUCCESS,
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
      Actions.GET_PLANS_SUCCESS
    } when fetching plans is successfully when filters(incidentType) is set`, () => {
      const store = mockStore({
        plans: {
          data: [],
          filters: {
            incidentTypes: ['dedede'],
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
        { type: Actions.GET_PLANS_START },
        {
          type: Actions.GET_PLANS_SUCCESS,
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
      Actions.GET_PLANS_ERROR
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
        { type: Actions.GET_PLANS_START },
        {
          type: Actions.GET_PLANS_ERROR,
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
      Actions.POST_PLAN_SUCCESS
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
        { type: Actions.POST_PLAN_START },
        { type: Actions.POST_PLAN_SUCCESS },
        { type: Actions.GET_PLANS_START },
        {
          type: Actions.GET_PLANS_SUCCESS,
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
      Actions.POST_PLAN_ERROR
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
        { type: Actions.POST_PLAN_START },
        {
          type: Actions.POST_PLAN_ERROR,
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
      Actions.GET_PLAN_ACTIVITIES_SUCCESS
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
        { type: Actions.GET_PLAN_ACTIVITIES_START },
        {
          type: Actions.GET_PLAN_ACTIVITIES_SUCCESS,
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
      Actions.GET_PLAN_ACTIVITIES_ERROR
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
        { type: Actions.GET_PLAN_ACTIVITIES_START },
        {
          type: Actions.GET_PLAN_ACTIVITIES_ERROR,
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
      Actions.POST_PLAN_ACTIVITY_SUCCESS
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
        { type: Actions.POST_PLAN_ACTIVITY_START },
        { type: Actions.POST_PLAN_ACTIVITY_SUCCESS },
        { type: Actions.GET_PLAN_ACTIVITIES_START },
        {
          type: Actions.GET_PLAN_ACTIVITIES_SUCCESS,
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
      Actions.POST_PLAN_ACTIVITY_ERROR
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
        { type: Actions.POST_PLAN_ACTIVITY_START },
        {
          type: Actions.POST_PLAN_ACTIVITY_ERROR,
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
      Actions.GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS
    } when fetching procedures is successfully`, () => {
      const store = mockStore({
        selectedPlanActivity: { _id: 'ededsd' },
      });

      const expectedActions = [
        { type: Actions.GET_PLAN_ACTIVITY_PROCEDURES_START },
        {
          type: Actions.GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS,
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
      Actions.GET_PLAN_ACTIVITY_PROCEDURES_ERROR
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
        { type: Actions.GET_PLAN_ACTIVITY_PROCEDURES_START },
        {
          type: Actions.GET_PLAN_ACTIVITY_PROCEDURES_ERROR,
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
      Actions.POST_PLAN_ACTIVITY_PROCEDURE_SUCCESS
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
        { type: Actions.POST_PLAN_ACTIVITY_PROCEDURE_START },
        { type: Actions.POST_PLAN_ACTIVITY_PROCEDURE_SUCCESS },
        { type: Actions.GET_PLAN_ACTIVITY_PROCEDURES_START },
        {
          type: Actions.GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS,
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
      Actions.POST_PLAN_ACTIVITY_PROCEDURE_ERROR
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
        { type: Actions.POST_PLAN_ACTIVITY_PROCEDURE_START },
        {
          type: Actions.POST_PLAN_ACTIVITY_PROCEDURE_ERROR,
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
      Actions.PUT_PLAN_ACTIVITY_PROCEDURE_SUCCESS
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
        { type: Actions.PUT_PLAN_ACTIVITY_PROCEDURE_START },
        { type: Actions.PUT_PLAN_ACTIVITY_PROCEDURE_SUCCESS },
        { type: Actions.GET_PLAN_ACTIVITY_PROCEDURES_START },
        {
          type: Actions.GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS,
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
      Actions.PUT_PLAN_ACTIVITY_PROCEDURE_ERROR
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
        { type: Actions.PUT_PLAN_ACTIVITY_PROCEDURE_START },
        {
          type: Actions.PUT_PLAN_ACTIVITY_PROCEDURE_ERROR,
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
  });
});
