import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import BlueSide from './BlueSide'
import Notes from './Notes'
import RedSide from './RedSide'
import ChampionsSection from './ChampionsSection'


import {
    fetchChampions, callFilterChampion,
    callBlueSideBanChampion,
    callBlueSidePickChampion,
    callRedSideBanChampion,
    callRedSidePickChampion
} from './championsHelper'

function Champions(props) {
    useEffect(() => {
        fetchChampions(props.dispatch)
    }, [])

    const blueSideTeamName = document.getElementById('blueSideTeamName')
    const redSideTeamName = document.getElementById('redSideTeamName')

    let draft = {
        blueSide: (blueSideTeamName && blueSideTeamName.value),
        blueBan1: (props.blueSideBans[0] && props.blueSideBans[0].id),
        blueBan2: (props.blueSideBans[1] && props.blueSideBans[1].id),
        blueBan3: (props.blueSideBans[2] && props.blueSideBans[2].id),
        blueBan4: (props.blueSideBans[3] && props.blueSideBans[3].id),
        blueBan5: (props.blueSideBans[4] && props.blueSideBans[4].id),
        bluePick1: (props.blueSidePicks[0] && props.blueSidePicks[0].id),
        bluePick2: (props.blueSidePicks[1] && props.blueSidePicks[1].id),
        bluePick3: (props.blueSidePicks[2] && props.blueSidePicks[2].id),
        bluePick4: (props.blueSidePicks[3] && props.blueSidePicks[3].id),
        bluePick5: (props.blueSidePicks[4] && props.blueSidePicks[4].id),
        redSide: (redSideTeamName && redSideTeamName.value),
        redBan1: (props.redSideBans[0] && props.redSideBans[0].id),
        redBan2: (props.redSideBans[1] && props.redSideBans[1].id),
        redBan3: (props.redSideBans[2] && props.redSideBans[2].id),
        redBan4: (props.redSideBans[3] && props.redSideBans[3].id),
        redBan5: (props.redSideBans[4] && props.redSideBans[4].id),
        redPick1: (props.redSidePicks[0] && props.redSidePicks[0].id),
        redPick2: (props.redSidePicks[1] && props.redSidePicks[1].id),
        redPick3: (props.redSidePicks[2] && props.redSidePicks[2].id),
        redPick4: (props.redSidePicks[3] && props.redSidePicks[3].id),
        redPick5: (props.redSidePicks[4] && props.redSidePicks[4].id),
    }

    const championsList = props.champions.map(champion =>
        <>
            <img className='h-10 sm:h-16 md:h-26 lg:h-32' onClick={(e) => handleClick(e, champion)} src={(process.env.PUBLIC_URL + `/images/champPortraits/${champion.name}Square.png`)} />
        </>
    )

    const blueSideBansList = props.blueSideBans.map(champion =>
        <>
            <img className='h-10 sm:h-16 md:h-26 lg:h-32' src={(process.env.PUBLIC_URL + `/images/champPortraits/${champion.name}Square.png`)} />
        </>
    )

    const blueSidePicksList = props.blueSidePicks.map(champion =>
        <>
            <img className='h-10 sm:h-16 md:h-26 lg:h-32' src={(process.env.PUBLIC_URL + `/images/champPortraits/${champion.name}Square.png`)} />
        </>
    )

    const redSideBansList = props.redSideBans.map(champion =>
        <>
            <img className='h-10 sm:h-16 md:h-26 lg:h-32' src={(process.env.PUBLIC_URL + `/images/champPortraits/${champion.name}Square.png`)} />
        </>
    )

    const redSidePicksList = props.redSidePicks.map(champion =>
        <>
            <img className='h-10 sm:h-16 md:h-26 lg:h-32' src={(process.env.PUBLIC_URL + `/images/champPortraits/${champion.name}Square.png`)} />
        </>
    )



    function handleClick(event, champion) {
        const { name } = champion

        const blueBans = document.getElementById('blueBans')
        const bluePicks = document.getElementById('bluePicks')
        const redBans = document.getElementById('redBans')
        const redPicks = document.getElementById('redPicks')

        if (blueBans.childNodes.length === 0) {
            callFilterChampion(props.dispatch, name)
            callBlueSideBanChampion(props.dispatch, champion)
        }
        else if (redBans.childNodes.length === 0) {
            callFilterChampion(props.dispatch, name)
            callRedSideBanChampion(props.dispatch, champion)
        }
        else if (blueBans.childNodes.length === 1) {
            callFilterChampion(props.dispatch, name)
            callBlueSideBanChampion(props.dispatch, champion)
        }
        else if (redBans.childNodes.length === 1) {
            callFilterChampion(props.dispatch, name)
            callRedSideBanChampion(props.dispatch, champion)
        }
        else if (blueBans.childNodes.length === 2) {
            callFilterChampion(props.dispatch, name)
            callBlueSideBanChampion(props.dispatch, champion)
        }
        else if (redBans.childNodes.length === 2) {
            callFilterChampion(props.dispatch, name)
            callRedSideBanChampion(props.dispatch, champion)
        }
        else if (bluePicks.childNodes.length === 0) {
            callFilterChampion(props.dispatch, name)
            callBlueSidePickChampion(props.dispatch, champion)
        }
        else if (redPicks.childNodes.length === 0) {
            callFilterChampion(props.dispatch, name)
            callRedSidePickChampion(props.dispatch, champion)
        }
        else if (redPicks.childNodes.length === 1) {
            callFilterChampion(props.dispatch, name)
            callRedSidePickChampion(props.dispatch, champion)
        }
        else if (bluePicks.childNodes.length === 1) {
            callFilterChampion(props.dispatch, name)
            callBlueSidePickChampion(props.dispatch, champion)
        }
        else if (bluePicks.childNodes.length === 2) {
            callFilterChampion(props.dispatch, name)
            callBlueSidePickChampion(props.dispatch, champion)
        }
        else if (redPicks.childNodes.length === 2) {
            callFilterChampion(props.dispatch, name)
            callRedSidePickChampion(props.dispatch, champion)
        }

        else if (redBans.childNodes.length === 3) {
            callFilterChampion(props.dispatch, name)
            callRedSideBanChampion(props.dispatch, champion)
        }
        else if (blueBans.childNodes.length === 3) {
            callFilterChampion(props.dispatch, name)
            callBlueSideBanChampion(props.dispatch, champion)
        }
        else if (redBans.childNodes.length === 4) {
            callFilterChampion(props.dispatch, name)
            callRedSideBanChampion(props.dispatch, champion)
        }
        else if (blueBans.childNodes.length === 4) {
            callFilterChampion(props.dispatch, name)
            callBlueSideBanChampion(props.dispatch, champion)
        }
        else if (redPicks.childNodes.length === 3) {
            callFilterChampion(props.dispatch, name)
            callRedSidePickChampion(props.dispatch, champion)
        }
        else if (bluePicks.childNodes.length === 3) {
            callFilterChampion(props.dispatch, name)
            callBlueSidePickChampion(props.dispatch, champion)
        }
        else if (bluePicks.childNodes.length === 4) {
            callFilterChampion(props.dispatch, name)
            callBlueSidePickChampion(props.dispatch, champion)
        }
        else if (redPicks.childNodes.length === 4) {
            callFilterChampion(props.dispatch, name)
            callRedSidePickChampion(props.dispatch, champion)
        }
    }

    return <>
        <div className='overflow-y-hidden'>
            <div className='flex flex-wrap text-white h-1/3 w-auto relative'>
                < BlueSide blueSideBansList={blueSideBansList} blueSidePicksList={blueSidePicksList} />
                < Notes draft={draft} />
                < RedSide redSideBansList={redSideBansList} redSidePicksList={redSidePicksList} />
            </div>

            <div className='flex flex-wrap text-white h-3/6 w-full'>
                < ChampionsSection championsList={championsList} />
            </div>
        </div>
    </>
}

function mapStateToProps(state) {
    return {
        champions: state.champions,
        redSideBans: state.redSideBans,
        redSidePicks: state.redSidePicks,
        blueSideBans: state.blueSideBans,
        blueSidePicks: state.blueSidePicks
    }
}

export default connect(mapStateToProps)(Champions)
