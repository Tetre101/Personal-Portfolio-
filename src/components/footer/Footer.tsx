import React from "react";
import './footer.css'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container container'>
                <h1 className='footer__title'>TetreBasile</h1>

                <ul className='footer__list'>
                    <li>
                        <a href='#about' className='footer__link'>
                            About
                        </a>
                    </li>

                    <li>
                        <a href='#portfolio' className='footer__link'>
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href='#testimonials' className='footer__link'>
                            Testimonials
                        </a>
                    </li>
                </ul>

                <div className='footer__social'>
                    <a
                        href='https://instagram.com/peterwonder4all?igshid=NTc4MTIwNjQ2YQ=='
                        className='footer__social-link'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <i className='bx bxl-instagram'></i>
                    </a>

                    <a
                        href='https://www.linkedin.com/in/ogbonnapeterbasildev'
                        className='footer__social-link'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <i className='bx bxl-linkedin'></i>
                    </a>

                    <a
                        href='https://github.com/Tetre101'
                        className='footer__social-link'
                        target='_blank'
                        rel='noopener noreferrer'>
                        <i className='bx bxl-github'></i>
                    </a>
                </div>

                <span className='footer__copy'>
                    &#169; Peter Basil O. 2023 All rigths reserved
                </span>
            </div>
        </footer>
    );
};

