export const flattenArr = (arr: any[]): any[] =>
  arr.reduce(
    (acc: any[], val: any[]) =>
      Array.isArray(val) ? acc.concat(flattenArr(val)) : acc.concat(val),
    []
  );
