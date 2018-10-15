import shuffleList from '../util';

describe('Utils', () => {
  describe('shuffleList', () => {
    it('should not mutate the provided list of primitive values', () => {
      const list = [1, 2, 3, 4, 5, 6];
      const originalList = [...list];

      shuffleList(list, 3, 2);

      expect(originalList).toEqual(list);
    });

    it('should not have reference of the original list', () => {
      const list = [
        { name: 'test', number: 2 },
        { name: 'example', number: 5 },
      ];

      const originalList = [...list];

      const newList = shuffleList(list, 1, 0);

      newList[1].number = 10; // mutate new list

      expect(originalList).toEqual(list);
      expect(list[0].number).toBe(2);
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
