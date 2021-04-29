import React, {useState} from 'react'

function RedSide(props) {

    const [redSideTeamName, setRedTeamName] = useState('default')

    function handleAddChange (e) {
        const { value } = e.target
        setRedTeamName(value)
      }


    return <div className='flex-auto w-1/3 bg-gray-800  
                            text-white text-right
                            text-sm
                            sm:text-sm
                            md:text-md
                            lg:text-xl
                            xl:text-3xl'>
                    <div className='pt-2 pb-2 pr-2 
                            bg-gradient-to-r from-transparent to-red-500'>
                        <input id = 'redSideTeamName' type='text' placeholder='Team Name' value ={redSideTeamName} onChange = {handleAddChange} className='bg-gray-700 
                            text-sm w-16 mr-2 rounded-md
                            sm:text-sm sm:w-20 sm:mr-4
                            md:text-md md:w-24 md:mr-4
                            lg:text-xl lg:w-32 lg:mr-6
                            xl:text-3xl xl:w-60 xl:mr-10'/>Red Side
                            </div>
                    <h1 className='pt-2 pb-2 pr-2 
                            bg-gradient-to-r from-transparent to-red-500 
                            sm:pr-2
                            md:pr-4
                            lg:pr-10
                            xl:pr-10'> Bans  </h1>
                    <div className='flex flex-wrap h-32' id="redBans">
                        {props.redSideBansList}
                    </div>
                    <h1 className='pt-2 pb-2 pr-2
                            bg-gradient-to-r from-transparent to-red-500 
                            sm:pr-2
                            md:pr-4
                            lg:pr-10
                            xl:pr-10'>
                        Picks </h1>
                    <div className='flex flex-wrap h-32' id="redPicks">
                        {props.redSidePicksList}
                    </div>
                </div>
}

export default RedSide
