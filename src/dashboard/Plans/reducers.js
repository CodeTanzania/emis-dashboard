import merge from 'lodash/merge';
import {
  CLOSE_PLAN_ACTIVITY_FORM,
  CLOSE_PLAN_ACTIVITY_PROCEDURE_FORM,
  CLOSE_PLAN_FORM,
  GET_PLANS_ERROR,
  GET_PLANS_START,
  GET_PLANS_SUCCESS,
  GET_PLAN_ACTIVITIES_ERROR,
  GET_PLAN_ACTIVITIES_START,
  GET_PLAN_ACTIVITIES_SUCCESS,
  GET_PLAN_ACTIVITY_PROCEDURES_ERROR,
  GET_PLAN_ACTIVITY_PROCEDURES_START,
  GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS,
  OPEN_PLAN_ACTIVITY_FORM,
  OPEN_PLAN_ACTIVITY_PROCEDURE_FORM,
  OPEN_PLAN_FORM,
  POST_PLAN_ACTIVITY_ERROR,
  POST_PLAN_ACTIVITY_PROCEDURE_ERROR,
  POST_PLAN_ACTIVITY_PROCEDURE_START,
  POST_PLAN_ACTIVITY_PROCEDURE_SUCCESS,
  POST_PLAN_ACTIVITY_START,
  POST_PLAN_ACTIVITY_SUCCESS,
  PUT_PLAN_ACTIVITY_PROCEDURE_ERROR,
  PUT_PLAN_ACTIVITY_PROCEDURE_START,
  PUT_PLAN_ACTIVITY_PROCEDURE_SUCCESS,
  RESET_PLAN_FILTERS,
  SELECT_PLAN,
  SELECT_PLAN_ACTIVITY,
  SELECT_PLAN_ACTIVITY_PROCEDURE,
  UPDATE_PLAN_FILTERS,
} from './actions';

/**
 * Store keys added by the reducers in this file
 *
 * plans: Object
 * selectedPlan: Object
 * planActivities: Object
 * selectedPlanActivity: Object
 * planActivityProcedures: Object
 * selectedPlanActivityProcedure: Object
 */

/* initial state */
const defaultPlanActivitiesState = {
  Mitigation: [],
  Preparedness: [],
  Response: [],
  Recovery: [],
  page: 1,
  total: 0,
  showActivityForm: false,
  loading: false,
  posting: false,
};

const defaultPlansState = {
  data: [],
  page: 1,
  total: 0,
  showPlanForm: false,
  loading: false,
  posting: false,
  filters: {
    incidentTypes: [],
  },
};

const defaultProceduresState = {
  data: [],
  page: 1,
  total: 0,
  showProcedureForm: false,
  loading: false,
  posting: false,
};

/*
 *------------------------------------------------------------------------------
 * Plan Reducers
 *------------------------------------------------------------------------------
 */

/**
 * Plans reducer
 * Is the field in the store which hold the loaded plans, total plans from the
 * API, current result page and the loading status for the plan
 *
 * @function
 * @name plans
 *
 * @param {Object} state={} - Initial state
 * @param {Object} action - Redux action object
 * @param {string} action.type - Action type
 * @param {Object} action.payload - Action payload
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function plans(state = defaultPlansState, action) {
  switch (action.type) {
    case GET_PLANS_START:
      return Object.assign({}, state, {
        loading: true,
      });
    case GET_PLANS_SUCCESS:
      return Object.assign({}, state, {
        data: [...action.payload.data],
        page: action.meta.page,
        total: action.meta.total,
        loading: false,
      });
    case GET_PLANS_ERROR:
      return Object.assign({}, state, {
        error: action.payload.data,
        loading: false,
      });
    case OPEN_PLAN_FORM:
      return Object.assign({}, state, {
        showPlanForm: true,
      });
    case CLOSE_PLAN_FORM:
      return Object.assign({}, state, {
        showPlanForm: false,
      });
    case UPDATE_PLAN_FILTERS:
      return merge({}, state, {
        filters: action.payload.data,
      });
    case RESET_PLAN_FILTERS:
      return Object.assign({}, state, {
        filters: {
          incidentTypes: [],
        },
      });
    default:
      return state;
  }
}

/**
 * Selected plan reducer
 *
 * @function
 * @name selectedPlan
 *
 * @param {Object} state=null - Initial state
 * @param {Object} action - Redux action object
 * @param {string} action.type - Action type
 * @param {Object} action.payload - Action payload(data)
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function selectedPlan(state = null, action) {
  switch (action.type) {
    case SELECT_PLAN:
      return Object.assign({}, state, action.payload.data);
    default:
      return state;
  }
}

/**
 * planActivities reducer
 *
 * @function
 * @name planActivities
 *
 * @param {Object} state={} - Current store value for plan activities
 * @param {Object} action - Redux action
 * @returns {Object} planActivities - object which have plan activities and meta data
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function planActivities(state = defaultPlanActivitiesState, action) {
  switch (action.type) {
    case GET_PLAN_ACTIVITIES_START:
      return Object.assign({}, state, {
        loading: true,
      });
    case GET_PLAN_ACTIVITIES_SUCCESS:
      return Object.assign(
        {},
        state,
        {
          Mitigation: [],
          Preparedness: [],
          Response: [],
          Recovery: [],
        },
        action.payload.data,
        {
          loading: false,
        }
      );
    case GET_PLAN_ACTIVITIES_ERROR:
      return Object.assign({}, state, {
        error: action.payload.data,
        loading: false,
      });
    case POST_PLAN_ACTIVITY_START:
      return Object.assign({}, state, {
        posting: true,
      });
    case POST_PLAN_ACTIVITY_SUCCESS:
      return Object.assign({}, state, {
        posting: false,
        showActivityForm: false,
      });
    case POST_PLAN_ACTIVITY_ERROR:
      return Object.assign({}, state, {
        error: action.payload.data,
        posting: false,
      });
    case OPEN_PLAN_ACTIVITY_FORM:
      return Object.assign({}, state, {
        showActivityForm: true,
      });
    case CLOSE_PLAN_ACTIVITY_FORM:
      return Object.assign({}, state, {
        showActivityForm: false,
      });
    default:
      return state;
  }
}

/**
 * selectedPlanActivity reducer
 *
 * @function
 * @name selectedPlanActivity
 *
 * @param {Object} state={} - Current store value for selectedPlanActivity
 * @param {action} action - Redux action
 * @returns {Object} selectedPlanActivity - selected plan object
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function selectedPlanActivity(state = null, action) {
  switch (action.type) {
    case SELECT_PLAN_ACTIVITY:
      return Object.assign({}, state, action.payload.data);
    default:
      return state;
  }
}

/**
 * planActivityProcedures reducer
 *
 * @function
 * @name planActivityProcedures
 *
 * @param {Object} state - Current store value for planActivityProcedures
 * @param {Object} action - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function planActivityProcedures(state = defaultProceduresState, action) {
  switch (action.type) {
    case GET_PLAN_ACTIVITY_PROCEDURES_START:
      return Object.assign({}, state, {
        loading: true,
      });
    case GET_PLAN_ACTIVITY_PROCEDURES_SUCCESS:
      return Object.assign({}, state, {
        data: [...action.payload.data],
        page: action.meta.page,
        total: action.meta.total,
        loading: false,
      });
    case GET_PLAN_ACTIVITY_PROCEDURES_ERROR:
      return Object.assign({}, state, {
        error: action.payload.data,
        loading: false,
      });
    case POST_PLAN_ACTIVITY_PROCEDURE_START:
      return Object.assign({}, state, {
        posting: true,
      });
    case POST_PLAN_ACTIVITY_PROCEDURE_SUCCESS:
      return Object.assign({}, state, {
        posting: false,
        showProcedureForm: false,
      });
    case POST_PLAN_ACTIVITY_PROCEDURE_ERROR:
      return Object.assign({}, state, {
        error: action.payload.data,
        posting: false,
      });
    case PUT_PLAN_ACTIVITY_PROCEDURE_START:
      return Object.assign({}, state, {
        posting: true,
      });
    case PUT_PLAN_ACTIVITY_PROCEDURE_SUCCESS:
      return Object.assign({}, state, {
        posting: false,
        showProcedureForm: false,
      });
    case PUT_PLAN_ACTIVITY_PROCEDURE_ERROR:
      return Object.assign({}, state, {
        posting: false,
      });
    case OPEN_PLAN_ACTIVITY_PROCEDURE_FORM:
      return Object.assign({}, state, {
        showProcedureForm: true,
      });
    case CLOSE_PLAN_ACTIVITY_PROCEDURE_FORM:
      return Object.assign({}, state, {
        showProcedureForm: false,
      });
    default:
      return state;
  }
}

/**
 * selectedPlanActivityProcedure reducer
 *
 * @function
 * @name selectedPlanActivityProcedure
 *
 * @param {Object} state=null - Current store value for selected Plan Activity Procedure
 * @param {Object} action - Redux action
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export function selectedPlanActivityProcedure(state = null, action) {
  switch (action.type) {
    case SELECT_PLAN_ACTIVITY_PROCEDURE:
      return Object.assign({}, state, action.payload.data);
    default:
      return state;
  }
}
