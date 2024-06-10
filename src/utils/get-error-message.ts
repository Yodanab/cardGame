export function getErrorMessage(err: any) {
  return err?.response?.data?.msg || err.message;
}
