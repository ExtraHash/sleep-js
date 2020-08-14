/**
 * Sleeps for a specified time in milliseconds.
 *
 * @param ms - The amount of milliseconds to sleep.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
