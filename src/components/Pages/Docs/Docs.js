import React, { useState } from 'react';
import './docs.css';
import './SideNavbar/sidenavbar.css'
import {sideNavbarData} from '../../Common/Data/sideNavbarData';
import DocsContainer from './Container/DocsContainer';

export default function Docs() {
    
    const [docsReadData, setDocsReadData] = useState('')
    var currentReadingDocs = localStorage.getItem("currentReadingDocs")
    if(!currentReadingDocs) {
        localStorage.setItem("currentReadingDocs", "Installation");
    }
    function changeDocs(title) {
        localStorage.setItem("currentReadingDocs", title);
        setDocsReadData(title)
    }

    return (
        <div className='docs-page'>
            <div className='sidenavbar-container'>
                {sideNavbarData.map((ele) => {
                    return (
                        <div key={ele.title}>
                            <h3>{ele.title}</h3>
                            {ele.subtopics.map((e) => {
                                return <button key={e} onClick={() => changeDocs(e)}>{e}</button>
                            })}
                        </div>
                    )
                })}
            </div>
           <DocsContainer data = {currentReadingDocs} />
        </div>
    )
}
