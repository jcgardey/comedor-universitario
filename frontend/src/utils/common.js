export const range = (start, end) => {
  let ans = [];
  for (let i = start; i <= end; i++) {
    ans.push(i);
  }
  return ans;
};

export const dateToISOString = (date) => date.toISOString().slice(0, 10);

export const ISOStringToDate = (aString) =>
  new Date(
    aString.slice(0, 4),
    parseInt(aString.slice(5, 7)) - 1,
    aString.slice(8, 10)
  );

// returns a string with a dd/mm/yyyy pattern
export const dateToLocalString = (date) =>
  `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

// converts a dd/mm/yyyy string to Date
export const stringToDate = (aString) => {
  console.log(
    new Date(
      aString.slice(6, 10),
      parseInt(aString.slice(3, 5) - 1),
      aString.slice(0, 2)
    )
  );
  return new Date(
    aString.slice(6, 10),
    parseInt(aString.slice(3, 5) - 1),
    aString.slice(0, 2)
  );
};

export const areSameDay = (aDate, anotherDate) =>
  aDate.getDate() === anotherDate.getDate() &&
  aDate.getMonth() === anotherDate.getMonth() &&
  aDate.getFullYear() === anotherDate.getFullYear();

export const ISOtoLocalDate = (aString) =>
  `${aString.slice(8, 10)}/${aString.slice(5, 7)}/${aString.slice(0, 4)}`;
