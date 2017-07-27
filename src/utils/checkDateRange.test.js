import checkDateRange from './checkDateRange';

describe('Check Date Range', () => {
  // may need to bind these to it functions
  let testStartDate = new Date(2016, 5, 26) 
  let testEndDate = new Date(2017, 1, 8);
  
  // negative tests
  it('Returns false for date under range', () => {
    let dateToTest = new Date(2015, 4, 10)
    expect(checkDateRange(dateToTest,testStartDate,testEndDate)).toEqual(false);
  });
  
  it('Returns false for date over range', () => {
    let dateToTest = new Date(2018, 1, 1)
    expect(checkDateRange(dateToTest,testStartDate,testEndDate)).toEqual(false);
  });
  
  // positive tests
  it('Returns true for date in middle of range', () => {
    let dateToTest = new Date(2016, 11, 5)
    expect(checkDateRange(dateToTest,testStartDate,testEndDate)).toEqual(true);  
  });
  
  it('Returns true for date in upper bounds of range', () => {
    let dateToTest = new Date(2017, 1, 8)
    expect(checkDateRange(dateToTest,testStartDate,testEndDate)).toEqual(true);  
  });
  
  it('Returns true for date in lower bounds of range', () => {
    let dateToTest = new Date(2016, 5, 26)
    expect(checkDateRange(dateToTest,testStartDate,testEndDate)).toEqual(true);  
  });
      
});