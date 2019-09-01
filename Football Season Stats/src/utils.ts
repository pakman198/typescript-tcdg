export const dateStringToDate = (dateString: string): Date => {

  // 28/10/2018
  const dateParts = dateString
  .split('/')
  .map((val: string): number => parseInt(val));

  const [year, month, day] = dateParts;

  return new Date(day, month-1, year);
}