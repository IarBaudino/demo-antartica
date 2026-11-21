/** Sin secret de auth el sitio corre como demostración navegable. */
export function isDemoMode(): boolean {
  return process.env.DEMO_MODE === "true" || !process.env.NEXTAUTH_SECRET;
}
