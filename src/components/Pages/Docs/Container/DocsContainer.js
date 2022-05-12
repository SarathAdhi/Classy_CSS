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
                                        <div className='docs-table-container'>
                                            <table className='docs-table'>
                                                <thead>
                                                    <tr>
                                                        <th>Class</th>
                                                        <th>Properties</th>
                                                    </tr>
                                                </thead>
                                                {guide.classes.map((name, index) => {
                                                    return (
                                                        <tbody>
                                                            <tr key={name}>
                                                                <td className='classycss-class'>{name}</td>
                                                                <td>{guide.properties[index]}</td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                })}
                                            </table>
                                        </div>

                                    )
                                }
                            })}
                        </div>
                    )
                } else return '';
            })}
        </div>
    )
}
