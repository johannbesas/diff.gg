import { REDSIDEPICK_CHAMPION } from '../actions/redSidePicks'

function redSidePicks(state = [], action) {
    switch (action.type) {
        case REDSIDEPICK_CHAMPION:
            return [...state, action.name]
        default:
            return state
    }
}

export default redSidePicks