import React from 'react'
import WindowWrapper from '../hoc/WindowWrapper'
import { socials } from '../constants'
import { WindowControls } from '../components'

const Contact = () => {

  return <>
    <div id='window-header'>
        <WindowControls target="contact"/>
        <h2>Contact me</h2>
    </div>

    <div className='p-5 space-y-5'>
        <img src='/images/Myself.jpeg' alt='Myself'className='w-20 rounded-full flex items-center'  />
        <h3>Let's connect!</h3>
        <p>dhulipalakoushik5@gmail.com</p>

        <ul>
            {socials.map(({id,bg,link,icon,text}) => (
                <li key={id} style={{backgroundColor:bg}} >
                    <a href={link} target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 p-2 rounded-lg text-white'>
                        <img src={icon} alt={text} className='size-5'/>
                        <p>{text}</p>
                    </a>
                </li>
            ))}
        </ul>
    </div>

  </>
}

const ContactWindow = WindowWrapper(Contact, 'contact')
export default ContactWindow;
