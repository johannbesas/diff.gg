import { getChampions } from '../api/champions'
import { fetchChampionsPending, fetchChampionsSuccess, filterChampion } from '../actions/champions'

import { redBanChampion} from '../actions/redSideBans'
import { redSidePickChampion } from '../actions/redSidePicks'

import { blueBanChampion } from '../actions/blueSideBans'
import { blueSidePickChampion } from '../actions/blueSidePicks'

export function fetchChampions (dispatch) {
    dispatch(fetchChampionsPending())
    return getChampions()
    .then((champions) => {
        dispatch(fetchChampionsSuccess(champions))
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

export function callFilterChampion (dispatch, name) {
  dispatch(filterChampion(name))
}

export function callRedSideBanChampion (dispatch, name) {
  dispatch(redBanChampion(name))
}

export function callRedSidePickChampion (dispatch, name) {
  dispatch(redSidePickChampion(name))
}

export function callBlueSideBanChampion (dispatch, name) {
  dispatch(blueBanChampion(name))
}

export function callBlueSidePickChampion (dispatch, name) {
  dispatch(blueSidePickChampion(name))
}
