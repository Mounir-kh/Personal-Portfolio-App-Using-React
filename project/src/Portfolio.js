import React from 'react';
import './Portfolio.css';

function Portfolio(){
    return (
        <div className='port' id='yepa'>
            <section className='portCard' >
                <img src="https://mounir-kh.github.io/News-homepage/assets/images/image-web-3-desktop.jpg" alt="" />
                <p>Visite site :</p><a href='https://mounir-kh.github.io/News-homepage/' target='_blank'>News-homepage</a>
            </section>
            <section className='portCard'>
                <img src="https://mounir-kh.github.io/Article-preview-component/images/drawers.jpg" alt="" />
                <p>Visite site :</p><a href="https://mounir-kh.github.io/Article-preview-component/" target='_blank'>Article-preview-component</a>
            </section>
            <section className='portCard'>
                <img src="https://mounir-kh.github.io/-Huddle-landing-page-with-a-single-introductory-section-P/images/illustration-mockups.svg" alt="" />
                <p>Visite site :</p><a href="https://mounir-kh.github.io/-Huddle-landing-page-with-a-single-introductory-section-P/" target='_blank'>Huddle-landing-page-with-a-single-introductory-section-P</a>
            </section>
        </div>
    )
}
export default Portfolio