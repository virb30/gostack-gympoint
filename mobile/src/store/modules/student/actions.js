export function signInRequest(id) {
  return {
    type: '@student/SIGN_IN_REQUEST',
    payload: { id },
  };
}

export function signInSuccess(id) {
  return {
    type: '@student/SIGN_IN_SUCCESS',
    payload: { id },
  };
}

export function signInFailure() {
  return {
    type: '@student/SIGN_IN_FAILURE',
  };
}
