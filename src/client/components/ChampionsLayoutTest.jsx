import React, { useState, useEffect } from 'react'
import championsData from '../../data/champions'

// import store from '../store'
function ChampionsLayoutTest() {


    // const state = store.getState()
    // const champions = state.champions.champions

    // const championsList = championsData.Champions.map(champion =>
    //     <>
    //         <img className='h-10 sm:h-16 md:h-26 lg:h-32' src={(process.env.PUBLIC_URL + `/images/champPortraits/${champion.name}Square.png`)} />
    //     </>
    // )

    // const [champions, setList] = useState(championsList)

    return <>
        <div className='w-screen h-screen bg-gray-800 text-white text-xs'>
            <div className='flex h-1/3'>
                <div className='w-1/3'>
                    <div className='bg-gradient-to-r from-red-500 to-transparent'>Red Side</div>
                    <div className='h-1/2'>
                    <div className='bg-gradient-to-r from-red-500 to-transparent'>Red Bans</div>
                    </div>
                    <div className='h-1/2'>
                    <div className='bg-gradient-to-r from-red-500 to-transparent'>Red Picks</div>
                    </div>
                </div>

                <div className='w-1/3 text-xs text-center'>Notes</div>

                <div className='w-1/3 text-right'>
                    <div className='bg-gradient-to-r from-transparent to-blue-500'>Blue Side</div>
                    <div className='h-1/2'>
                    <div className='bg-gradient-to-r from-transparent to-blue-500'>Blue Bans</div>
                    </div>
                    <div className='h-1/2'>
                    <div className='bg-gradient-to-r from-transparent to-blue-500'>Blue Picks </div>
                    </div>
                </div>
            </div>


            <div className='absolute'>
                <div className ='bg-gradient-to-r from-red-500 to-blue-500 text-center'>
                CHAMPIONS</div>
                <div className ='overflow-y' ><p>test</p></div>
            </div>
        </div>
    </>
}

export default ChampionsLayoutTest
