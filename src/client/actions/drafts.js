export const FETCH_DRAFTS_PENDING = 'FETCH_DRAFTS_PENDING'
export const FETCH_DRAFTS_SUCCESS = 'FETCH_DRAFTS_SUCCESS'

export function fetchDraftsPending () {
  return {
    type: FETCH_DRAFTS_PENDING
  }
}

export function fetchDraftsSuccess (drafts) {
  return {
    type: FETCH_DRAFTS_SUCCESS,
    drafts: drafts
  }
}