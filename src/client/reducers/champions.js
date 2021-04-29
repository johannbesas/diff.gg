import { FETCH_CHAMPIONS_SUCCESS, FILTER_CHAMPION } from '../../client/actions/champions'

function champions(state = [], action) {
    switch (action.type) {
        case FETCH_CHAMPIONS_SUCCESS:
            return action.champions
        case FILTER_CHAMPION:
            return state.filter(champion => champion.name !== action.name)
        default:
            return state
    }
}

export default champions