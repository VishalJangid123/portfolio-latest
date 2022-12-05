import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">vishaljangid1@outlook.com</span>

                        <a href="" className="contact__button">
                            Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">vishaljangid1@outlook.com</span>

                        <a href="" className="contact__button">
                            Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                </div>


            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write me your project</h3>

                <form action="" className="contact__form">
                    <div className="contact__form-div">
                        <label htmlFor="" className="contact__form-tag">Name</label>
                        <input type="text" name="name"
                         className="contact__form-input"
                         placeholder="Insert your name" />

<label htmlFor="" className="contact__form-tag">Name</label>
                        <input type="text" name="name"
                         className="contact__form-input"
                         placeholder="Insert your name" />
                    </div>

                    <button href="" className="button button--flex">Say Hello</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact