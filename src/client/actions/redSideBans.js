export const REDBAN_CHAMPION = 'REDBAN_CHAMPION'

export function redBanChampion (name) {
  return {
    type: REDBAN_CHAMPION,
    name: name
  }
}
