import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My acdemic journey</span>


<div className="qualification__container container">
    <div className="qualification__tabs">
        <div className={
            toggleState === 1
            ? "qualification__button qualification__active button--flex"
            : "qualification__button button--flex"
        }
        onClick={() => toggleTab(1)}
        >
            <i className="uil uil-graduation-cap qualification__active qualification__icon"></i> Education
        </div>

        <div className={
            toggleState === 2
            ? "qualification__button qualification__active button--flex"
            : "qualification__button button--flex"
        }
        onClick={() => toggleTab(2)}
        >
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
        </div>

    </div>

<div className="qualification__section">
    <div className={toggleState === 1 ?
            "qualification__content qualification__content-active"
        : "qualification__content"}>
        <div className="qualification__data">
        <div>
            <h3 className="qualification__title">Master degree</h3>
            <span className="qualification__subtitle"> Thammasat University </span>
            <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2021 - Present
            </div>
            </div>

            <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
        </div>
        </div>


        <div className="qualification__data">

        <div></div>

        <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
        </div>

        <div>
            <h3 className="qualification__title"></h3>
            <span className="qualification__subtitle"> BKBIET University </span>
            <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2021 - Present
            </div>
            </div>
        </div>

       

    </div>





    {/* work section here */}
    <div className={toggleState === 2 ?
            "qualification__content qualification__content-active"
        : "qualification__content"}>
        <div className="qualification__data">
        <div>
            <h3 className="qualification__title">work</h3>
            <span className="qualification__subtitle"> Thammasat University </span>
            <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2021 - Present
            </div>
            </div>

            <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
        </div>
        </div>


        <div className="qualification__data">

        <div></div>

        <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
        </div>

        <div>
            <h3 className="qualification__title"></h3>
            <span className="qualification__subtitle"> work2 </span>
            <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2021 - Present
            </div>
            </div>
        </div>

       

    </div>






{/* end here */}
    
</div>

</div>

    </section>
  )
}

export default Qualification