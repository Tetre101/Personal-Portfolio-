import React, { useState } from "react";
import "./Qualification.css";

export const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const updateToggle = (index: number) => {
        setToggleState(index)
    }
    return (
        <section className='qualification section'>
            <h2 className='section__title'>Qualification</h2>
            <span className='section__subtitle'>My personel journey</span>

            <div className='qualification__container container'>
                <div className='qualification__tabs'>
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__button qualification__active button--flex active-qualification"
                                : "qualification__button button--flex"
                        }
                        onClick={() => updateToggle(1)}>
                        <i className='uil uil-graduation-cap qualification__icon'></i>
                        Education
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification__button qualification__active button--flex active-qualification"
                                : "qualification__button button--flex"
                        }
                        onClick={() => updateToggle(2)}>
                        <i className='uil uil-briefcase-alt qualification__icon '></i>
                        Experience
                    </div>
                </div>

                <div className='qualification__sections'>
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>MBA. Business Management</h3>
                                <span className='qualification__subtitle'>
                                    V.N.Karazin Kharkiv Nationa University
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i> june 2019 - Sep 2021
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>Web Development</h3>
                                <span className='qualification__subtitle'>
                                    Wild Code School, Berlin.
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i> july 2022 - Present
                                </div>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>
                                    Web Development
                                </h3>
                                <span className='qualification__subtitle'>
                                    The Complete JavaScript Course: From Zero to Expert!,Udemy.
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i> December 2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>
                                    Web Development
                                </h3>
                                <span className='qualification__subtitle'>
                                    The Complete 2023 Web Development Bootcamp,Udemy.
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i> January 2023 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>Web Develoment</h3>
                                <span className='qualification__subtitle'>
                                    The Nest JS Bootcamp - Complete Developer Guide
                                </span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i> May 2022 - Present
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            toggleState === 2
                                ? "qualification__content qualification__content-active"
                                : "qualification__content"
                        }>
                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>Software Engineer</h3>
                                <span className='qualification__subtitle'>Wild Code School</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i> july 2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'>Account Manager and I.T. Specialist</h3>
                                <span className='qualification__subtitle'>Dropshipping Startup</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i> October 2019 - june 2022
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                            <div>
                                <h3 className='qualification__title'>
                                    Africanty Wears
                                </h3>
                                <span className='qualification__subtitle'>Sales Supervisor</span>
                                <div className='qualification__calender'>
                                    <i className='uil uil-calendar-alt'></i> October 2015 - November 2017
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
