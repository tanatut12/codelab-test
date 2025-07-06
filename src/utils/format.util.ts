export const formatNumber = (num: number | string): string => {
  const numStr = typeof num === "string" ? num : num.toString();
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatNumberWithSuffix = (
  num: number | string,
  useCommas: boolean = true
): string => {
  const numValue = typeof num === "string" ? parseFloat(num) : num;

  // Handle invalid numbers
  if (isNaN(numValue)) return "0";

  // Handle negative numbers
  const isNegative = numValue < 0;
  const absNum = Math.abs(numValue);

  let formattedNum: string;

  // Define thresholds and suffixes
  if (absNum >= 1000000000) {
    // Billions
    formattedNum = (absNum / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
  } else if (absNum >= 1000000) {
    // Millions
    formattedNum = (absNum / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (absNum >= 1000) {
    // Thousands
    formattedNum = (absNum / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  } else {
    // Less than 1000 - use comma formatting if requested
    if (useCommas) {
      formattedNum = formatNumber(absNum);
    } else {
      formattedNum = absNum.toString();
    }
  }

  return isNegative ? "-" + formattedNum : formattedNum;
};
