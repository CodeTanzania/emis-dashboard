/**
 * This function should items in the given list
 *
 * @function
 * @name shuffleList
 *
 *
 * @param {any[]} list
 * @param {number} fromIndex
 * @param {number} toIndex
 * @returns {any[]} shuffled array
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function shuffleList(list, fromIndex = 0, toIndex = 0) {
  const newList = [...list]; // create a copy of the provided list

  if (fromIndex === toIndex) {
    return newList;
  }

  const item = newList[fromIndex];

  newList.splice(fromIndex, 1);

  newList.splice(toIndex, 0, item);

  return newList;
}
