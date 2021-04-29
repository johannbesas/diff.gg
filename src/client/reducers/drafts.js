import { FETCH_DRAFTS_SUCCESS } from '../../client/actions/drafts'

function drafts(state = [], action) {
    switch (action.type) {
        case FETCH_DRAFTS_SUCCESS:
            return action.drafts
        default:
            return state
    }
}

export default drafts