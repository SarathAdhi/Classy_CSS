import React, { useState } from 'react';
import './docs.css';
import './SideNavbar/sidenavbar.css'
import {sideNavbarData} from '../../Common/Data/sideNavbarData';
import DocsContainer from './Container/DocsContainer';

export default function Docs() {
    
    const [docsReadData, setDocsReadData] = useState('Installation')
    const currentReadingDocs = localStorage.getItem("currentReadingDocs")
    if(!currentReadingDocs) {
        localStorage.setItem("currentReadingDocs", "Installation");
    }
    function changeDocs(title) {
        if(currentReadingDocs)
            document.getElementById(`${currentReadingDocs.replace(' ', '')}`).classList.remove('active-field')

        localStorage.setItem("currentReadingDocs", title);
        document.getElementById(`${title.replace(' ', '')}`).classList.add('active-field')
        setDocsReadData(title)
    }

    return (
        <div className='docs-page'>
            <div className='sidenavbar-container'>
                {sideNavbarData.map((ele) => {
                    return (
                        <div className='' key={ele.title}>
                            <h2 className='cl-white'>{ele.title}</h2>
                            {ele.subtopics.map((e) => {
                                return <button className='docs-sidenavbar-btn' id={e.replace(' ', '')} key={e} onClick={() => changeDocs(e)}>{e}</button>
                            })}
                        </div>
                    )
                })}
            </div>
           <DocsContainer data = {currentReadingDocs || docsReadData} />
        </div>
    )
}
