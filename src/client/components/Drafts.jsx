import React, { useEffect } from 'react'
import { connect } from 'react-redux'


import { } from '../actions/champions'
import { } from '../actions/drafts'

import { fetchChampions } from './championsHelper'
import { fetchDrafts } from './draftsHelper'


function Drafts(props) {

    useEffect(() => {
        fetchChampions(props.dispatch)
        fetchDrafts(props.dispatch)
    }, [])


    function displayChamp(id){
       const championName = props.champions.filter(champion => champion.id === id)[0].name
       return <img src={(process.env.PUBLIC_URL + `/images/champPortraits/${championName}Square.png`)}></img>
    }

    return <>
        <div className='flex-auto'>
            <h1 className='pt-2 pb-2 pl-10             
    bg-gradient-to-r from-red-400 to-blue-400
            via-transparent
            text-white
    xl:text-3xl
    lg:text-xl
    md:text-md
    sm:text-sm'>Drafts</h1>
            <div className='flex flex-wrap content-center items-center justify-left'>
                {props.drafts.map(draft =>
                    <div className='flex space-x-2 flex-nowrap mt-10 ml-10 text-lg text-white bg-gradient-to-r from-red-400 via-transparent to-blue-400'>
                        Match {draft.id}: {draft.redSide} vs {draft.blueSide}
                        <div className =''>
                            Red Bans: {displayChamp(draft.redBan1)} {displayChamp(draft.redBan2)} {displayChamp(draft.redBan3)} {displayChamp(draft.redBan4)} {displayChamp(draft.redBan5)}
                        </div>
                        <div className =''>
                            Red Picks: {displayChamp(draft.redPick1)} {displayChamp(draft.redPick2)} {displayChamp(draft.redPick3)} {displayChamp(draft.redPick4)} {displayChamp(draft.redPick5)}
                        </div>
                        <div className =''>
                            Blue Bans: {displayChamp(draft.blueBan1)} {displayChamp(draft.blueBan2)} {displayChamp(draft.blueBan3)} {displayChamp(draft.blueBan4)} {displayChamp(draft.blueBan5)}
                        </div>
                        <div className =''>
                            Blue Picks: {displayChamp(draft.bluePick1)} {displayChamp(draft.bluePick2)} {displayChamp(draft.bluePick3)} {displayChamp(draft.bluePick4)} {displayChamp(draft.bluePick5)}
                        </div>
                    </div>)}
            </div>
        </div>
    </>
}

function mapStateToProps(state) {
    return {
        champions: state.champions,
        drafts: state.drafts
    }
}

export default connect(mapStateToProps)(Drafts)
