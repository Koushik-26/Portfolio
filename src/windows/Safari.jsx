import React from 'react'
import { WindowControls } from '../components'
import WindowWrapper from '../hoc/WindowWrapper';
import {blogPosts} from '../constants';
import {PanelLeft,ChevronLeft, ChevronRight, ShieldHalf, Search, Share, Plus, Copy} from "lucide-react";
const Safari = () => {
    
  return <>
    <div id='window-header'>
        <WindowControls target= "safari" />

        <PanelLeft className='ml-10 icon'/>

        <div className='flex items-center gap-1 ml-5'>
            <ChevronLeft className='icon'/>
            <ChevronRight className='icon'/>
        </div>

        <div className='flex-1 flex-center gap-3'>
            <ShieldHalf className='icon'/>

            <div className='search'>
                <Search className='icon'/>

                <input type="text" placeholder='Search or enter website name'  className='flex-1'/>

            </div>
        </div>


        <div className='flex items-center gap-5'>
            <Share className='icon'/>
            <Plus className='icon'/>
            <Copy className='icon'/>

        </div>
    </div>

    <div className='blog'>
        <h2 >My Certifications</h2>
        <div className='space-y-8'>  
            {blogPosts.map(({id,image,title}) => (
                <div key={id} className='blog-post'>
                    <img src={image} alt={title} className='blog-image'/>
                    <h3 className='blog-title'>{title}</h3>
                </div>
            ))}
        </div>
    </div>
  </>
}
//EDIT LATER FOR MORE CONTENT
const SafariWindow = WindowWrapper(Safari, 'safari');
export default SafariWindow;
