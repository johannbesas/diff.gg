import './tailwind.css'
import React from 'react';
import { Route } from 'react-router-dom'


import Header from './client/components/Header'
import NavBar from './client/components/NavBar'
import Search from './client/components/Search'
import Champions from './client/components/Champions'
import ChampionsLayoutTest from './client/components/ChampionsLayoutTest'
import Drafts from './client/components/Drafts'
import Layout from './client/components/Layout'

function App() {
  return (
    <div className ='h-screen bg-gray-800'>
      <Header />
      <div className='flex overflow-hidden flex-row'>
        <Route path='/' className='' component={NavBar} />
        <Route exact path='/' component={Search} />
        <Route exact className='' path='/Champions'>
          <Champions />
        </Route>
        <Route exact path='/drafts' component={Drafts} />
        <Route exact path='/layout' component={Layout} />
        <Route exact path='/ChampionsLayoutTest'  className='' component={ChampionsLayoutTest} />
      </div>
    </div>
  )
}
export default App;
