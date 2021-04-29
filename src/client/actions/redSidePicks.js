export const REDSIDEPICK_CHAMPION = 'REDSIDEPICK_CHAMPION'


export function redSidePickChampion (name) {
  return {
    type: REDSIDEPICK_CHAMPION,
    name: name
  }
}