import React, {useState} from 'react'

function BlueSide(props) {

    const [blueSideTeamName, setBlueTeamName] = useState('default')

    function handleAddChange (e) {
        const { value } = e.target
        setBlueTeamName(value)
      }

    return <div className='flex-auto w-1/3 bg-gray-800
            text-sm
            sm:text-sm
            md:text-md
            lg:text-xl
            xl:text-3xl
            '>
            <div className='pt-2 pb-2 pl-2 bg-gradient-to-r from-blue-500 to-transparent
                            sm:pl-2
                            md:pl-4
                            lg:pl-10
                            xl:pl-10'>Blue Side
                            <input id = 'blueSideTeamName' type='text' placeholder='Team Name' value ={blueSideTeamName} onChange = {handleAddChange} className='bg-gray-700 
                            text-sm w-16 ml-2 rounded-md
                            sm:text-sm sm:w-20 sm:ml-4
                            md:text-md md:w-24 md:ml-4
                            lg:text-lg lg:w-32 lg:ml-6
                            xl:text-3xl xl:w-60 xl:ml-10' />
            </div>
            <h1 className='pt-2 pb-2 pl-2 bg-gradient-to-r from-blue-500 to-transparent		
                            sm:pl-2
                            md:pl-4
                            lg:pl-10
                            xl:pl-10'> Bans  </h1>
            <div className='flex flex-wrap h-32' id="blueBans">
                {props.blueSideBansList}
            </div>
            <h1 className='pt-2 pb-2 pl-2
                            bg-gradient-to-r from-blue-500 to-transparent
                            sm:pl-2
                            md:pl-4
                            lg:pl-10
                            xl:pl-10'> Picks  </h1>
            <div className='flex flex-wrap h-32' id="bluePicks">
                {props.blueSidePicksList}
            </div>
        </div>
}


export default BlueSide
