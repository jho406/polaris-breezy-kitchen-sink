export function clearSubmissionErrors (pageKey) {
  return {
    type: 'CLEAR_SUBMISSION_ERRORS',
    payload: {
      pageKey
    }
  }
}

export function clearToast(pageKey) {
  return {
    type: 'CLEAR_TOAST',
    payload: {
      pageKey
    }
  }
}
