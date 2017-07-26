/*
 * 2017-07-23
 * 
 * Takes in dates for notes date and returns true if notesDate is in between search start and end
 *
 */

export const checkDateRange = (notesDate, startDate, endDate) => {
  notesDate.toString();
  let checkDate = new Date(notesDate);
  
  return (checkDate >= startDate && checkDate.setHours(0,0,0,0) <= endDate);
};