import request from 'superagent'

export function getDrafts() {
  return request.get('http://localhost:3001/api/v1/drafts')
    .then((res) => res.body)
}

export function addDraft(jsonDraft){
  return request.post('http://localhost:3001/api/v1/drafts')
    .send(jsonDraft)
    .then((res) => res.body)
}