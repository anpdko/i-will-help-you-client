
const subText = (str: string, n: number) => {
  return str.length > n ? str.substring(0, n) + '...' : str;
};

export { subText };
