import { REDBAN_CHAMPION } from '../actions/redSideBans'

function redSideBans(state = [], action) {
    switch (action.type) {
        case REDBAN_CHAMPION:
            return [...state, action.name]
        default:
            return state
    }
}

export default redSideBans