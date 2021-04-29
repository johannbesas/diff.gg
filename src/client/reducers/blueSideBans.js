import { BLUEBAN_CHAMPION } from '../actions/blueSideBans'

function blueSideBans(state = [], action) {
    switch (action.type) {
        case BLUEBAN_CHAMPION:
            return [...state, action.name]
        default:
            return state
    }
}

export default blueSideBans