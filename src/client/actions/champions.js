export const FETCH_CHAMPIONS_PENDING = 'FETCH_CHAMPIONS_PENDING'
export const FETCH_CHAMPIONS_SUCCESS = 'FETCH_CHAMPIONS_SUCCESS'
export const FILTER_CHAMPION = 'FILTER_CHAMPION'
export const REDBAN_CHAMPION = 'REDBAN_CHAMPION'

export function fetchChampionsPending () {
  return {
    type: FETCH_CHAMPIONS_PENDING
  }
}

export function fetchChampionsSuccess (champions) {
  return {
    type: FETCH_CHAMPIONS_SUCCESS,
    champions: champions
  }
}

export function filterChampion (name) {
  return {
    type: FILTER_CHAMPION,
    name: name
  }
}