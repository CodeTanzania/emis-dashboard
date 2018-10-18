import { plans, selectedPlan } from '../reducers';

describe('Plan:Reducers', () => {
  describe('plans', () => {
    it('should return default state when no initial state is provided', () => {
      const expectedState = [];
      expect(plans(undefined, {})).toEqual(expectedState);
    });

    it('should return initial state when given invalid action type', () => {
      const initialState = [];
      expect(plans(initialState, { type: null })).toEqual(initialState);
    });
  });

  describe('selectedPlans', () => {
    it('should return default state when no initial state is provided', () => {
      expect(selectedPlan(undefined, {})).toBeNull();
    });

    it('should return initial state when given invalid action type', () => {
      const initialState = { name: 'test' };
      expect(selectedPlan(initialState, { type: null })).toEqual(initialState);
    });
  });
});
