import React from 'react'
import { resourcesLinks } from '../constants'
import { platformLinks } from '../constants'
import { communityLinks } from '../constants'
const Footer = () => {
  return (
<>
<footer className='mt-20 border-t-4 py-10 bg-neutral-800 border-neutral-700'>
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className='ml-5'>
       
        <ul> <h3 className=' text-left text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-orange-800
        text-transparent bg-clip-text'>
            Resources
        </h3>
            {resourcesLinks.map((resource,index)=>(
                <li className="mt-2" key={index}>
                    <a className="no-underline  text-neutral-500 hover:text-white"href={resource.href}>{resource.text}</a>
                    </li>
            ))}
        </ul></div>
        <div className='ml-5'>
       
        <ul> <h3 className=' text-left text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-orange-800        
         text-transparent bg-clip-text'>

            Platform
        </h3>
            {platformLinks.map((resource,index)=>(
                <li className="mt-2" key={index}>
                    <a className="no-underline  text-neutral-500 hover:text-white"href={resource.href}>{resource.text}</a>
                    </li>
            ))}
        </ul></div>
        <div className='ml-5'>
       
        <ul> <h3 className=' text-left text-md font-semibold mb-4 bg-gradient-to-r from-orange-500 to-orange-800 
                text-transparent bg-clip-text'>

            Community
        </h3>
            {communityLinks.map((resource,index)=>(
                <li className="mt-2" key={index}>
                    <a className="no-underline  text-neutral-500 hover:text-white"href={resource.href}>{resource.text}</a>
                </li>
            ))}
        </ul></div>
    </div>
</footer>
</>
  )
}

export default Footer
