import { combineReducers } from 'redux'

import champions from './champions'
import drafts from './drafts'
import redSideBans from './redSideBans'
import blueSideBans from './blueSideBans'
import redSidePicks from './redSidePicks'
import blueSidePicks from './blueSidePicks'

export default combineReducers({
  champions,
  drafts,
  blueSideBans,
  blueSidePicks,
  redSideBans,
  redSidePicks
})