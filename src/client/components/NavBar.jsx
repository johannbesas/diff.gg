import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return <>
        <div className='pt-2 pb-2 pl-4 pr-4 bg-gray-800 bg-gradient-to-r from-transparent to-transparent  text-white
    xl:text-xl
    lg:text-xl
    md:text-md
    sm:text-sm'>
            {/* <Link to='/'><h1 className=''>==</h1></Link> */}
            <ul>
                <Link to='/Champions'><li>Champions</li></Link>
                <Link to='/ChampionsLayoutTest'><li>Champions Layout Test</li></Link>
                <Link to='/TierList'><li>Tier List</li></Link>
                <Link to='/Stats'><li>Stats</li></Link>
                <Link to='/Leaderboards'><li>Leaderboards</li></Link>
                <Link to='/Multi-Search'><li>Multi-Search</li></Link>
                <Link to='/Drafts'><li>Drafts</li></Link>
                <Link to='/Layout'><li>Layout</li></Link>
            </ul>
        </div>
    </>
}

export default NavBar
