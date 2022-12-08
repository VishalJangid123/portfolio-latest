import React, { useEffect, useState } from 'react'
import "./portfolio.css"
import Modal from "./Modal";
import { onValue, ref } from 'firebase/database';
import { db } from '../../firebase';

const Portfolio = () => {

    const [projects, setProjects] = useState([]);
    const [isloading, setLoading] = useState(true);

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActivePortfolio] = useState("unity");   

    const [modal, setModal] = useState({ show: false, data: null });

    const [activeDot, setActiveDot] = useState(0);
    const [ totalDots,setTotalDots] = useState(0);
    const handleClose = () => {
        setModal({ show: false, data: null });
      };

    const openProject = (project) => {
      setModal({ show: true, data: project });
    };
    
    useEffect(() => {
        onValue(ref(db),snapshot => {
            const data = snapshot.val();
            if(data != null){
                let projects = data.projects;
                setProjects(projects);
                setLoading(false);
            }
        });
    }, []);

    const slideLeft = () => {
        if(activeDot == 0){
            return;
        }
        var slider = document.getElementById("portfolio__holder-id");
        slider.scrollLeft = slider.scrollLeft - 600;
        setTotalDots((slider.clientWidth / 600) + 1)
        setActiveDot(activeDot == 0 ? 0 : activeDot - 1)
    }

    const slideRight = () => {
        if(activeDot == totalDots+1){
            return;
        }
        var slider = document.getElementById("portfolio__holder-id");
        slider.scrollLeft = slider.scrollLeft + 600;
        setActiveDot(activeDot == totalDots+1 ? activeDot : activeDot + 1)
    }

    const slidingDot = (index) => {
        var slider = document.getElementById("portfolio__holder-id");
        if(index <= activeDot){
            slider.scrollLeft = slider.scrollLeft - (600 * (index + activeDot));
        }
        else{
            slider.scrollLeft = slider.scrollLeft + (600 * index);
        }
        setActiveDot(index)
    }

    const dotelement = () => {
        let total = [];
        for(let index = 0; index <= totalDots + 1; index++){
            total.push(<div key={index} className="portfolio__slider-dot" onClick={() => slidingDot(index)}>
            <i className={activeDot == index ? 'bx bxs-circle' : 'bx bx-circle' }></i>
        </div>)
        }
       return total;
    }

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
                <li>
                <a  onClick= {() => setActivePortfolio("python")} 
                        className={ activeNav === "python" ? "portfolio__link p_active_link  button--flex" 
                    : "portfolio__link  button--flex"}
                    >
                       Python
                    </a>
                </li>
            </ul>
       </nav>

    </div>
    

    <div className="portfolio__main-container">
    <div className="portfolio__slider-left-icon" onClick={() => slideLeft()}> 
            <i className="uil uil-arrow-circle-left"></i>
        </div>

        <div className="portfolio__slider-right-icon" onClick={() => slideRight()}>
            <i className="uil uil-arrow-circle-right"></i>
        </div>

        <div className="portfolio__slider-dots">
            {
                dotelement()
            }

        </div>

        <div className='portfolio__swipe-more'>
            <span>Swipe for more </span><i class='bx bxs-chevrons-right bx-fade-right'></i>
        </div>
        


<div className='grid container portfolio__holder' id="portfolio__holder-id">
   

    
    
    
    {
        projects != null && projects[activeNav] != null && isloading === false && 
        projects[activeNav].map((project, index) => {
            return (
           
                <div className="portfolio__content" key={index} onClick={() => openProject(project)}>
            <div className='portfolio__mainImage'>
                        <img src={project.main_image} alt="" className="src" key={index} />

            </div>
            
            <div className='portfolio__content-details'>
                <i className="uil uil portfolio__icon"></i>
                <h3 className="portfolio__title">{project.title}</h3>
                <span className="portfolio__subtitle">{project.desc} 
                
                </span>
            </div>
    
            <span className="portfolio__button" >More <i className="uil uil-arrow-right portfolio__button-icon"></i></span>
        
        
        </div>
       
            )
        })
    }
    </div>
    </div>
   
    
    {modal.show && modal.data && <Modal closeModal={handleClose} data={modal.data} />}
    </div>
</section>
  )
}

export default Portfolio