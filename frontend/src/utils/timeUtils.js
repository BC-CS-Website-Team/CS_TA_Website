/**
 * timeUtils.js
 * Utility functions for handling time formatting and calculations.
 */

/**
 * Formats decimal time to HH:MM format
 * @param {number} decimalTime - Time in decimal format (e.g., 13.5 for 1:30 PM)
 * @returns {string} Time in HH:MM format
 */
export const formatTime = (decimalTime) => {
  const hours = Math.floor(decimalTime)
  const minutes = Math.round((decimalTime - hours) * 60)
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
}

/**
 * Converts 24-hour time to 12-hour format with AM/PM
 * @param {string} time24 - Time in 24-hour format (HH:MM)
 * @returns {string} Time in 12-hour format with AM/PM
 */
export const convertTo12Hour = (time24) => {
  const [hours, minutes] = time24.split(':').map(Number)
  const period = hours >= 12 ? 'PM' : 'AM'
  const hours12 = hours % 12 || 12
  return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`
}
