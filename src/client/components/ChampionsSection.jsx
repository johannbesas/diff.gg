import React from 'react'

function ChampionsSection(props) {
    return <div className=' w-auto contents-center bg-gray-800'>
    <h1 className='pt-2 pb-2 pl-10 bg-gradient-to-r from-blue-500 via-transparent to-red-500  text-white
                xl:text-3xl
                lg:text-xl
                md:text-md
                sm:text-sm'> Champions </h1>
    <div id='champions' className='pt-6 flex flex-wrap overflow-auto overscroll-contain justify-center 
    sm:h-3/6 
    md:h-3/6 
    lg:h-5/6
    xl: '>
        {props.championsList}
    </div>
</div>
}

export default ChampionsSection