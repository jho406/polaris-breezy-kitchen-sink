export function clearSubmissionErrors (pageKey) {
  return {
    type: 'CLEAR_SUBMISSION_ERRORS',
    payload: {
      pageKey
    }
  }
}

export function updateAllPostFragments(id, body) {
  return {
    type: 'UPDATE_ALL_POST_FRAGMENTS',
    payload: {
      id,
      body
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

export function clearPreloaded(pageKey) {
  return {
    type: 'CLEAR_PRELOADED',
    payload: {
      pageKey
    }
  }
}
