import { merge } from './unit-test1';

describe('merge', () => {
  it('Merge two empty arrays into an empty array', () => {
    expect(merge([], [])).toEqual([]); });

  it('Merge an empty array with a non-empty array into the non-empty array', () => {
    expect(merge([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(merge([1, 2, 3], [])).toEqual([1, 2, 3]); });

  it('Merge two non-empty arrays of the same length', () => {
    expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([2, 4, 6], [1, 3, 5])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([1, 2, 3], [1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3]); });

  it('Merge two non-empty arrays of different lengths', () => {
    expect(merge([1, 3, 5, 7], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(merge([2, 4, 6], [1, 3, 5, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(merge([1, 2, 3, 4], [5, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]); });
});
