export function arrayFrom(start: number, stop: number) {
  return Array.from({ length: (stop - start) / 1 + 1 }, (_, index) => start + index * 1);
}

export function arrayIsEmpty(arr: unknown) {
  return Array.isArray(arr) && arr.length === 0;
}
