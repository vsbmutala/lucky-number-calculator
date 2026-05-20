/**
 * Calculates the lucky number from a date of birth
 * Logic: Sum all digits of the date until a single digit is reached
 * Example: 2001-11-08 -> 2+0+0+1+1+1+0+8 = 13 -> 1+3 = 4
 */

export function calculateLuckyNumber(dateOfBirth: Date): number {
  // Format date as YYYY-MM-DD
  const year = dateOfBirth.getFullYear();
  const month = String(dateOfBirth.getMonth() + 1).padStart(2, '0');
  const day = String(dateOfBirth.getDate()).padStart(2, '0');
  
  const dateString = `${year}${month}${day}`;
  
  // Sum all digits
  let sum = 0;
  for (const char of dateString) {
    sum += parseInt(char, 10);
  }
  
  // Reduce to single digit
  while (sum >= 10) {
    let newSum = 0;
    const sumString = sum.toString();
    for (const char of sumString) {
      newSum += parseInt(char, 10);
    }
    sum = newSum;
  }
  
  return sum;
}

/**
 * Validates if a date is valid for lucky number calculation
 * Date must be in the past and not today
 */
export function isValidDateOfBirth(date: Date): boolean {
  const now = new Date();
  const inputDate = new Date(date);
  
  // Check if date is valid
  if (isNaN(inputDate.getTime())) {
    return false;
  }
  
  // Date must be in the past
  return inputDate < now;
}
