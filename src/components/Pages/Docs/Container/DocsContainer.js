import React from 'react'
import './docs-container.css';
import { stylesData } from '../../../Common/Data/stylesData';

export default function DocsContainer(props) {
    return (
        <div className='docs-read-container'>
            {stylesData.map((element) => {
                if (element.title.toLowerCase() === props.data.toLowerCase()) {
                    return (
                        <div key={element.title}>
                            <h1>{element.title}</h1>
                            {element.guide.map((guide) => {
                                if (guide.title) {
                                    return (
                                        guide.title.map((title, i) => {
                                            return (
                                                <div key={title}>
                                                    <h2>{title}</h2>
                                                    <p>{guide.p1[i]}</p>
                                                </div>
                                            )
                                        })
                                    )
                                }
                                else {
                                    return (
                                        <table className='docs-table'>
                                            <tr>
                                                <th>Class</th>
                                                <th>Properties</th>
                                            </tr>
                                            {guide.column1.map((column1, index) => {
                                                return (
                                                    <tr key={column1}>
                                                        <td>{column1}</td>
                                                        <td>{guide.column2[index]}</td>
                                                        <br />
                                                    </tr>
                                                )
                                            })}
                                        </table>
                                    )
                                }
                            })}
                        </div>
                    )
                }
            })}
        </div>
    )
}
