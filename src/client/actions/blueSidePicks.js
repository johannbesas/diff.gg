export const BLUESIDEPICK_CHAMPION = 'BLUESIDEPICK_CHAMPION'

export function blueSidePickChampion (name) {
  return {
    type: BLUESIDEPICK_CHAMPION,
    name: name
  }
}