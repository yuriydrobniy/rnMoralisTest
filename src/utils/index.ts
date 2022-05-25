export const getKeyByValue = (
  object: any,
  value: string | number,
): string | number | undefined => {
  return Object.keys(object).find(key => object[key] === value);
};
