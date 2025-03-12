const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  const scuberDrivers = ["Amos", "Banda", "Nyakundi", "Shon"];
  console.log(returnFirstTwoDrivers(scuberDrivers));

  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4);
  };
  
  console.log(returnLastTwoDrivers(scuberDrivers)); 
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
 
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);

  const selectDifferentDrivers = function(drivers, driverSelectorFunction) {
    return driverSelectorFunction(drivers);
  };

console.log(selectingDrivers[0](scuberDrivers)); 
console.log(selectingDrivers[1](scuberDrivers)); 
console.log(fareDoubler(10)); 
console.log(fareTripler(10)); 

console.log(selectDifferentDrivers(scuberDrivers, returnFirstTwoDrivers)); 
console.log(selectDifferentDrivers(scuberDrivers, returnLastTwoDrivers));