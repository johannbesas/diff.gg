import { BLUESIDEPICK_CHAMPION } from '../actions/blueSidePicks'

function blueSidePicks(state = [], action) {
    switch (action.type) {
        case BLUESIDEPICK_CHAMPION:
            return [...state, action.name]
        default:
            return state
    }
}

export default blueSidePicks