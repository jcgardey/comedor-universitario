export const range = (start, end) => {
  let ans = [];
  for (let i = start; i <= end; i++) {
    ans.push(i);
  }
  return ans;
};

export const dateToISOString = (date) => date.toISOString().slice(0, 10);

export const dateToLocalString = (date) =>
  `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

export const stringToDate = (aString) =>
  new Date(
    aString.slice(6, 10),
    parseInt(aString.slice(3, 5) - 1),
    aString.slice(0, 2)
  );
