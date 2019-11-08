/**
 * Add to end element in array
 * @param oldArray - array what update
 * @param newElement - new element what add
 */
export const addElementToArray = <T>(oldArray: T[], newElement: T): T[] => [...oldArray, newElement];
/**
 * Remove element from array
 * @param oldArray - array what change
 * @param filterParameter - parameter from what element is filter
 */
export const removeElementByKey = <F, T extends { id: F }>(oldArray: T[], filterParameter: F): T[] =>
  oldArray.filter((element) => element.id !== filterParameter);