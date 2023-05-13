import React from 'react'
import "./Work.css"
import { Works } from './Works'

export const Work = () => {
    return (
        <section className="work selection" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className='section__subtitle'>Most Recent Works</span>
            <Works />
        </section>
    )
}



