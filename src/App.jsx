import React, { useEffect } from 'react'
import {Navbar,Welcome,Dock, Home} from './components';
import gsap from 'gsap';
import { Draggable } from 'gsap/all';
import { Finder, Resume, Safari, Terminal, Text, Image, Contact } from './windows';


gsap.registerPlugin(Draggable);

const App = () => {
  useEffect(() => {
    document.body.classList.add('boot-complete')
    return () => document.body.classList.remove('boot-complete')
  }, [])

  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>

      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Contact/>
      <Home/>
    </main>
  )
}



export default App;
