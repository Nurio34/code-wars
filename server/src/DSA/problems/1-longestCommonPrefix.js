export const longestCommonPrefix = function (strs) {
  let prefix = "";
  let result = "";

  strs.forEach((string, index) => {
    prefix = result;
    if (index === 0) prefix = string;
    const next = strs[index + 1];

    if (!next) return;
    const loopIn = prefix.length > next.length ? next : prefix;

    for (let i = 0; i < loopIn.length; i++) {
      if (i === 0 && prefix.slice(0, 1) !== next.slice(0, 1)) {
        return (result = "");
      }

      if (prefix.slice(0, i + 1) === next.slice(0, i + 1)) {
        result = prefix.slice(0, i + 1);
      }
    }
  });
  return result;
};
