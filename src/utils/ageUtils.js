export function calculateAge(year, month = null, day = null) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  let age = currentYear - year;

  if (month !== null && day !== null) {
    if (currentMonth < month || 
        (currentMonth === month && currentDay < day)) {
      age--;
    }
  }

  return `${age} ${getYearWord(age)}`;
}

export function getYearWord(years) {
  const lastDigit = years % 10;
  const lastTwoDigits = years % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return 'лет';
  }
  
  if (lastDigit === 1) {
    return 'год';
  }
  
  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'года';
  }
  
  return 'лет';
}