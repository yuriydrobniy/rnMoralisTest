export const getKeyByValue = (
  object: any,
  value: string | number,
): string | number | undefined => {
  return Object.keys(object).find(key => object[key] === value);
};

export const setIdName = (previousId: string): string => {
  const template =
    '0000000000000000000000000000000000000000000000000000000000000000';
  const preparedString = template.substring(
    0,
    template.length - previousId.length,
  );
  // @ts-ignore
  return preparedString + ++previousId;
};
