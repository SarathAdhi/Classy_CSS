import React from 'react';
import Docs from '../Docs';
import './sidenavbar.css'

export default function SideNavbar() {
    return (
        <div className='sidenavbar-container'>
            <button>
                Hello
            </button>
            <Docs data = 'hello'/>
        </div>
    )
}
