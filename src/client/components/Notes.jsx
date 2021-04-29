import React from 'react'

import { addDraft } from '../api/drafts'

function Notes(props) {
    let { draft } = props

    function handleSubmit(e) {
        // e.preventDefault()
        // console.log(draft)
        addDraft(draft)
    }

    return <div className='flex-auto w-1/3 justify-center bg-gray-800 text-sm
            sm:text-sm
            md:text-md
            lg:text-xl
            xl:text-3xl'>
        <div className='pt-2 pb-2
            bg-gradient-to-r
            text-white text-center'>
            Notes
    </div>
        <form className='flex flex-wrap h-2/3 justify-center' onSubmit={handleSubmit}>
            <textarea type='text' className='h-4/6 w-11/12 bg-gray-700 text-white rounded-md resize-none' />
            <input type='submit' className='w-3/12 h-8 text-sm bg-gray-700 text-white rounded-md' value="Submit" />
        </form>
    </div>
}

export default Notes