import { parsePhoneNumber, type PhoneNumber, AsYouType } from "libphonenumber-js";

/**
 * Normalizes a phone number to E.164 format if possible.
 * If the number cannot be parsed or normalized, returns the original input.
 * 
 * @param phoneNumber - The phone number string to normalize
 * @param defaultRegion - Optional ISO 3166-1 alpha-2 country code (e.g., "US", "CA")
 * @returns E.164 formatted number or original input if normalization fails
 */
export function normalizePhoneNumber(
  phoneNumber: string,
  defaultRegion?: string
): string {
  if (!phoneNumber || !phoneNumber.trim()) {
    return phoneNumber;
  }

  try {
    // Try to parse the phone number
    const parsed = parsePhoneNumber(phoneNumber, defaultRegion as any);
    
    // If parsing succeeds, return in E.164 format
    if (parsed && parsed.isValid()) {
      return parsed.format("E.164");
    }
  } catch (error) {
    // If parsing fails, try with AsYouType to get a hint
    // This is useful for partial numbers or formats we can't parse
  }

  // If normalization fails, return original (server will validate)
  return phoneNumber.trim();
}

/**
 * Validates if a phone number appears to be in a valid format.
 * This is a client-side check; server should do full validation.
 * 
 * @param phoneNumber - The phone number string to validate
 * @returns true if the number appears valid, false otherwise
 */
export function isValidPhoneFormat(phoneNumber: string): boolean {
  if (!phoneNumber || !phoneNumber.trim()) {
    return false;
  }

  try {
    const parsed = parsePhoneNumber(phoneNumber);
    return parsed.isValid();
  } catch {
    return false;
  }
}

/**
 * Formats a phone number for display purposes.
 * 
 * @param phoneNumber - The phone number string to format
 * @param defaultRegion - Optional ISO 3166-1 alpha-2 country code
 * @returns Formatted number for display or original if formatting fails
 */
export function formatPhoneForDisplay(
  phoneNumber: string,
  defaultRegion?: string
): string {
  if (!phoneNumber || !phoneNumber.trim()) {
    return phoneNumber;
  }

  try {
    const parsed = parsePhoneNumber(phoneNumber, defaultRegion as any);
    if (parsed && parsed.isValid()) {
      return parsed.formatInternational();
    }
  } catch {
    // If formatting fails, return original
  }

  return phoneNumber;
}

