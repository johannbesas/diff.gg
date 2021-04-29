export const BLUEBAN_CHAMPION = 'BLUEBAN_CHAMPION'

export function blueBanChampion (name) {
  return {
    type: BLUEBAN_CHAMPION,
    name: name
  }
}