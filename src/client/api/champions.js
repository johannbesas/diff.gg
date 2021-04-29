import request from 'superagent'

export function getChampions() {
  return request.get('http://localhost:3001/api/v1/champions')
    .then((res) => res.body)
}
