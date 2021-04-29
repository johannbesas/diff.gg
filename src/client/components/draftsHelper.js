import { getDrafts } from '../api/drafts'
import { fetchDraftsPending, fetchDraftsSuccess} from '../actions/drafts'

export function fetchDrafts (dispatch) {
    dispatch(fetchDraftsPending())
    return getDrafts()
    .then((drafts) => {
        dispatch(fetchDraftsSuccess(drafts))
        return null
    })
    .catch((err) => {
    // if the error is from our routes, this will use the message our route
    // sends back, rather than the generic 'Internal Server Error' from a
    // status 500
    // if the error is from elsewhere in the Promise chain, there won't be
    // an err.response object, so we use err.message
    const errMessage = err.response?.text || err.message
    // dispatch(showError(errMessage))
    return null
  })
}
