import React, { useState } from 'react'
import "./Service.css"

export const Service = () => {
    const [toggleState, setToggleState] = useState(0)

    const updateToggle = (index: number) => {
        setToggleState(index)
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>
            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Fullstack  <br /> Developer</h3>
                    </div>
                    <span className="services__button" onClick={() => updateToggle(1)}>View More
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => updateToggle(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Fullstack Developer</h3>
                            <p className="services__modal-description">
                                Service with a year of experience. providing quality full stack applications to clients and companies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I Develop Full Stack Web Applications Client and Server side.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Providing technical support and maintenance services for existing applications.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Integrating third-party APIs and services into applications.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Troubleshooting and debugging code issues, including performance and scalability optimizations.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Keeping up-to-date with the latest trends and technologies in full-stack development.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title"> Frontend  <br /> Developer</h3>
                    </div>
                    <span className="services__button" onClick={() => updateToggle(2)}>View More
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => updateToggle(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Frontend Developer</h3>
                            <p className="services__modal-description">
                                Service with a year of experience. providing quality full stack applications to clients and companies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I Develop Full Stack Web Applications Client and Server side.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Providing technical support and maintenance services for existing applications.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Integrating third-party APIs and services into applications.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Troubleshooting and debugging code issues, including performance and scalability optimizations.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Keeping up-to-date with the latest trends and technologies in full-stack development.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Backend  <br /> Developer</h3>
                    </div>
                    <span className="services__button" onClick={() => updateToggle(3)}>View More
                        <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>
                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => updateToggle(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Backend Developer</h3>
                            <p className="services__modal-description">
                                Service with a year of experience. providing quality full stack applications to clients and companies.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        I Develop Full Stack Web Applications Client and Server side.
                                    </p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Providing technical support and maintenance services for existing applications.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Integrating third-party APIs and services into applications.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Troubleshooting and debugging code issues, including performance and scalability optimizations.
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Keeping up-to-date with the latest trends and technologies in full-stack development.
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

