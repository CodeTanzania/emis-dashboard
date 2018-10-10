import shuffleList from '../util';

describe('Utils', () => {
  describe('shuffleList', () => {
    it('should not mutate the provided list', () => {
      const list = [1, 2, 3, 4, 5, 6];
      const originalList = [...list];

      shuffleList(list, 3, 2);

      expect(originalList).toEqual(list);
    });

    it('should shuffle list items based on given indexes', () => {
      const list = [1, 2, 3, 4, 5, 6];
      const expectedList = [1, 3, 2, 4, 5, 6];

      expect(shuffleList(list, 2, 1)).toEqual(expectedList);
    });

    it('should return same list if the two indexes are the same', () => {
      const list = [1, 2, 3, 4, 5, 6];

      expect(shuffleList(list, 1, 1)).toEqual(list);
    });

    it('should return same list of the indexes are not provided', () => {
      const list = [1, 2, 3, 4, 5, 6];

      expect(shuffleList(list)).toEqual(list);
    });
  });
});
