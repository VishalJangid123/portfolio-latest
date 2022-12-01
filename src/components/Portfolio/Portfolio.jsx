import React, { useEffect, useState } from 'react'
import "./portfolio.css"
import Modal from "./Modal";

import {unityProjects} from "./P_Data";


const Portfolio = () => {
    
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActivePortfolio] = useState("unity");   

    const [modal, setModal] = useState({ show: false, data: null });

    const handleClose = () => {
        setModal({ show: false, data: null });
      };

    const openProject = (index) => {
      setModal({ show: true, data: unityProjects[activeNav][index] });
    };
    console.log(unityProjects.unity);

  return (
    <section className="about section" id="about">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle"> Projects I had worked on</span>


      <div className="portfolio__container container">
    <div className="portfolio__tabs">
       <nav className="portfolio__nav">
            <ul className='portfolio__list grid'>
                <li>
                    <a onClick= {() => setActivePortfolio("unity")} 
                        className={ activeNav === "unity" ? "portfolio__link p_active_link  button--flex" 
                    : "portfolio__link button--flex"}
                    >
                        Unity
                    </a>
                </li>
                <li>
                <a  onClick= {() => setActivePortfolio("cpp")} 
                        className={ activeNav === "cpp" ? "portfolio__link p_active_link  button--flex" 
                    : "portfolio__link  button--flex"}
                    >
                       C++
                    </a>
                </li>
            </ul>
       </nav>

    </div>
<div className='grid container portfolio__holder'>
    {
        unityProjects[activeNav] && 
        unityProjects[activeNav].map((project, index) => {
            return (
           
                <div className="portfolio__content" key={index} onClick={() => openProject(index)}>
            <div className='portfolio__mainImage'>
                        <img src={ "/assests/" + project.main_image} alt="" className="src" />

            </div>
            
            <div className='portfolio__content-details'>
                <i className="uil uil portfolio__icon"></i>
                <h3 className="portfolio__title">{project.title}</h3>
            </div>
    
            <span className="portfolio__button" >More <i className="uil uil-arrow-tight portfolio__button-icon"></i></span>
        
        
        </div>
       
            )
        })
    }
    </div>
    
   
    
    {modal.show && modal.data && <Modal closeModal={handleClose} data={modal.data} />}
    
    
    </div>



      </section>
  )
}

export default Portfolio