export const formatNumber = (num: number | string): string => {
  const numStr = typeof num === "string" ? num : num.toString();
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
